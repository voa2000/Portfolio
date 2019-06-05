import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import NavbarSpacer from "./components/NavbarSpacer";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
          <NavbarSpacer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/NotFound" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
