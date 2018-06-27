import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import followersIcon from "../Ui/followers-icon.svg";

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

const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

const AvatarLink = styled(Link)`
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const Follower = styled.li`
  list-style: none;
`;

const followers = [
  {
    id: 1,
    name: "lighthorsechris",
    src: `${process.env.PUBLIC_URL}/avatars/follower1.jpg`
  },
  {
    id: 2,
    name: "stuartmoses",
    src: `${process.env.PUBLIC_URL}/avatars/follower2.jpg`
  },
  {
    id: 3,
    name: "darkejon",
    src: `${process.env.PUBLIC_URL}/avatars/follower3.jpg`
  },
  {
    id: 4,
    name: "chinyingchang",
    src: `${process.env.PUBLIC_URL}/avatars/follower4.jpg`
  },
  {
    id: 5,
    name: "pocketcasts ",
    src: `${process.env.PUBLIC_URL}/avatars/follower5.jpg`
  },
  {
    id: 6,
    name: "wearelighthouse",
    src: `${process.env.PUBLIC_URL}/avatars/follower6.jpg`
  }
];

export default () => (
  <Wrap>
    <CountBlock>
      <Icon src={followersIcon} />
      <CommonLink to="/EveryInteract/followers_you_follow">
        6 Followers you know
      </CommonLink>
    </CountBlock>
    <AvatarBlock>
      {followers.map(user => (
        <Follower key={user.id}>
          <AvatarLink to={`/${user.name}`}>
            <Avatar src={user.src} alt={user.name} />
          </AvatarLink>
        </Follower>
      ))}
    </AvatarBlock>
  </Wrap>
);
