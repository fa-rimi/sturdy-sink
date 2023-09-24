const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  },
  { timestamps: true }
);

module.exports = dictionarySchema;