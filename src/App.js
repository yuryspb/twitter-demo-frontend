import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Helmet from 'react-helmet';
import Profile from './Profile';

function App() {
  return (
    <div>
      <Helmet title="Twitter demo" />
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/EveryInteract" component={Profile} />
          <Redirect exact from="/" to="/EveryInteract" />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
