import mongoose from "mongoose"

const Schema = mongoose.Schema

const urlSchema = new Schema (
  {
    expireTimeStamp: {
      type: Date,
      required: true
    },
    realUrl: {
      type: String,
      required: true
    }, 
    ID: {
      type: String,
      required: true
    }
  }
)

const URLs = mongoose.model('URLs', urlSchema)

export default {  URLs }