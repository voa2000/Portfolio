import React from "react";
import { Switch, HashRouter as Route } from "react-router-dom";
import Landing from "./LandingPage/Landing";
import Contact from "./Contact/Contact";
import Aboutme from "./Aboutme/Aboutme";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

export default function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
      <Landing />
    </div>
  );
}
