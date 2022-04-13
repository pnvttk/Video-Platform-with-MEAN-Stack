const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/user')
const config = require('../config/database')

module.exports = function (passport) {
    let opts = {}
    // opts.jwtFromRequest = ExtractJwt.fromAuthHeader(); //old
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt'); // YT-comment
    // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('jwt'); // passportjs.org // error Unauthorized
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log(jwt_payload) // check Unauthorized in console nodemon
        // User.getUserById(jwt_payload._id,(err, user) => { // old
        User.getUserById(jwt_payload.user._id,(err, user) => {
            if (err) {
                return done(err, false)
            }
            if (user) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        })
    }))
}