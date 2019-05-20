import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
