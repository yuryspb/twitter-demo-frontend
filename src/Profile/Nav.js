import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '../Ui/FollowButton';
import moreIcon from '../Ui/more-icon.png';

const Wrap = styled.div`
  background: white;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const MenuTab = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-bottom: 4px solid #1da1f2;
  }
  &.active {
    border-bottom: 4px solid #1da1f2;
    color: #1da1f2;
  }
`;

const MenuLink = styled.span`
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  font-weight: bold;
  color: #707e88;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
`;

const MenuNumber = styled.span`
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  font-weight: bold;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: ${({ active }) => (active ? '#1da1f2' : '#788a98')};
`;

const FollowButton = styled(Button)`
  border-radius: 100px;
  font-weight: bold;
  padding: 9px 27px;
  margin-top: 12px;
  margin-bottom: 11px;
  margin-right: 18px;
`;

const MoreButton = styled.button`
  background-image: url(${moreIcon});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  background-color: white;
  width: 4px;
  height: 14px;
  cursor: pointer;
`;

const Avatar = styled.img`
  position: absolute;
  border-radius: 50%;
  border: 6px solid white;
  height: 210px;
  top: 290px;
`;

export default class Nav extends Component {
  state = {
    info: {},
  };

  componentDidMount() {
    const source = 'https://twitter-demo.erodionov.ru';
    const key = process.env.REACT_APP_SECRET_CODE;
    fetch(`${source}/api/v1/accounts/1?access_token=${key}`)
      .then(response => response.json())
      .then(info => this.setState({ info }));
  }

  render() {
    const { info } = this.state;

    return (
      <Wrap>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Avatar src={info.avatar} />
            </div>
            <div className="col-lg-4">
              <Menu>
                <MenuTab to="/">
                  <MenuLink>Tweets</MenuLink>
                  <MenuNumber active>{info.statuses_count}</MenuNumber>
                </MenuTab>
                <MenuTab exact to="/following">
                  <MenuLink>Following</MenuLink>
                  <MenuNumber>{info.following_count}</MenuNumber>
                </MenuTab>
                <MenuTab exact to="/followers">
                  <MenuLink>Followers</MenuLink>
                  <MenuNumber>{info.followers_count}</MenuNumber>
                </MenuTab>
                <MenuTab exact to="/likes">
                  <MenuLink>Likes</MenuLink>
                  <MenuNumber>460</MenuNumber>
                </MenuTab>
                <MenuTab exact to="/lists">
                  <MenuLink>Lists</MenuLink>
                  <MenuNumber>2</MenuNumber>
                </MenuTab>
              </Menu>
            </div>
            <div className="col-lg-5 end-lg">
              <FollowButton>Follow</FollowButton>
              <MoreButton />
            </div>
          </div>
        </div>
      </Wrap>
    );
  }
}
