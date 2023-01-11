const express = require("express");
require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

// Passport Config
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

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Started...");
});
