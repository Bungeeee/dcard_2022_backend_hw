import mongoose from "mongoose"

const connectMongo = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

const db = mongoose.connection

db.on('error', console.error.bind(console, 'DB Connection Error:'))
db.once('open', () => {
  console.log('MongoDB connected!')
})

export default {
  connect: connectMongo
}