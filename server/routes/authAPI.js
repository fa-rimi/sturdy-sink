const express = require("express");
const router = express.Router();

const { test, registerUser } = require('../controllers/authControllers');

// Routes
router.get("/", test)
router.post("/SignUp", registerUser)

// Export
module.exports = router;