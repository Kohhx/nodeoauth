const mongoose = require('mongoose');

// Destructure and get Schema out of mongoose
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true
  }
})

mongoose.model('users', userSchema);
