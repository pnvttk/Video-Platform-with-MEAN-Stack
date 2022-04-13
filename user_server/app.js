const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')
const session = require("express-session"); //fix passport

// Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database' + config.database)
})

// On Error
mongoose.connection.on('Error', (err) => {
    console.log('Database error: ' + err)
})

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// Cors Middelware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware
app.use(express.json());

// Passport Middleware
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Start Server
app.listen(port, () => {
    console.log('Server Started on port ' + port);
});