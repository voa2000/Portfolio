import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFound from "./NotFound";
import NavbarSpacer from "./NavbarSpacer";

function App() {
  return (
    <Router>
      <div className='App'>
        <div>
          <Navbar />
          <NavbarSpacer />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/notFound' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
