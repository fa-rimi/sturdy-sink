// authMiddleware.js
const { verifyToken } = require("../helpers/jwt"); // Adjust the path to your jwt.js file

// Middleware to check if the user is authenticated
function checkAuth(req, res, next) {
  // Get the token from the request cookies (assuming it's sent as a cookie)
  const token = req.cookies.authToken;

  if (!token) {
    // If the token is missing, the user is not authenticated
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Verify and decode the token using your verifyToken function
    const decodedToken = verifyToken(token);

    if (!decodedToken) {
      // Token verification failed, so the user is not authenticated
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Attach the decoded user information to the request object
    req.user = decodedToken.user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Token verification failed, so the user is not authenticated
    return res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = checkAuth;
