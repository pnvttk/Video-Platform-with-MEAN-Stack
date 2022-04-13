const mongoose = require('mongoose')
const Schema = mongoose.Schema

const videoSchema = new Schema({
  title: String,
  url: String,
  description: String,
  img_url: String,
})

const VideoModel = mongoose.model('Video', videoSchema)
module.exports = VideoModel