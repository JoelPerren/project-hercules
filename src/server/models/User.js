const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("User", UserSchema);
