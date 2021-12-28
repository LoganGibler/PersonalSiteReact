import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation, Home, AboutMe, Projects } from "./components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Home />
        <Navigation />
          <Switch>
            <Route path="/projects"><Projects /></Route>
            <Route path="/aboutMe"><AboutMe /></Route>
            <Route path="/home"><Home /></Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
