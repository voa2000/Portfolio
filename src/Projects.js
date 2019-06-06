import React from "react";
import "./Projects.css";
import Kodflix from "./images/kodflix.jpg";
import alphaprops from "./images/alphaprops.jpg";

function Projects() {
  return (
    <div className="project-background">
      <div className="overlay">
        <h1>Projects</h1>
        <h2>Below are the projects I have been working on currently.</h2>

        <div className="project-box">
          <div className="project-items">
            <div className="project-title">Kodflix App</div>
            <div className="project-details">
              Tech stack include HTML, CSS, React, JavaScript, Heroku
            </div>
            <div className="project-image">
              <img src={Kodflix} alt="Kodflix App" />
            </div>
            <div className="project-links">
              <a href="https://github.com/voa2000/kodflix">GitHub </a> |
              <a href="http://vivkodflix.herokuapp.com/">Live Site</a>
            </div>
            <div className="project-details">
              Fetches data from a backend JSON data object and serve it to the
              frontend.
            </div>
          </div>
          <div className="project-items">
            <div className="project-title">Alpha App</div>
            <div className="project-details">
              Tech stack include React, JavaScript, NodeJS, RestAPI, GCP
            </div>
            <div className="project-image">
              <img src={alphaprops} alt="Alpha App" />
            </div>
            <div className="project-links">
              <a href="https://github.com/voa2000/alpha-props">GitHub </a> |
              <a href="https://my-project-alpha-properties.appspot.com/">
                Live Site
              </a>
            </div>
            <div className="project-details">
              Fetches data from a backend JSON data object and GoogleMaps API
              and serve it to the frontend. It also include smart searching a
              property.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
