const UserModel = require("../models/users");

// Test route
const test = (req, res) => {
  res.json("Test is working");
};

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

    const createUser = await UserModel.create({
      name, email, password
    })

    return res.json(createUser)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
};
