import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-bar">
      <div className="Footer-container">
        <div className="social-links ">
          <a href="https://www.linkedin.com/in/vivienne-o-6bb8364a/">
            <i className="fab fa-linkedin fa-2x" aria-hidden="true" />
          </a>
          <a href="https://github.com/voa2000">
            <i className="fab fa-github fa-2x" aria-hidden="true" />
          </a>
          <a href="https://twitter.com/voa2000">
            <i className="fab fa-twitter fa-2x" aria-hidden="true" />
          </a>
          <a href="https://skype.com/voa2000">
            <i className="fab fa-skype fa-2x" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
