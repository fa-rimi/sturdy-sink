import { useState } from "react";

const SignUp = () => {
  // Initialize the registration form fields as an object with empty strings
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    // These fields are set to empty strings initially as the user hasn't input data yet
  });

  // Disable the submit button if passwords do not match
  const disable = register.password !== register.confirm;

  return (
    <div>
      <div>
        <form action="" method="post">
          {/* Label and input field for the Name */}
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={register.name}
            placeholder="Enter Name"
            required
          />

          {/* Label and input field for the Email */}
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={register.email}
            placeholder="Enter Email"
            required
          />

          {/* Label and input field for the Password */}
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={register.password}
            placeholder="Enter Password"
            required
          />

          {/* Label and input field for confirming the Password */}
          <label htmlFor="confirm">Confirm Password: </label>
          <input
            type="password"
            name="confirm"
            value={register.confirm}
            placeholder="Confirm Password"
            required
          />

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
