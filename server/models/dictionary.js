const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dictionarySchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true, // Make sure each user has a unique dictionary
  },
  entries: [
    {
      name: String,
      definition: String,
      word: String,
      example: String,
      tags: [String],
    },
  ],
});

module.exports = mongoose.model("Dictionary", dictionarySchema);
