const express = require("express");
const bodyParser = require('body-parser')
require("dotenv").config();
require('./services/passport')

const authRoutes = require("./routes/auth-routes")

// Initialize Express App
const app = express();

// Middle ware to handle Routes
app.use(authRoutes)

// Assign port and listen
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Started...");
});

//wait
