import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-menu">
        <div className="nav-item">
          <Link to="#">About</Link>
        </div>
        <div className="nav-item">
          <Link>Skills</Link>
        </div>
        <div className="nav-item">
          <Link>Projects</Link>
        </div>
        <div className="nav-item">
          <Link>Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
