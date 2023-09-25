import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  // Initialize the registration form fields as an object with empty strings
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const isPasswordValid =
    registerData.confirm === registerData.password &&
    registerData.confirm.length >= 6;

  // Handle input changes for all form fields
  const handleChange = (e) => {
    setRegisterData({
      // Spread the data that's already there
      ...registerData,
      // Replace data with what the user inputs
      [e.target.name]: e.target.value,
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
        });

        toast.success("Registered successfully");
        toast.success(`${name}'s dictionary created.`);

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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={registerData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={registerData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={registerData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirm">Confirm Password:</label>
          <div className="password-confirm">
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={registerData.confirm}
              onChange={handleChange}
              required
            />
            {isPasswordValid && (
              <FaCheckCircle className="checkmark-icon" color="green" />
            )}
          </div>

          <button type="submit" disabled={!isPasswordValid}>
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
