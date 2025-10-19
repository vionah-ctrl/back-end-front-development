const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  city: String,
});

module.exports = mongoose.model("User", userSchema);
