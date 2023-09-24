const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dictionarySchema = require("./dictionary");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      minLength: 6,
      required: true,
    },
    dictionary: [dictionarySchema], // Embed the personal dictionary as an array of dictionary entries
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);