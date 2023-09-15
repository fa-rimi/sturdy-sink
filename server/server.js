const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectToDatabase = require("./config/connectDB");

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the "dist" directory
const distPath = path.join(__dirname, "../client/dist");
app.use(express.static(distPath));

/**-----------------|
 **Catch All Route* |
 * -----------------|
 *
 * For all other requests that do not have a distinct route, serve the 'index.html' file
 */
app.get("/*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

/**
 * * Start Server
 * @description Connect to the database and start the server
 */
(async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`express server running live on localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
})();
