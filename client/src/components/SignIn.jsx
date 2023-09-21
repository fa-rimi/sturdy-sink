/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

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
