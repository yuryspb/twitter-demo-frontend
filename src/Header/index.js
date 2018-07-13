// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Wrap,
  Navigation,
  NavLinkBlock,
  NavIcon,
  MainIcon,
  SearchBlock,
  SearchInput,
  Avatar,
  TweetButton,
} from './styled';
import homeIcon from '../Ui/home-icon.svg';
import momentsIcon from '../Ui/moments-icon.svg';
import notificationsIcon from '../Ui/notifications-icon.svg';
import messagesIcon from '../Ui/messages-icon.svg';
import twitterIcon from '../Ui/twitter-icon.svg';

const NavLink = styled(Link)`
  font-size: 13px;
  line-height: 15px;
  font-weight: bold;
  color: #667580;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

const avatar = `${process.env.PUBLIC_URL}/avatars/avatar.png`;

export default () => (
  <Wrap>
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <Navigation>
            <NavLinkBlock>
              <NavIcon src={homeIcon} alt="" />
              <NavLink exact to="/">
                Home
              </NavLink>
            </NavLinkBlock>
            <NavLinkBlock>
              <NavIcon src={momentsIcon} alt="" />
              <NavLink exact to="/moments">
                Moments
              </NavLink>
            </NavLinkBlock>
            <NavLinkBlock>
              <NavIcon src={notificationsIcon} alt="" />
              <NavLink exact to="/notifications">
                Notifications
              </NavLink>
            </NavLinkBlock>
            <NavLinkBlock>
              <NavIcon src={messagesIcon} alt="" />
              <NavLink exact to="/messages">
                Messages
              </NavLink>
            </NavLinkBlock>
          </Navigation>
        </div>
        <div className="col-lg-2">
          <MainIcon to="/">
            <img src={twitterIcon} alt="" />
          </MainIcon>
        </div>
        <div className="col-lg-5">
          <SearchBlock>
            <SearchInput placeholder="Search Twitter" />
            <Avatar src={avatar} />
            <TweetButton>Tweet</TweetButton>
          </SearchBlock>
        </div>
      </div>
    </div>
  </Wrap>
);
