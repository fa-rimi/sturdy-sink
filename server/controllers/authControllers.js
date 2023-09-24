const UserModel = require("../models/users");
const { hashPassword, comparePassword } = require("../helpers/hash");
const { createToken, verifyToken } = require("../helpers/jwt");

/**
 * Register Endpoint -> authAPI.js (router.post("/SignUp", registerUser))
 * @param {*} req
 * @param {*} res
 * @description Registers a new user
 * @returns res.json({ error: "Message regarding input type "})
 */
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check for name
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // Check for password
    if (!password || password.length < 6) {
      return res.json({
        error: "Password must contain 6 characters",
      });
    }
    // Check for email
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.json({
        error: "Email is already in use",
      });
    }

    // Create User
    const hashedPassword = await hashPassword(password);
    const createUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Create new token
    const token = createToken(user);

    // Set a cookie with the token
    res.cookie("authToken", token, {
      httpOnly: true, // Make the cookie accessible only via HTTP(S)
      maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours
    });

    return res.json({
      user: createUser,
      token, // Send the token as part of the response
    });
  } catch (error) {
    console.log(error);
    // You may want to handle and return an error response here
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Login Endpoint -> authAPI.js (router.post("/SignIn", loginUser))
 * @param {*} req
 * @param {*} res
 * @description Logs in a user
 * @returns res.json({ error: "Message regarding login status "})
 */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists with email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({
        error: "Email not found",
      });
    }

    // Check if password matches
    const checkMatch = await comparePassword(password, user.password);
    if (checkMatch) {
      // Password is correct, create a JWT token for the user
      const token = createToken();

      // Set a cookie with the token
      res.cookie("authToken", token, {
        httpOnly: true, // Make the cookie accessible only via HTTP(S)
        maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours
      });

      res.json({
        message: "Correct password",
        user, // Send the user details if needed
        token, // Send the token as part of the response
      });
    } else {
      // Password is incorrect
      return res.json({
        error: "Incorrect password",
      });
    }
  } catch (error) {
    console.log(error);
    // You may want to handle and return an error response here
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
