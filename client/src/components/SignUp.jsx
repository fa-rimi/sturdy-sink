import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the checkmark icon
// import UserModel from "../../../server/models/users";
import axios from "axios";
import { toast } from "react-hot-toast";

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
  
    try {
      // Deconstruct the data
      const { name, email, password } = registerData;
  
      const response = await axios.post("/SignUp", {
        name,
        email,
        password,
      });
  
      if (response.data.error) {
        toast.error(response.data.error); // Use response.data.error to access the error message
      } else {
        setRegisterData({
          name: "",
          email: "",
          password: "",
          confirm: "",
          error: "",
        });
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
      </div>
    </div>
  );
};

export default SignUp;
