const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
  tags: [String], // Use an array of strings for tags
});

module.exports = mongoose.model("Tags", tagsSchema);
