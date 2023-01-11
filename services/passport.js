const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();

// Passport config for google
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_SECRETKEY,
    callbackURL: "/auth/google/callback",
  },
  (accessToken, refreshToken, profile, done) => {
    console.log("access Token", accessToken);
    console.log("Refresh Token", refreshToken);
    console.log("profile", profile);
  })
);
