import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mediaIcon from "../Ui/media-icon.svg";
const thumbnail1 = `${process.env.PUBLIC_URL}/media/thumbnail1.png`;
const thumbnail2 = `${process.env.PUBLIC_URL}/media/thumbnail2.png`;
const thumbnail3 = `${process.env.PUBLIC_URL}/media/thumbnail3.png`;
const thumbnail4 = `${process.env.PUBLIC_URL}/media/thumbnail4.png`;
const thumbnail5 = `${process.env.PUBLIC_URL}/media/thumbnail5.png`;
const thumbnail6 = `${process.env.PUBLIC_URL}/media/thumbnail6.png`;

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

const ThumbnailImg = styled.img`
  width: 83px;
  height: 83px;
`;

const ThumbnailLink = styled(Link)`
  display: inline-block;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const Thumbnail = ({ to, image }) => (
  <ThumbnailLink to={to}>
    <ThumbnailImg src={image} />
  </ThumbnailLink>
);

export default () => (
  <Wrap>
    <CountBlock>
      <Icon src={mediaIcon} />
      <CommonLink to="/EveryInteract/media">522 Photos and videos</CommonLink>
    </CountBlock>
    <ThumbnailBlock>
      <Thumbnail to="/pic2" image={thumbnail1} />
      <Thumbnail to="/pic3" image={thumbnail2} />
      <Thumbnail to="/pic4" image={thumbnail3} />
      <Thumbnail to="/pic5" image={thumbnail4} />
      <Thumbnail to="/pic6" image={thumbnail5} />
      <Thumbnail to="/pic7" image={thumbnail6} />
    </ThumbnailBlock>
  </Wrap>
);