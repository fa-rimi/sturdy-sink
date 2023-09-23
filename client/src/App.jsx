import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomePg from "./pages/HomePg";
import AuthPg from "./pages/AuthPg";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.withCredentials = true;

function App() {
  // Initialize user state to null
  const [user, setUser] = useState(null);

  // Create components for AuthPg and Home for better readability
  const authPage = <AuthPg setUser={setUser} />;
  const homePage = <HomePg />;

  return (
    <>
      <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
      <Router>
        {/* Define the routes for your application */}
        <Routes>
          {/* Route for the SignIn component */}
          <Route path="/SignIn" element={<SignIn />} />

          {/* Route for the SignUp component */}
          <Route path="/SignUp" element={<SignUp />} />

          {/* Route for the Home component, conditionally rendering either Home or AuthPg */}
          <Route path="/Home" element={<HomePg />} />

          {/* Fallback route for the root URL "/", also conditionally rendering Home or AuthPg */}
          <Route path="/" element={user ? homePage : authPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
