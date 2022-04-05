import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongo from './mongo.js'
import router from './routes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`)
  mongo.connect()
})
