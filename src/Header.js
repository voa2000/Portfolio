import React from "react";
import "./Home.css";
import cv from "./images/cv.png";
import resume from "./images/resume.pdf";
export default function Home() {
  return (
    <div className='home-container'>
      <div className='overlay'>
        <h1>Vivienne Owusu-Ansah</h1>
        <h2>
          DevOps Engineer and Software developer based in London, seeking an
          opportunity to work with like minded people in a diverse environment.
        </h2>
      </div>
      <div>
        <a href={resume}>
          <img src={cv} alt='cv' />
        </a>
      </div>
    </div>
  );
}
