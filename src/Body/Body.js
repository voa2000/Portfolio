import React from "react";
import "./Body.css";
import comp from "./../images/viv.jpg";
import javascript from "./../images/JavaScripti.png";
import html from "./../images/html5i.png";
import nodejs from "./../images/nodejsi.png";
import css3 from "./../images/css3i.png";
import react from "./../images/reactjsi.png";

function Body() {
  return (
    <div className="body-container background-colors ">
      <img src={comp} className="body-main-photo" alt="computer" />
      <div className="body-area">
        <div className="body-area-box">
          <h1>Vivienne Owusu-Ansah</h1>
          <h2>JAVASCRIPT/ REACT DEVELOPER</h2>
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
        <div className="social-links small-images">
          <img src={javascript} alt="Javascript" />
          <img src={html} alt="Javascript" />
          <img src={react} alt="Javascript" />
          <img src={css3} alt="Javascript" />
          <img src={nodejs} alt="Javascript" />
        </div>
      </div>
    </div>
  );
}

export default Body;
