import React from "react";
import "./Body.css";
import comp from "./../images/viv.jpg";
import nodejs from "./../images/nodejs.png";
import css3 from "./../images/css3.png";
import heroku from "./../images/heroku.png";
import mongodb from "./../images/monogodb.jpeg";
import reactjs from "./../images/reactjs.png";
import travis from "./../images/TravisCI.png";

function Body() {
  return (
    <div className="body-container">
      <img src={comp} className="body-main-photo" alt="computer" />
      <div className="body-area">
        <div className="body-area-box">
          <h1>Vivienne Owusu-Ansah</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="body-area-box">
          Enthusiastic Software Developer and Digital Educator with a passion
          for the latest digital trends and open source technologies with over
          20 years IT experience. <br />I have good problem-solving skills in
          various technologies especially Modern JavaScript (React), I have the
          ability to communicate effectively whilst discussing technical
          problems with colleagues and clients at various levels.
          <p />
          <p />
          <div className="small-images">
            <img src={nodejs} alt="javascript" />
            <img src={css3} alt="javascript" />
            <img src={heroku} alt="javascript" />
            <img src={mongodb} alt="javascript" />
            <img src={reactjs} alt="javascript" />
            <img src={travis} alt="javascript" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
