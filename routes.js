import express from "express"
import model from "./schema.js"

const router = express.Router()

const { URLs } = model

const port = process.env.PORT || 4000

router.post('/api/v1/urls', async (req, res) => {
  console.log('Request in:', req.body)
  const id = Date.now() + await URLs.collection.estimatedDocumentCount()
  const newURL = new URLs({
    realUrl: req.body.url,
    expireTimeStamp: new Date(req.body.expireAt),
    ID: `${id}`
  })

  await newURL.save()

  const respond = {
    id: newURL.id,
    shortUrl: `http://localhost:${port}/${newURL.ID}`
  }

  res.status(200).send(respond)

})

router.get('/:pathid', async (req, res) => {
  const pathid = req.params.pathid
  const destination = await URLs.findOne({ID: pathid})
  console.log("Url director: ", pathid)
  console.log(destination)
  
  if (destination === null) {
    res.status(404).send('404 NOT Found')
  } else {
    const date = new Date(destination.expireTimeStamp)
    if (date < Date.now()) {
      res.status(404).send('404 NOT Found')
    } else {
      res.redirect(destination.realUrl)
    }
  }
})

export default router