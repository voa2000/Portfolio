import React from "react";
import ReactDOM from "react-dom";

class Countries extends React.Component {
  render() {
    return (
      <Router>
        <Country />
      </Router>
    );
  }
}
function Country() {
  return (
    <div>
      <Route path="/countries/fr" component={France} />
      <Route path="/countries/es" component={Spain} />
      <Route path="/countries/it" component={Italy} />
    </div>
  );
}
function France() {
  return (
    <div>
      <div className="name">France</div>
      <div className="population">67.19 million</div>
    </div>
  );
}
function Spain() {
  return (
    <div>
      <div className="name">Spain</div>
      <div className="population">46.53 million</div>
    </div>
  );
}

function Italy() {
  return (
    <div>
      <div className="name">Italy</div>
      <div className="population">60.59 million</div>
    </div>
  );
}
