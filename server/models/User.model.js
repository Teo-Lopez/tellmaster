const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  savedGames: { type: [mongoose.SchemaTypes.ObjectId], default: [] },
  characters: { type: [mongoose.SchemaTypes.ObjectId], default: [] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;