const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  description: String,
  choices: [mongoose.SchemaTypes.ObjectId],
});

const Chapter = mongoose.model("Chapter", chapterSchema);

module.exports = Chapter;
