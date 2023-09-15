/* eslint-disable no-unused-vars */
import React from "react";
import SignIn from "../components/SignIn";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AuthPg = () => {
  return (
    <div>
      <SignIn />
      <p>Don&apos;t have an account? <Link to="/register">Sign Up Here</Link></p>
    </div>
  );
};

export default AuthPg;
