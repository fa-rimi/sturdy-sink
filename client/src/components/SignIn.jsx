import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import FontAwesome icons

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
    error: "", // Add an error field to handle potential errors
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
      error: "", // Clear the error when the user makes changes
    });
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <span className="password-toggle" onClick={handlePasswordToggle}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

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
