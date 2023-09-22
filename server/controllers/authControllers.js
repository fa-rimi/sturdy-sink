const UserModel = require("../models/users");

// Test route
const test = (req, res) => {
  res.json("Test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(201).json(user); // Respond with the created user data
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  test,
  registerUser,
};
