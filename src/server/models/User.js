const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  refresh_token: String,
});

module.exports = mongoose.model("User", UserSchema);
