import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about-container">
      <div className="overlay">
        <h1>About Me</h1>
        <h2>
          Enthusiastic Software Developer and Digital Educator with a passion
          for the latest digital trends and open source technologies with over
          20 years IT experience. I have good problem-solving skills in various
          technologies especially Modern JavaScript (React), I have the ability
          to communicate effectively whilst discussing technical problems with
          colleagues and clients at various levels.
        </h2>
        <h2>Below is my Tech Stack</h2>
        <div className="about-techstack">
          <div className="about-techstack-item">
            <i className="fab fa-react fa-3x" aria-hidden="true" />
          </div>
          <div className="about-techstack-item">
            <i className="fab fa-html5 fa-3x" aria-hidden="true" />
          </div>
          <div className="about-techstack-item">
            <i className="fab fa-node fa-3x" aria-hidden="true" />
          </div>
          <div className="about-techstack-item">
            <i className="fab fa-css3 fa-3x" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
