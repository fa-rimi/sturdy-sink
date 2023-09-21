const express = require("express");
const router = express.Router();

const { test, SignUp } = require('../controllers/authControllers');

// Routes
router.get("/", test)
router.post("/SignUp", SignUp)

// Export
module.exports = router;