/* eslint-disable no-unused-vars */
import React from "react";

const SignUp = () => {
  return (
    <div>
      <div>
        <form action="" method="post">
        <label htmlFor="Name">Name: </label>
        <input type="text" name="name" id="name" required/>

        <label htmlFor="Email">Email: </label>
        <input type="email" name="email" id="email" required/>

        <label htmlFor="Password">Password: </label>
        <input type="password" name="password" id="password" required/>

        <label htmlFor="Confirm Password">Confirm Password: </label>
        <input type="confirm" name="confirm" id="confirm" required/>

        <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
