import { useState } from "react";

const SignUp = () => {
  // Initialize the registration form fields as an object with empty strings
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "", // Add an error field to handle potential errors
  });

  // Disable the submit button if passwords do not match
  const disable = registerData.password !== registerData.confirm;

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

    // Perform form validation and user registration
    // Add validation logic and error handling

    // If successful, proceed with user registration

    // If there's an error during registration, set an error message in state
    // Example: setRegisterData({ ...registerData, error: 'Registration failed' });
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
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            value={registerData.confirm}
            onChange={handleChange}
            required
          />

          {/* Display error message if there's an error */}
          {registerData.error && <p>{registerData.error}</p>}

          {/* Submit button with disabled attribute */}
          <button type="submit" disabled={disable}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
