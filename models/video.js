const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const config = require('../config/database')

// Video Schema
const VideoSchema = mongoose.Schema({
    title: {
        type: String
    },
    url: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    }
})

// const User = module.exports = mongoose.model('User', UserSchema)
const Video = module.exports = mongoose.model('Video', VideoSchema)

// module.exports.getUserById = function (id, callback) {
//     User.findById(id, callback)
// }

// module.exports.getUserByUsername = function (username, callback) {
//     const query = {username: username}
//     User.findOne(query, callback)
// }

// module.exports.addUser = function (newUser, callback) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser.save(callback)
//         })
//     })
// }

// module.exports.comparePassword = function (candidatePassword, hash, callback) {
//     bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//         if (err) throw err;
//         callback(null, isMatch);
//     })
// }