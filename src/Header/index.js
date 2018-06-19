import React from "react";
import {
  Wrap,
  Navigation,
  NavLinkBlock,
  NavIcon,
  NavLink,
  MainIcon,
  SearchBlock,
  SearchInput,
  Avatar,
  TweetBtn
} from "./styled";
import homeIcon from "./homeIcon.svg";
import momentsIcon from "./momentsIcon.svg";
import notificationsIcon from "./notificationsIcon.svg";
import messagesIcon from "./messagesIcon.svg";
import twitterIcon from "./twitterIcon.svg";
import avatar from "./avatar.png";

export default () => (
  <Wrap>
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <Navigation>
            <NavLinkBlock>
              <NavIcon src={homeIcon} alt="" />
              <NavLink>Home</NavLink>
            </NavLinkBlock>
            <NavLinkBlock>
              <NavIcon src={momentsIcon} alt="" />
              <NavLink>Moments</NavLink>
            </NavLinkBlock>
            <NavLinkBlock>
              <NavIcon src={notificationsIcon} alt="" />
              <NavLink>Notifications</NavLink>
            </NavLinkBlock>
            <NavLinkBlock>
              <NavIcon src={messagesIcon} alt="" />
              <NavLink>Messages</NavLink>
            </NavLinkBlock>
          </Navigation>
        </div>
        <div className="col-lg-2">
          <MainIcon src={twitterIcon} />
        </div>
        <div className="col-lg-5">
          <SearchBlock>
            <SearchInput placeholder="Search Twitter" />
            <Avatar src={avatar} />
            <TweetBtn>Tweet</TweetBtn>
          </SearchBlock>
        </div>
      </div>
    </div>
  </Wrap>
);
