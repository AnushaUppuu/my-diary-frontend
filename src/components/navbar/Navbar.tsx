import React from "react";
import "./Navbar.css";
import logo from "../../images/diary-logo.png";
function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="buttonGroup">
        <li className="li">
          <img src={logo} className="image" />
        </li>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Create</button>
        </li>
        <li>
          <button>Profile</button>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
