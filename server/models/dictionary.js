const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Tags = require("./tags"); // Import the Tags schema

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
    example: {
      type: String,
    },
    tags: [
      {
        type: Schema.Types.ObjectId, // Use ObjectId to reference the Tags schema
        ref: "Tags", // Reference the "Tags" model
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dictionary", dictionarySchema);
