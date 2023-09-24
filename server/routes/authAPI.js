const express = require("express");
const router = express.Router();

const { test, registerUser, loginUser } = require('../controllers/authControllers');

// Routes
router.post("/SignUp", registerUser)
router.post("/SignIn", loginUser)

// Export
module.exports = router;