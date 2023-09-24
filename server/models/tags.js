const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
  tag: {
    type: String,
  },
  tag1: {
    type: String,
  },
  tag2: {
    type: String,
  },
  tag3: {
    type: String,
  },
  tag4: {
    type: String,
  },
});

module.exports = tagsSchema;
