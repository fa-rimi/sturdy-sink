const Dictionary = require("../models/dictionary");

// Function to create a new entry
const newEntry = async (req, res) => {
  const { word, definition, example } = req.body;

  try {
    // Check if Word exists
    const wordExists = await Dictionary.findOne({ word });

    if (wordExists) {
      return res.status(400).json({ error: "Word already exists" });
    }

    // Create a new word entry
    const newWord = new Dictionary({
      word,
      definition,
      example,
    });

    // Save the new word entry to the database
    await newWord.save();

    res.status(200).json({ message: "Word added successfully" });
  } catch (error) {
    console.error("Error creating new entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to display words
const displayWords = async (req, res) => {
  try {
    // Retrieve all words from the database
    const words = await Dictionary.find();

    res.status(200).json(words);
  } catch (error) {
    console.error("Error retrieving words:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  newEntry,
  displayWords,
};
