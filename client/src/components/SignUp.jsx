import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the checkmark icon

const SignUp = () => {
  // Initialize the registration form fields as an object with empty strings
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  // Determine whether to display the checkmark
  const showCheckmark =
    registerData.confirm === registerData.password &&
    registerData.confirm !== "" && // Added condition: confirm is not empty
    registerData.password !== ""; // Added condition: password is not empty

  // Handle input changes for all form fields
  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
      error: "", // Clear the error when the user makes changes
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Set a general error message for registration failure
    setRegisterData({
      ...registerData,
      error: "Registration failed. Please try again :)",
    });

    // You can perform further registration logic here, such as making API requests

    // If there's an error during registration, set an appropriate error message
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          {/* Label and input field for the Name */}
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={registerData.name}
            onChange={handleChange}
            required
          />

          {/* Label and input field for the Email */}
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={registerData.email}
            onChange={handleChange}
            required
          />

          {/* Label and input field for the Password */}
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={registerData.password}
            onChange={handleChange}
            required
          />

          {/* Label and input field for confirming the Password */}
          <label htmlFor="confirm">Confirm Password: </label>
          <div className="password-confirm">
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={registerData.confirm}
              onChange={handleChange}
              required
            />
            {/* Display the green checkmark icon when passwords match */}
            {showCheckmark && (
              <FaCheckCircle className="checkmark-icon" color="green" />
            )}
          </div>

          {/* Display error message if there's a registration error */}
          {registerData.error && <p>{registerData.error}</p>}

          {/* Submit button with disabled attribute */}
          <button
            type="submit"
            disabled={registerData.password !== registerData.confirm}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
