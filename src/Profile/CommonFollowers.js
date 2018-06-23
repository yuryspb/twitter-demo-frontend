import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import followersIcon from "../Ui/followers-icon.svg";
const followerImg1 = `${process.env.PUBLIC_URL}/avatars/follower1.png`;
const followerImg2 = `${process.env.PUBLIC_URL}/avatars/follower2.png`;
const followerImg3 = `${process.env.PUBLIC_URL}/avatars/follower3.png`;
const followerImg4 = `${process.env.PUBLIC_URL}/avatars/follower4.png`;
const followerImg5 = `${process.env.PUBLIC_URL}/avatars/follower5.png`;
const followerImg6 = `${process.env.PUBLIC_URL}/avatars/follower6.png`;

const Wrap = styled.div`
  margin-top: 20px;
`;

const CountBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  margin-right: 12px;
`;

const CommonLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #1da1f2;
  text-decoration: none;
`;

const AvatarBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AvatarImg = styled.img`
  width: 48px;
  height: 48px;
`;

const AvatarLink = styled(Link)`
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const Follower = ({ to, image }) => (
  <AvatarLink to={to}>
    <AvatarImg src={image} />
  </AvatarLink>
);

export default () => (
  <Wrap>
    <CountBlock>
      <Icon src={followersIcon} />
      <CommonLink to="/EveryInteract/followers_you_follow">
        6 Followers you know
      </CommonLink>
    </CountBlock>
    <AvatarBlock>
      <Follower to="/profile2" image={followerImg1} />
      <Follower to="/profile3" image={followerImg2} />
      <Follower to="/profile4" image={followerImg3} />
      <Follower to="/profile5" image={followerImg4} />
      <Follower to="/profile6" image={followerImg5} />
      <Follower to="/profile7" image={followerImg6} />
    </AvatarBlock>
  </Wrap>
);
