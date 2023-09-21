import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [login, setLogin] = useState({
    name: "",
    password: ""
  })

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={login.name} placeholder="Enter Name" required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={login.password} placeholder="Enter Password" required />

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
