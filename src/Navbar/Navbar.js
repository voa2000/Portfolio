import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-menu">
        <div className="nav-item">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-item">
          <Link to="/skills">Skills</Link>
        </div>
        <div className="nav-item">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="nav-item">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
