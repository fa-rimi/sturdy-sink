// Import necessary modules
const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./config/connectDB");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Load environment variables
dotenv.config();

// Import the authentication middleware
const checkAuth = require("./config/checkAuth"); // Adjust the path

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

// Serve static files from the "dist" directory
const distPath = path.join(__dirname, "../client/dist");
app.use(express.static(distPath));

// Routes
const authAPIRouter = require("./routes/authAPI");
app.use("/", authAPIRouter);

const dictionaryRoutes = require("./routes/dictionaryAPI");

// Protect routes that require authentication
app.use("/dictionary", checkAuth, dictionaryRoutes); // Example: "/dictionary" is a protected route

/**-----------------|
 **Catch All Route* |
 * -----------------|
 *
 * For all other requests that do not have a distinct route, serve the 'index.html' file
 */
app.get("/*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start Server
(async () => {
  try {
    // Connect to the database
    await connectToDatabase();

    // Start the Express server
    app.listen(port, () => {
      console.log(`Express server running live on localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
})();
