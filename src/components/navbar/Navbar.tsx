import React from "react";
import "./Navbar.css";
import logo from "../../images/diary-logo.png";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbarContainer">
      <div className="buttonGroup">
        <li className="li">
          <img src={logo} className="image" />
        </li>
        <li>
          <button onClick={()=>navigate('')}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate("create")}>Create</button>
        </li>
        <li>
          <button>Profile</button>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
