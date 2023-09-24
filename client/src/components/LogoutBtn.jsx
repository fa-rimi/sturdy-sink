import { useHistory } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";

const LogoutBtn = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear user authentication (e.g., remove tokens, clear cookies, etc.)
    // Redirect the user to the login page or any other appropriate route
    history.push("/login"); // Redirect to the login page
  };

  return (
    <div className="">
      <button type="submit" onClick={handleLogout}>
        Logout <BsBoxArrowRight />{" "}
      </button>
    </div>
  );
};

export default LogoutBtn;
