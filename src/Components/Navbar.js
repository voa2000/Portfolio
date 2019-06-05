import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navigation">
      <div className="navigation-title">
        <h1 className="navigation-title">
          <a href="https://www.linkedin.com/in/vivienne-o-6bb8364a/">
            <i class="fab fa-linkedin fa-2x" />
          </a>
          <a href="https://github.com/voa2000">
            <i class="fab fa-github fa-2x" aria-hidden="true" />
          </a>
        </h1>
      </div>
      <nav to="/" className="navigation_items">
        <Link to="/">Home </Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Resume">Resume</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
