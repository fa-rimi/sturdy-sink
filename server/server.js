const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./config/connectDB");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // extended: true -> because I will be using multiple schemas (embedded schemas)
app.use(cookieParser()); // Parse incoming cookies attached to HTTP requests

// Enable CORS for your frontend domain (http://localhost:3000 in this case)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allow credentials (cookies)
  })
);

// Routes
const authAPIRouter = require("./routes/authAPI");
app.use("/", authAPIRouter);

// Start Server
(async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Express server running live on localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
})();
