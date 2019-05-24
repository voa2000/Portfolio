import React from "react";
import "./Styles.css";
import kodflix from "./../images/kodflix.png";

export default function Landing() {
  return (
    <div className="body-container">
      <div className="body-area">
        <h1>Projects</h1>
        <div className="grid">
          <card>
            <div>
              This is an application created using React, javascript, HTML, CSS,
              Express and Mongodb.
              <p />
            </div>
            <div>
              <center>
                <a href="http://vivkodflix.herokuapp.com/">
                  <img
                    style={{ height: "275px", width: "375px" }}
                    src={kodflix}
                    alt="CSS Logo"
                  />
                </a>
                <p />
                GitHub Link | Live Site
              </center>
            </div>
            <div />
          </card>
        </div>
      </div>
    </div>
  );
}
