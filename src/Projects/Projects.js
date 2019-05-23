import React from "react";
import "../LandingPage/Landing.css";
import comp from "./../images/viv.jpg";

function Landing() {
  return (
    <div className="body-container">
      <img src={comp} className="body-main-photo" alt="computer" />
      <div className="body-area">
        <div className="body-area-box">
          <h1>Projects</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="body-area-box">
          Enthusiastic Software Developer and Digital Educator with a passion
          for the latest digital trends and open source technologies with over
          20 years IT experience. <br />I have good problem-solving skills in
          various technologies especially Modern JavaScript (React), I have the
          ability to communicate effectively whilst discussing technical
          problems with colleagues and clients at various levels.
          <p />
        </div>
      </div>
    </div>
  );
}

export default Landing;
