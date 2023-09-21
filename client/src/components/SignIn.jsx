import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
    error: "", // Add an error field to handle potential errors
  });

  // Handle input changes for all form fields
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
      error: "", // Clear the error when the user makes changes
    });
  };

  return (
    <div>
      <form>
        {/* Label and input field for the Name */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={loginData.name}
          onChange={handleChange}
          required
        />

        {/* Label and input field for the Password */}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Enter</button>
      </form>

      {/* Add a link to the sign-up page */}
      <p>
        Don&apos;t have an account? <Link to="/SignUp">Sign Up Here</Link>
      </p>
    </div>
  );
};

export default SignIn;
