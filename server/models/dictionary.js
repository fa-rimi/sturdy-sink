const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tagsSchema = require("./tags");

const dictionarySchema = new Schema(
  {
    word: {
      type: String,
      required: true,
    },
    definition: {
      type: String,
      required: true,
    },
    tags: [tagsSchema],
  },
  { timestamps: true }
);

module.exports = dictionarySchema;
