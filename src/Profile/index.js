// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import userInfoFetchData from './actions';
import Main from './Main';

const Info = styled.div``;

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
  emojis: Object,
  fields: Object,
  error?: string,
};

type Props = {
  match: Object,
  dispatch: Function,
  userData: Object,
};

type State = {
  userData: ?UserData,
  error: ?Object,
};

class ProfilePage extends Component<Props, State> {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      dispatch,
    } = this.props;

    dispatch(userInfoFetchData(id));
  }

  render() {
    const { userData } = this.props;

    if (!userData) {
      return <Info>Sorry, that page doesn’t exist! 1</Info>;
    }

    if (userData && userData.error) {
      return <Info>Sorry, that page doesn’t exist! 2</Info>;
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

const mapStateToProps = state => ({
  userData: state.userInfo,
});

export default connect(mapStateToProps)(ProfilePage);
