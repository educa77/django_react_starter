import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const HomePage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="test">Estamos en la home page!!!!!</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default HomePage;
