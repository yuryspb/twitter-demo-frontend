import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.img`
  width: 100%;
  max-height: 380px;
`;

export default class ProfileInfo extends Component {
  state = {
    info: {},
  };

  componentDidMount() {
    const source = 'https://twitter-demo.erodionov.ru';
    const key = process.env.REACT_APP_SECRET_CODE;
    fetch(`${source}/api/v1/accounts/1?access_token=${key}`)
      .then(response => response.json())
      .then(info => this.setState({ info }));
  }

  render() {
    const { info } = this.state;

    return (
      <div>
        <Background src={info.header} />
      </div>
    );
  }
}
