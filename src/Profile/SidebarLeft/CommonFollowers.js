import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import followersIcon from "../../Ui/followersIcon.svg";
import followerImg1 from "./follower1.png";
import followerImg2 from "./follower2.png";
import followerImg3 from "./follower3.png";
import followerImg4 from "./follower4.png";
import followerImg5 from "./follower5.png";
import followerImg6 from "./follower6.png";

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
