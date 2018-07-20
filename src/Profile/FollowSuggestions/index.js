// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileBlock from './ProfileBlock';
import peopleIcon from '../../Ui/people-icon.svg';

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
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #292f33;
  margin: 0px;
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
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #1da1f2;
  text-decoration: none;
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

const publicUrl = process.env.PUBLIC_URL;
if (!publicUrl && publicUrl !== '') throw new Error('Missing PUBLIC_URL');

const users = [
  {
    id: 1,
    name: 'AppleInsider',
    login: '@appleinsider',
    src: `${publicUrl}/avatars/profile1.png`,
    verification: false,
  },
  {
    id: 2,
    name: 'Creode',
    login: '@Creode',
    src: `${publicUrl}/avatars/profile2.png`,
    verification: true,
  },
  {
    id: 3,
    name: 'Epiphany Search',
    login: '@EpiphanySearch',
    src: `${publicUrl}/avatars/profile3.png`,
    verification: false,
  },
];

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
      {users.map(user => (
        <ProfileBlock
          key={user.id}
          to={`/${user.name}`}
          name={user.name}
          login={user.login}
          image={user.src}
          alt={user.name}
          verification={user.verification}
        />
      ))}
    </Profiles>
    <FindPeople>
      <PeopleIcon src={peopleIcon} />
      <HeaderLink to="/who_to_follow/import">Find people you know</HeaderLink>
    </FindPeople>
  </Wrap>
);
