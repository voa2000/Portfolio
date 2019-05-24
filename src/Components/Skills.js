import React from "react";
import "./Styles.css";
import react from "./../images/react.png";
import javascript from "./../images/javascript.png";
import HTML from "./../images/HTML.png";
import GitHub from "./../images/GtiHub.png";
import Heroku from "./../images/heroku.png";
import node from "./../images/node.png";

export default function Landing() {
  return (
    <div className="body-container">
      <div className="body-area">
        <h1>Skills</h1>
        <div className="grid">
          <div>
            I have experience as a software developer creating responsive
            websites of a high quality. Below are the technologies I have had
            experience in developing applications with.
          </div>
          <div style={{ alignItems: "center" }}>
            <img
              style={{ height: "75px", width: "75px" }}
              src={react}
              alt="CSS Logo"
            />
            <img
              style={{ height: "75px", width: "75px" }}
              src={javascript}
              alt="CSS Logo"
            />
            <img
              style={{ height: "75px", width: "75px" }}
              src={HTML}
              alt="HTML Logo"
            />
            <img
              style={{ height: "75px", width: "75px" }}
              src={Heroku}
              alt="HTML Logo"
            />
            <img
              style={{ height: "75px", width: "75px" }}
              src={GitHub}
              alt="HTML Logo"
            />
            <img
              style={{ height: "75px", width: "75px" }}
              src={node}
              alt="HTML Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
