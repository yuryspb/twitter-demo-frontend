import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';

class ProfilePage extends Component {
  state = {
    userData: {},
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const source = 'https://twitter-demo.erodionov.ru';
    const key = process.env.REACT_APP_SECRET_CODE;

    fetch(`${source}/api/v1/accounts/${id}?access_token=${key}`)
      .then(res => res.json())
      .then((userData) => {
        this.setState({ userData });
      });
  }

  render() {
    const { userData } = this.state;

    return (
      <React.Fragment>
        <Helmet title={`${userData.display_name} (@${userData.username}) | Twitter demo`} />
        <Switch>
          <Route
            path={`/${userData.id}`}
            render={props => <Main {...props} userData={userData} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default ProfilePage;
