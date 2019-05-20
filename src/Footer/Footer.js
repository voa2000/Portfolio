import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-bar">
      <div className="Footer-container">
        <div className="social-links ">
          <a href="https://www.linkedin.com/in/vivienne-o-6bb8364a/">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a href="https://github.com/voa2000">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          <a href="https://www.freecodecamp.org/voa2000">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>
          <a href="https://twitter.com/voa2000">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
