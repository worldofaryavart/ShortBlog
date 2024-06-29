const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: 'default-avatar.png'},
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
