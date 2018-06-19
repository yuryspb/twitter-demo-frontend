import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Helmet from "react-helmet";
import Profile from "./Profile";

const App = props => (
  <div>
    <Helmet title="Twitter demo" />
    <BrowserRouter>
      <div>
        <Route exact path="/EveryInteract" component={Profile} />
        <Redirect exact from="/" to="/EveryInteract" />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
