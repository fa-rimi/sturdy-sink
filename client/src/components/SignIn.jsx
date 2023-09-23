import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import FontAwesome icons
import { toast } from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Initialize the login form fields as an object with empty strings
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    error: "", // Add an error field to handle potential errors
  });

  const [showPassword, setShowPassword] = useState(false);

  // Event handler to update form fields as the user types
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
      error: "", // Clear the error when the user makes changes
    });
  };

  // Event handler to toggle password visibility
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Destructure email and password from loginData
    const { email, password } = loginData;

    try {
      // Send a POST request to the "/SignIn" endpoint
      const response = await axios.post("/SignIn", {
        email,
        password,
      });

      if (response.data.error) {
        // Display an error toast message if there's an error from the server
        toast.error(response.data.error);
      } else {
        // Reset the login form fields
        setLoginData({
          email: "",
          password: "",
        });

        // Navigate to the "/Home" route on successful login
        navigate("/Home");

        // Display a success toast message
        toast.success("Login Success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Label and input field for the Email */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
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
