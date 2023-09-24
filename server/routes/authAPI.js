const express = require("express");
const router = express.Router();

const { test, registerUser, loginUser } = require('../controllers/authControllers');

// Routes
// Authorization Routes
router.post("/SignUp", registerUser)
router.post("/SignIn", loginUser)


// Dictionary Routes
// Get: See All Words
// Post: Create Word 
// Post: Update Word
// Delete: Delete Word

// Export
module.exports = router;