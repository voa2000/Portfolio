import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navigation'>
      <div className='navigation-title'>
        <h1 className='navigation-title'>
          <a href='https://www.linkedin.com/in/vivienneansah/'>
            <i class='fab fa-linkedin fa-2x' />
          </a>
          <a href='https://github.com/voa2000'>
            <i class='fab fa-github fa-2x' aria-hidden='true' />
          </a>
        </h1>
      </div>
      <nav to='/' className='navigation_items'>
        <Link to='/'>Home </Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
