import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

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
