const express = require('express');
const { newEntry, displayWords } = require('../controllers/dictionaryControllers');
const router = express.Router();

// Dictionary Routes
// Get: See All Words
router.get("/AllWords", displayWords)

// Post: Create Word 
router.post("/NewEntry", newEntry)
// Post: Update Word
// Delete: Delete Word

module.exports = router;