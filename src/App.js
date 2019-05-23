import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
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
