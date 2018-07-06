import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import Header from './Header';
import Profile from './Profile';

const Content = styled.main`
  padding-top: 40px;
`;

const Temp = ({ location }) => (
  <React.Fragment>
    <Helmet>
      <title>{`Twitter demo ${location.pathname}`}</title>
    </Helmet>
    <h2>
      {`${location.pathname}${location.search} `}
      page
    </h2>
  </React.Fragment>
);

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Content>
          <Helmet title="Twitter demo" />
          <Switch>
            <Redirect from="/" to="/1" exact />
            <Route exact path="/moments" component={Temp} />
            <Route exact path="/notifications" component={Temp} />
            <Route exact path="/messages" component={Temp} />
            <Route exact path="/about" component={Temp} />
            <Route exact path="/support" component={Temp} />
            <Route exact path="/tos" component={Temp} />
            <Route exact path="/privacy" component={Temp} />
            <Route exact path="/cookies" component={Temp} />
            <Route exact path="/ads" component={Temp} />
            <Route exact path="/hashtag/*" component={Temp} />
            <Route exact path="/search" component={Temp} />
            <Route exact path="/who_to_follow/import" component={Temp} />
            <Route exact path="/who_to_follow/suggestions" component={Temp} />
            <Route path="/:id" component={Profile} />
          </Switch>
        </Content>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
