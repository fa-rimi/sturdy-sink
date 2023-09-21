const express = require("express");
const router = express.Router();
const cors = require("cors");

const { test } = require('../controllers/authControllers');

// Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000/'
    })
)

// Routes
router.get("/", test)

// Export
module.exports = router;