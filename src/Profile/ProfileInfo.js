import React, { Component } from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import locationIcon from '../Ui/location-icon.svg';
import linkIcon from '../Ui/link-icon.svg';
import joinedIcon from '../Ui/joined-icon.svg';
import verificationIcon from '../Ui/verification-icon.svg';

const Wrap = styled.div`
  margin-top: 45px;
`;

const Info = styled.div`
  display: flex;
`;

const UserName = styled.span`
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  color: #14171a;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
`;

const VerificationIcon = styled.img`
  margin-left: 5px;
  margin-top: 1px;
`;

const Login = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #697787;
  margin-right: 8px;
`;

const FollowCheck = styled.span`
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  line-height: 12px;
  font-size: 12px;
  color: #697787;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #14171a;
  margin-top: 12px;
  margin-bottom: 13px;
`;

const MessageButton = styled.button`
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  color: white;
  font-size: 14px;
  line-height: 14px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  font-weight: bold;
  text-align: center;
  width: 128px;
  height: 39px;
  margin-right: 5px;
  cursor: pointer;
`;

const ButtonBlock = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: center;
`;

const InfoIcon = styled.img`
  margin-right: 13px;
`;

const InfoText = styled.span`
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;

const InfoLink = styled.a`
  font-size: 14px;
  line-height: 28px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #1d81c2;
  text-decoration: none;
  cursor: pointer;
`;

const strdate = date => format(date, 'MMMM YYYY');

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
      <Wrap>
        <Info>
          <UserName>{info.display_name}</UserName>
          <VerificationIcon src={verificationIcon} />
        </Info>
        <Login>@{info.username}</Login>
        <FollowCheck>Follows you</FollowCheck>
        {info.note && <Description>{info.note}</Description>}
        <div>
          {info.geo && (
            <Info>
              <InfoIcon src={locationIcon} />
              <InfoText>{info.geo}</InfoText>
            </Info>
          )}
          {info.url && (
            <Info>
              <InfoIcon src={linkIcon} />
              <InfoLink>{info.url}</InfoLink>
            </Info>
          )}
          <Info>
            <InfoIcon src={joinedIcon} />
            <InfoText>Joined {strdate(info.created_at)}</InfoText>
          </Info>
        </div>
        <ButtonBlock>
          <MessageButton>Tweet to</MessageButton>
          <MessageButton>Message</MessageButton>
        </ButtonBlock>
      </Wrap>
    );
  }
}
