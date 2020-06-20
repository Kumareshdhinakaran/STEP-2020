var mongoose = require("mongoose");

var commentsSchema = new mongoose.Schema({
  author: String,
  text: String,
});

module.exports = mongoose.model("Comment", commentsSchema);
