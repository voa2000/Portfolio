import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Main from "./Main";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
