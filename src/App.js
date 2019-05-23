import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Landing from "./LandingPage/Landing";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
