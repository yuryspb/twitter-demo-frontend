// @flow
import React from 'react';
import styled from 'styled-components';
import Preview from './TweetPreview';
import Actions from './Actions';
import pinnedIcon from '../../Ui/pinned-icon.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  padding-bottom: 12px;
  padding-top: 8px;
  border-top: 1px solid #e1e8ed;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ pinned }) => (pinned ? '3px' : '12px')};
  justify-content: flex-start;
  align-items: flex-end;
`;

const AvatarImage = styled.img`
  border-radius: 50%;
  width: 42px;
  height: 42px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const UserName = styled.span`
  font-size: 15px;
  line-height: 30px;
  font-weight: bold;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #292f33;
`;

const Time = styled.span`
  font-size: 13px;
  line-height: 21px;
  font-weight: bold;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #697787;
`;

const Text = styled.p`
  font-size: ${({ big }) => (big ? '25px' : '16px')};
  line-height: ${({ big }) => (big ? '30px' : '22px')};
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  font-weight: 200;
  color: #292f33;
  margin-bottom: 13px;
  margin-top: 0;
`;

const Pinned = styled.span`
  font-size: 12px;
  line-height: 14px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #707e88;
  margin-bottom: 4px;
  display: block;
`;

const Pin = styled.img`
  margin-bottom: 10px;
`;

const Image = styled.div`
  margin-right: 11px;
  margin-bottom: 14px;
`;

const PostedImage = styled.img`
  width: 490px;
`;

type Props = {
  avatar: string,
  pinned: boolean,
  name: string,
  time: string,
  bigFont: boolean,
  text: string,
  preview: Object,
  image: Array<Object>,
  comments: number,
  retweets: number,
  liked: boolean,
  likes: number,
  login: number,
};

const TweetPost = ({
  avatar,
  pinned,
  name,
  time,
  bigFont,
  text,
  preview,
  image,
  comments,
  retweets,
  liked,
  likes,
  login,
}: Props) => (
  <Wrap>
    <Avatar pinned={pinned}>
      {pinned && <Pin src={pinnedIcon} />}
      <AvatarImage src={avatar} />
    </Avatar>
    <Post>
      <div>
        {pinned && <Pinned>Pinned Tweet</Pinned>}
        <UserName>{name} </UserName>
        <Time>
          @
          {login} •
          {time}
        </Time>
      </div>
      <Text big={bigFont} dangerouslySetInnerHTML={{ __html: text }} />
      {preview && (
        <Preview image={preview.image} link={preview.link} title={preview.title}>
          {preview.description}
        </Preview>
      )}
      {image && <Image>{image.map(map => <PostedImage key={map.id} src={map.url} />)}</Image>}
      <Actions comments={comments} retweets={retweets} liked={liked} likes={likes} />
    </Post>
  </Wrap>
);

export default TweetPost;
