import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mediaIcon from "../Ui/media-icon.svg";
const thumbnail1 = `${process.env.PUBLIC_URL}/media/thumbnail1.jpg`;
const thumbnail2 = `${process.env.PUBLIC_URL}/media/thumbnail2.jpg`;
const thumbnail3 = `${process.env.PUBLIC_URL}/media/thumbnail3.jpg`;
const thumbnail4 = `${process.env.PUBLIC_URL}/media/thumbnail4.jpg`;
const thumbnail5 = `${process.env.PUBLIC_URL}/media/thumbnail5.jpg`;
const thumbnail6 = `${process.env.PUBLIC_URL}/media/thumbnail6.jpg`;

const Wrap = styled.div`
  margin-top: 30px;
`;

const CountBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  margin-right: 8px;
`;

const CommonLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #1da1f2;
  text-decoration: none;
`;

const ThumbnailBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  width: 83px;
  height: 83px;
`;

const ThumbnailLink = styled(Link)`
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const ThumbnailPic = ({ to, image }) => (
  <ThumbnailLink to={to}>
    <Thumbnail src={image} />
  </ThumbnailLink>
);

export default () => (
  <Wrap>
    <CountBlock>
      <Icon src={mediaIcon} />
      <CommonLink to="/EveryInteract/media">522 Photos and videos</CommonLink>
    </CountBlock>
    <ThumbnailBlock>
      <ThumbnailPic to="/pic2" image={thumbnail1} />
      <ThumbnailPic to="/pic3" image={thumbnail2} />
      <ThumbnailPic to="/pic4" image={thumbnail3} />
      <ThumbnailPic to="/pic5" image={thumbnail4} />
      <ThumbnailPic to="/pic6" image={thumbnail5} />
      <ThumbnailPic to="/pic7" image={thumbnail6} />
    </ThumbnailBlock>
  </Wrap>
);
