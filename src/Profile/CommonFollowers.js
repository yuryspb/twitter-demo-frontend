// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import followersIcon from '../Ui/followers-icon.svg';

const Wrap = styled.div`
  margin-top: 20px;
`;

const Count = styled.div`
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
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #1da1f2;
  text-decoration: none;
`;

const Avatars = styled.div`
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

const publicUrl = process.env.PUBLIC_URL;
if (!publicUrl && publicUrl !== '') throw new Error('Missing PUBLIC_URL');

const followers = [
  {
    id: 1,
    name: 'lighthorsechris',
    src: `${publicUrl}/avatars/follower1.jpg`,
  },
  {
    id: 2,
    name: 'stuartmoses',
    src: `${publicUrl}/avatars/follower2.jpg`,
  },
  {
    id: 3,
    name: 'darkejon',
    src: `${publicUrl}/avatars/follower3.jpg`,
  },
  {
    id: 4,
    name: 'chinyingchang',
    src: `${publicUrl}/avatars/follower4.jpg`,
  },
  {
    id: 5,
    name: 'pocketcasts ',
    src: `${publicUrl}/avatars/follower5.jpg`,
  },
  {
    id: 6,
    name: 'wearelighthouse',
    src: `${publicUrl}/avatars/follower6.jpg`,
  },
];

type UserData = {
  id: string,
};

type Props = {
  userData: UserData,
};

export default ({ userData }: Props) => (
  <Wrap>
    <Count>
      <Icon src={followersIcon} />
      <CommonLink to={`/${userData.id}/followers_you_follow`}>6 Followers you know</CommonLink>
    </Count>
    <Avatars>
      {followers.map(user => (
        <Follower key={user.id}>
          <AvatarLink to={`/${user.name}`}>
            <Avatar src={user.src} alt={user.name} />
          </AvatarLink>
        </Follower>
      ))}
    </Avatars>
  </Wrap>
);
