// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaIcon from '../Ui/media-icon.svg';

const Wrap = styled.div`
  margin-top: 30px;
`;

const Count = styled.div`
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

const Thumbnails = styled.div`
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

const publicUrl = process.env.PUBLIC_URL;
if (!publicUrl && publicUrl !== '') throw new Error('Missing PUBLIC_URL');

const media = [
  {
    id: 1,
    name: 'pic2',
    src: `${publicUrl}/media/thumbnail1.jpg`,
  },
  {
    id: 2,
    name: 'pic3',
    src: `${publicUrl}/media/thumbnail2.jpg`,
  },
  {
    id: 3,
    name: 'pic4',
    src: `${publicUrl}/media/thumbnail3.jpg`,
  },
  {
    id: 4,
    name: 'pic5',
    src: `${publicUrl}/media/thumbnail4.jpg`,
  },
  {
    id: 5,
    name: 'pic6',
    src: `${publicUrl}/media/thumbnail5.jpg`,
  },
  {
    id: 6,
    name: 'pic7',
    src: `${publicUrl}/media/thumbnail6.jpg`,
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
      <Icon src={mediaIcon} />
      <CommonLink to={`/${userData.id}/media`}>522 Photos and videos</CommonLink>
    </Count>
    <Thumbnails>
      {media.map(pic => (
        <ThumbnailPic key={pic.id} to={`/${pic.name}`} image={pic.src} alt={pic.name} />
      ))}
    </Thumbnails>
  </Wrap>
);
