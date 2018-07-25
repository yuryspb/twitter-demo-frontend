// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import userInfoFetchData from '../complexes/actions';
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
  fetchUserInfo: Function,
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
      fetchUserInfo,
    } = this.props;

    const source = 'https://twitter-demo.erodionov.ru';
    const key = process.env.REACT_APP_SECRET_CODE;
    if (!key && key !== '') throw new Error('Missing REACT_APP_SECRET_CODE');

    fetchUserInfo(`${source}/api/v1/accounts/${id}?access_token=${key}`);
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

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: url => dispatch(userInfoFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
