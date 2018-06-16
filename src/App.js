import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

import Profile from "./Profile";

const App = props => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/EveryInteract" component={Profile} />
        <Redirect exact from="/" to="/EveryInteract" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
