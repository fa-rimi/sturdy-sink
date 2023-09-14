const express = require("express");
const path = require("path");
require("dotenv").config(); // Load environment variables
const connectToDatabase = require("./config/connectDB");

const app = express();
const port = process.env.PORT || 3001;

const distPath = path.join(__dirname, "../client/dist"); // Defined path to dist/
app.use(express.static(distPath)); // Serve static files in dist/

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
 * @method listen
 */
// Connect to the database and start the server
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
