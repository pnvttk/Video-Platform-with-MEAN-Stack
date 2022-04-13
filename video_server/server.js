const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require("express-session"); //fix passport
const config = require('./config/database')

//! route
const videoRoute = express.Router()

// connect to mongodb
const mongoose = require('mongoose')
mongoose.connect(config.database);
/*
mongoose.connect('mongodb://localhost:27017/meanauth')*/

// throw error 
mongoose.connection.on('error', err => {
  console.error('MongoDB error', err)
})

// Cors Allow Origin Cross domain
app.use(cors({
  origin: '*'
}));

// import model
const Video = require('./models/videos')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'Hello From Nodejs' })
})

// video collection

//* get all video
app.get('/videos', async (req, res) => {
  const videos = await Video.find({})
  res.json(videos)
})

//* get a video
app.get('/video/:id', async (req, res) => {
  const { id } = req.params
  const video = await Video.findById(id)
  res.json(video)
})

//! vidoe Route
videoRoute.route('/video/:id').get((req, res) => {
  video.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//! Update Route
videoRoute.route('/update-video/:id').put((req, res, next) => {
  video.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error)
    } else {
      res.json(data)
      console.log('Video Updated Successfully')
    }
  })
})

//* add video
app.post('/add-video', async (req, res) => {
  const payload = req.body
  const videos = new Video(payload)
  await videos.save()
  res.status(201).end()
})
  
//* update video 
app.put('/update-video/:id', async (req, res) => {
  const payload = req.body
  const { id } = req.params
  const videos = await Video.findByIdAndUpdate(id, { $set: payload })
  res.json(videos)
})

//* delete video
app.delete('/delete-video/:id', async (req, res) => {
  const { id } = req.params
  await Video.findByIdAndDelete(id)
  res.status(204).end()
})

// user jwt
/*
const users = require('./models/user');

// // Cors Middelware
app.use(cors());

// // Set Static Folder
// app.use(express.static(path.join(__dirname, 'public')))

// // Body Parser Middleware
// app.use(express.json());

// Passport Middleware
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport);

// app.use('/users', users);
*/


app.listen(9000, () => {
  console.log('Application is running on port 9000')
})