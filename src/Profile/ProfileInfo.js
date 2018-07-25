// @flow
import React from 'react';
import styled from 'styled-components';
import format from 'date-fns/format';
import { connect } from 'react-redux';
import userInfoFetchData from '../complexes/actions';
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

const formatDate = date => format(date, 'MMMM YYYY');

type UserData = {
  id: string,
  display_name: string,
  username: string,
  note: string,
  location: string,
  url: string,
  created_at: string,
};

type Props = {
  userData: UserData,
};

const ProfileInfo = ({ userData }: Props) => (
  <Wrap>
    <Info>
      <UserName>{userData.display_name}</UserName>
      <VerificationIcon src={verificationIcon} />
    </Info>
    <Login>@{userData.username}</Login>
    <FollowCheck>Follows you</FollowCheck>
    {userData.note && (
      <Description
        dangerouslySetInnerHTML={{
          __html: userData.note,
        }}
      />
    )}
    <div>
      {userData.location && (
        <Info>
          <InfoIcon src={locationIcon} />
          <InfoText>{userData.location}</InfoText>
        </Info>
      )}
      {userData.url && (
        <Info>
          <InfoIcon src={linkIcon} />
          <InfoLink>{userData.url}</InfoLink>
        </Info>
      )}
      <Info>
        <InfoIcon src={joinedIcon} />
        <InfoText>Joined {formatDate(userData.created_at)}</InfoText>
      </Info>
    </div>
    <ButtonBlock>
      <MessageButton>Tweet to</MessageButton>
      <MessageButton>Message</MessageButton>
    </ButtonBlock>
  </Wrap>
);

const mapStateToProps = state => ({
  userData: state.userInfo,
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: url => dispatch(userInfoFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileInfo);
