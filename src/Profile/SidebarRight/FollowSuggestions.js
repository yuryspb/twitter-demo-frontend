import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import verifyIcon from "../../Ui/verify-icon.svg";
import closeIcon from "../../Ui/close-icon.svg";
import peopleIcon from "../../Ui/people-icon.svg";
const profileImg1 = `${process.env.PUBLIC_URL}/avatars/profile1.png`;
const profileImg2 = `${process.env.PUBLIC_URL}/avatars/profile2.png`;
const profileImg3 = `${process.env.PUBLIC_URL}/avatars/profile3.png`;

const Wrap = styled.div`
  background: white;
  margin-top: 8px;
  padding: 10px 15px 20px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 14px;
`;

const Header = styled.h2`
  font-size: 17px;
  line-height: 20px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #292f33;
  margin: 0px;
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 0px 15px 0px;
`;

const ProfileImgWrap = styled.div``;

const ProfileImg = styled.img`
  width: 48px;
  height: 48px;
`;

const ProfileInfo = styled.div`
  flex-basis: 70%;
  max-width: 70%;
`;

const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Dot = styled.span`
  font-size: 12px;
  color: #66757f;
  margin-right: 5px;
  margin-left: 5px;
`;

const HeaderLink = styled(Link)`
  font-size: 12px;
  line-height: 14px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #1da1f2;
  text-decoration: none;
`;

const ProfileName = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  font-weight: bold;
  color: #292f33;
  margin-right: 3px;
  white-space: nowrap;
`;

const ProfileLogin = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #657786;
  margin-left: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const VerifyIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const FollowBtn = styled.button`
  box-sizing: border-box;
  border: 1px solid #1da1f2;
  border-radius: 20px;
  background: white;
  font-size: 14px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #1da1f2;
  padding: 5px 20px;
  cursor: pointer;
  &:hover {
    background: #e8f5fd;
  }
`;

const CloseBtn = styled.button`
  background: url(${closeIcon}) no-repeat;
  height: 8px;
  width: 8px;
  border: 0;
  cursor: pointer;
`;

const Profiles = styled.div``;

const FindPeople = styled.div`
  display: flex;
  align-items: center;
  padding-top: 25px;
`;

const PeopleIcon = styled.img`
  margin-right: 5px;
`;

const Profile = ({ image, login, verify, name }) => (
  <ProfileWrap>
    <ProfileImgWrap>
      <ProfileImg src={image} />
    </ProfileImgWrap>
    <ProfileInfo>
      <ProfileTitle>
        <ProfileName>{name}</ProfileName>
        {verify && <VerifyIcon src={verifyIcon} />}
        <ProfileLogin>{login}</ProfileLogin>
      </ProfileTitle>
      <FollowBtn>Follow</FollowBtn>
    </ProfileInfo>
    <CloseBtn />
  </ProfileWrap>
);

export default () => (
  <Wrap>
    <Title>
      <Header>Who to follow</Header>
      <Dot> • </Dot>
      <HeaderLink to="/refresh">Refresh</HeaderLink>
      <Dot> • </Dot>
      <HeaderLink to="/who_to_follow/suggestions">View all</HeaderLink>
    </Title>
    <Profiles>
      <Profile image={profileImg1} name="AppleInsider" login="@appleinsider">
        AppleInsider
      </Profile>
      <Profile image={profileImg2} name="Creode" login="@Creode" verify={true}>
        Creode
      </Profile>
      <Profile
        image={profileImg3}
        name="Epiphany Search"
        login="@EpiphanySearch"
      >
        Epiphany Search
      </Profile>
    </Profiles>
    <FindPeople>
      <PeopleIcon src={peopleIcon} />
      <HeaderLink to="/find">Find people you know</HeaderLink>
    </FindPeople>
  </Wrap>
);
