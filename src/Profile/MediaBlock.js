import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaIcon from '../Ui/media-icon.svg';

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
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
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

const media = [
  {
    id: 1,
    name: 'pic2',
    src: `${process.env.PUBLIC_URL}/media/thumbnail1.jpg`,
  },
  {
    id: 2,
    name: 'pic3',
    src: `${process.env.PUBLIC_URL}/media/thumbnail2.jpg`,
  },
  {
    id: 3,
    name: 'pic4',
    src: `${process.env.PUBLIC_URL}/media/thumbnail3.jpg`,
  },
  {
    id: 4,
    name: 'pic5',
    src: `${process.env.PUBLIC_URL}/media/thumbnail4.jpg`,
  },
  {
    id: 5,
    name: 'pic6',
    src: `${process.env.PUBLIC_URL}/media/thumbnail5.jpg`,
  },
  {
    id: 6,
    name: 'pic7',
    src: `${process.env.PUBLIC_URL}/media/thumbnail6.jpg`,
  },
];

export default () => (
  <Wrap>
    <CountBlock>
      <Icon src={mediaIcon} />
      <CommonLink to="/EveryInteract/media">
522 Photos and videos
      </CommonLink>
    </CountBlock>
    <ThumbnailBlock>
      {media.map(pic => (
        <ThumbnailPic key={pic.id} to={`/${pic.name}`} image={pic.src} alt={pic.name} />
      ))}
    </ThumbnailBlock>
  </Wrap>
);
