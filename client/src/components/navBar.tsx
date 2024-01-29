// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../pages/app.css";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <div className="navbar">
      <div>
        <img
          style={{ height: "100%", width: "100%" }}
          src={logo}
          className="logo"
          alt="Logo"
        />
        <ul style={{ listStyleType: "circle" }}>
          <li>
            <Link style={{ color: "white" }} to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/history">
              Workouts
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/nutrition">
              Nutrition
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/sleep">
              Sleep
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
