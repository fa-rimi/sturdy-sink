import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Import the checkmark icon
import axios from "axios";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate

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
    registerData.confirm === registerData.password && // Passwords match
    registerData.confirm.length >= 6 && // Password length is at least 6 characters
    registerData.confirm.trim() !== ""; // Password is not blank (no leading/trailing whitespaces)

  // Handle input changes for all form fields
  const handleChange = (e) => {
    setRegisterData({
      // Spread the data that's already there
      ...registerData,
      // Replace data with what user inputs
      [e.target.name]: e.target.value,
      error: "", // Clear the error when the user makes changes
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Deconstruct the data
    const { name, email, password } = registerData;

    try {
      // Send a POST request to the "/SignUp" endpoint
      const response = await axios.post("/SignUp", {
        name,
        email,
        password,
      });

      if (response.data.error) {
        // Display an error toast message if there's an error from the server
        toast.error(response.data.error);
      } else {
        // Reset the registration form fields
        setRegisterData({
          name: "",
          email: "",
          password: "",
          confirm: "",
          error: "",
        });

        // Navigate to "/Home" on successful registration (you can adjust this route as needed)
        navigate("/Home");

        // Display a success toast message
        toast.success("Register Success");
      }
    } catch (error) {
      console.error(error);
    }
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
        {/* Add a link to the sign-in page */}
        <p>
          Already have an account? <Link to="/SignIn">Sign In Here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
