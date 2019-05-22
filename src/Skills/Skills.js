import React from "react";
import javascript from "./../images/JavaScripti.png";
import html from "./../images/html5i.png";
import nodejs from "./../images/nodejsi.png";
import css3 from "./../images/css3i.png";
import react from "./../images/reactjsi.png";

export default function Skills() {
  return (
    <div>
      Skills Page
      <div className="social-links small-images">
        <img src={javascript} alt="Javascript" />
        <img src={html} alt="Javascript" />
        <img src={react} alt="Javascript" />
        <img src={css3} alt="Javascript" />
        <img src={nodejs} alt="Javascript" />
      </div>
    </div>
  );
}
