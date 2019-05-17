import React from "react";
import "./Body.css";
import comp from "./../images/computer.jpg";

function Body() {
  return (
    <div className="body-container">
      <img src={comp} className="body-main-photo" alt="computer" />
      <div className="body-area">
        <div className="body-area-box">
          A personal UX designer portfolio website is a way for you to be
          yourself and tell your story. Here you'll find top 19 hand-selected
          portfolios that will inspire you when building your own. When done
          right, it will work for you as your agent. It will score interviews
          and bring home the job offers
        </div>
        <div className="body-area-box">
          A personal UX designer portfolio website is a way for you to be
          yourself and tell your story. Here you'll find top 19 hand-selected
          portfolios that will inspire you when building your own. When done
          right, it will work for you as your agent. It will score interviews
          and bring home the job offers. Lorem
        </div>
      </div>
    </div>
  );
}

export default Body;
