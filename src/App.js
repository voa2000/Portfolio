import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Body />
      </Router>
    </div>
  );
}

export default App;
