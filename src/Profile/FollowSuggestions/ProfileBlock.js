import React from 'react';
import styled from 'styled-components';
import FollowBtn from '../../Ui/FollowButton';
import verificationIcon from '../../Ui/verification-icon.svg';
import closeIcon from '../../Ui/close-icon.svg';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 0px 15px 0px;
`;

const Name = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  font-weight: bold;
  color: #292f33;
  margin-right: 3px;
  white-space: nowrap;
`;

const AvatarWrap = styled.div``;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

const Info = styled.div`
  flex-basis: 70%;
  max-width: 70%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Login = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #657786;
  margin-left: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const VerificationIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const FollowButton = styled(FollowBtn)`
  border-radius: 20px;
  padding: 5px 20px;
`;

const CloseBtn = styled.button`
  background: url(${closeIcon}) no-repeat;
  height: 8px;
  width: 8px;
  border: 0;
  cursor: pointer;
`;

const ProfileBlock = (props) => {
  const {
    image, name, verification, login,
  } = props;

  return (
    <Wrap>
      <AvatarWrap>
        <Avatar src={image} />
      </AvatarWrap>
      <Info>
        <Title>
          <Name>
            {name}
          </Name>
          {verification && <VerificationIcon src={verificationIcon} />}
          <Login>
            {login}
          </Login>
        </Title>
        <FollowButton>
Follow
        </FollowButton>
      </Info>
      <CloseBtn />
    </Wrap>
  );
};

export default ProfileBlock;
