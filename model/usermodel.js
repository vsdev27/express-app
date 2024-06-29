const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    match: /[a-z0–9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0–9!#$%&’*+/=?                  ^_`{|}~-]+)*@(?:[a-z0–9](?:[a-z0–9-]*[a-z0–9])?\.)+[a-z0–9](?:[a-z0–  9-]*[a-z0–9])?/,
  },
  password: String, 
  phone_number: Number,
});
module.exports = mongoose.model("user", userSchema);