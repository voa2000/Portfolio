import React from "react";
import "./Projects.css";
import Kodflix from "./images/kodflix.jpg";
import alphaprops from "./images/alphaprops.jpg";
//Create an objects to store project details
function Projects() {
  return (
    <div className='project-background'>
      <div className='overlay'>
        <h1>Projects</h1>
        <h2>Below are the projects I have been working on currently.</h2>

        <div className='project-box'>
          <div className='project-items'>
            <div className='project-title'>Kodflix App</div>
            <div className='project-details'>
              Tech stack include HTML, CSS, React, JavaScript. Hosted on Heroku
            </div>
            <div className='project-image'>
              <a href='http://vivkodflix.herokuapp.com/'>
                <img src={Kodflix} alt='Kodflix App' />
              </a>
            </div>
            <div className='project-git-links'>
              <a href='https://github.com/voa2000/kodflix'>GitHub Repo</a>
            </div>
            <div className='project-details'>
              Fetches data from a backend JSON data object using Express and
              serve it to the frontend.
            </div>
          </div>
          <div className='project-items'>
            <div className='project-title'>Github Finder App</div>
            <div className='project-details'>
              Tech stack include React, JavaScript, Axios. Hosted on GCP
            </div>
            <div className='project-image'>
              <a href='https://my-project-alpha-properties.appspot.com/'>
                <img src={alphaprops} alt='Github Fsinder App' />
              </a>
            </div>
            <div className='project-links'>
              <div className='project-git-links'>
                <a href='https://github.com/voa2000/github-finder'>
                  GitHub Repo
                </a>
              </div>
            </div>
            <div className='project-details'>
              Fetches data from a backend JSON data object using Axios and and
              serve it to the frontend.
            </div>
          </div>
          <div className='project-items'>
            <div className='project-title'>Alpha App</div>
            <div className='project-details'>
              Tech stack include React, JavaScript, NodeJS, RestAPI. Hosted on
              AWS
            </div>
            <div className='project-image'>
              <a href='https://my-project-alpha-properties.appspot.com/'>
                <img src={alphaprops} alt='Alpha App' />
              </a>
            </div>
            <div className='project-links'>
              <div className='project-git-links'>
                <a href='https://github.com/voa2000/alpha-props'>GitHub Repo</a>
              </div>
            </div>
            <div className='project-details'>
              Fetches data from a backend JSON data object using Express and
              GoogleMaps API and serve it to the frontend. It also include smart
              searching a property.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
