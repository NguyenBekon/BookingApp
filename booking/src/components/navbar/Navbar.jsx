import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user.details.username);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookingApp</span>
        </Link>

        {user ? (
          <div style={{ justifyItems: "end" }}>
            <span style={{ marginRight: "15px" }}>{user.details.username}</span>
            <Link to={"/"}>
              <button>Logout</button>
            </Link>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
