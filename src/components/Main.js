import React from "react";
import { Switch, HashRouter as Route } from "react-router-dom";
import Landing from "./Landing";
import Contact from "./Contact";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Skills from "./Skills";
import "../App.css";

export default function Main() {
  return (
    <div>
      <Route>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/aboutme" component={Aboutme} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
      </Route>
      <Landing />
    </div>
  );
}
