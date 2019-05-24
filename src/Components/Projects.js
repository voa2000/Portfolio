import React from "react";
import "./Styles.css";
import kodflix from "./../images/kodflix.png";

export default function Landing() {
  return (
    <div className="body-container">
      <div className="body-area">
        <h1>Projects</h1>
        <div className="grid">
          <div>
            This is an application created using React, javascript, HTML, CSS,
            Express and Mongodb.
          </div>
          <div style={{ alignItems: "center" }}>
            <img
              style={{ height: "275px", width: "375px" }}
              src={kodflix}
              alt="CSS Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
