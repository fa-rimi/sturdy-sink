const UserModel = require("../models/users");
const { hashPassword, comparePassword } = require("../helpers/hash");

// Test route
const test = (req, res) => {
  res.json("Test is working");
};

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
    const checkExist = await UserModel.findOne({ email });
    if (checkExist) {
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

    return res.json(createUser);
  } catch (error) {
    console.log(error);
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
    const checkExist = await UserModel.findOne({ email });
    if (!checkExist) {
      return res.json({
        error: "Email not found",
      });
    }

    // Check if password matches
    const checkMatch = await comparePassword(password, checkExist.password);
    if (checkMatch) {
      // Password is correct
      res.json("Correct password");
    } else {
      // Password is incorrect
      return res.json({
        error: "Incorrect password",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
