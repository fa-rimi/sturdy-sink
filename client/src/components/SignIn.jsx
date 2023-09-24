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
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[300px] h-[400px] bg-blue-400 rounded-md flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-fit h-fit">
          {/* Input field for the Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          {/* Input field for the Password */}
          <div className="password-input flex flex-row items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <span
              className="password-toggle ml-2"
              onClick={handlePasswordToggle}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
            Login
          </button>
        </form>

        {/* Add a link to the sign-up page */}
        <p className="text-[13px]">
          Don&apos;t have an account? <Link to="/SignUp"> Sign Up Here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
