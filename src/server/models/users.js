const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

let Users = mongoose.model("users", usersSchema);

module.exports = Users;
