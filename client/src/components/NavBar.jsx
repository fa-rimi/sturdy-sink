import { ImBook } from "react-icons/im";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";

const NavBar = () => {
  return (
    <nav>
      <Link to="/Dictionary">
        <ImBook />
      </Link>

      <LogoutBtn/>
    </nav>
  );
};

export default NavBar;
