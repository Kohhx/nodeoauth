const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const mongoose = require("mongoose");
const passport = require("passport");

// Model has to be imported first as passport js is using it
require("./models/user")

require("dotenv").config();
require("./services/passport");


const authRoutes = require("./routes/auth-routes");

// Start Here ==================================================================

// Initialize Express App
const app = express();

// Middle ware to handle Routes
app.use(authRoutes);

// Assign port and listen
const PORT = process.env.PORT || 5000;

// Mongoose Initialize and then run server
mongoose.connect(process.env.MONGO_URI, () => {
  app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}....`);
  });
});

//wait
