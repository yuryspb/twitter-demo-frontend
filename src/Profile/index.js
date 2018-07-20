// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';

type UserData = {
  id: string,
  username: string,
  acct: string,
  display_name: string,
  locked: boolean,
  bot: boolean,
  created_at: string,
  note: string,
  url: string,
  avatar: string,
  avatar_static: string,
  header: string,
  header_static: string,
  location: string,
  followers_count: number,
  following_count: number,
  statuses_count: number,
  emojis: (?Object)[],
  fields: (?Object)[],
  error?: string,
};

type Props = {
  match: Object,
};

type State = {
  userData: ?UserData,
  error: ?Object,
};

class ProfilePage extends Component<Props, State> {
  state = {
    userData: null,
    error: null,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const source = 'https://twitter-demo.erodionov.ru';
    const key = process.env.REACT_APP_SECRET_CODE;
    if (!key && key !== '') throw new Error('Missing REACT_APP_SECRET_CODE');

    fetch(`${source}/api/v1/accounts/${id}?access_token=${key}`)
      .then(res => res.json())
      .then((userData) => {
        this.setState({ userData });
      });
  }

  render() {
    const { userData, error } = this.state;

    if (!userData) {
      return <div>No userData</div>;
    }

    if (error || userData.error) {
      return <div>Error</div>;
    }

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
