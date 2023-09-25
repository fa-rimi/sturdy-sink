const Dictionary = require("../models/dictionary");

// Function to create a new entry
const newEntry = async (req, res) => {
  const { word, definition, example } = req.body;
  const userId = req.user._id;

  try {
    // Check if Word exists
    const wordExists = await Dictionary.findOne({ word, user: userId });

    if (wordExists) {
      // Send a custom error message to the client
      return res.status(400).json({ error: "Word already exists" });
    } else {
      // Example data with 'word' and 'definition' fields
      const dictionaryData = {
        user: userId, // Set the user ID
        entries: [
          {
            word,
            definition,
            example,
          },
        ],
      };

      // Create a new dictionary entry with the provided data
      const newWord = new Dictionary(dictionaryData);

      // Save the new word entry to the database
      await newWord.save();

      return res.status(200).json({ message: "Word added successfully" });
    }
  } catch (error) {
    console.error("Error creating new entry:", error);
    return res.status(500).json({ error: "Internal server error" });
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
