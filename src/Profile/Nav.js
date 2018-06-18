import React from "react";
import styled from "styled-components";
import moreIcon from "../Ui/moreIcon.png";

const Wrap = styled.div`
  background: white;
  box-shadow: 0px 2px 2px #b0b8be;
`;

const MenuBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const MenuTab = styled.a`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  border-bottom: ${props => (props.active ? "4px solid #1DA1F2" : "none")};
  &:hover {
    border-bottom: 4px solid #1da1f2;
  }
`;

const MenuLink = styled.a`
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  font-weight: bold;
  color: #707e88;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
`;

const MenuNumber = styled.span`
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  font-weight: bold;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: ${props => (props.active ? "#1da1f2" : "#788a98")};
`;

const FollowButton = styled.button`
  box-sizing: border-box;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  background: white;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #1da1f2;
  padding: 9px 27px;
  margin-top: 12px;
  margin-bottom: 11px;
  margin-right: 18px;
  cursor: pointer;
  &:hover {
    background: #e8f5fd;
  }
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

export default () => (
  <Wrap>
    <div className="container">
      <div className="row">
        <div class="col-lg-offset-3 col-lg-4">
          <MenuBlock>
            <MenuTab active>
              <MenuLink>Tweets</MenuLink>
              <MenuNumber active>8,058</MenuNumber>
            </MenuTab>
            <MenuTab>
              <MenuLink>Following</MenuLink>
              <MenuNumber>721</MenuNumber>
            </MenuTab>
            <MenuTab>
              <MenuLink>Followers</MenuLink>
              <MenuNumber>1,815</MenuNumber>
            </MenuTab>
            <MenuTab>
              <MenuLink>Likes</MenuLink>
              <MenuNumber>460</MenuNumber>
            </MenuTab>
            <MenuTab>
              <MenuLink>Lists</MenuLink>
              <MenuNumber>2</MenuNumber>
            </MenuTab>
          </MenuBlock>
        </div>
        <div className="col-lg-5 end-lg">
          <FollowButton>Follow</FollowButton>
          <MoreButton />
        </div>
      </div>
    </div>
  </Wrap>
);
