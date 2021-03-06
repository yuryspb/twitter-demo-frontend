// @flow
import React from 'react';
import styled from 'styled-components';
import commentsIcon from '../../Ui/comments-icon.svg';
import retweetsIcon from '../../Ui/retweet-icon.svg';
import lovesIcon from '../../Ui/loves-clicked-icon.svg';
import likesIcon from '../../Ui/loves-icon.svg';
import directMessageIcon from '../../Ui/direct-message-icon.svg';

const Icon = styled.img`
  margin-right: 11px;
`;

const Action = styled.div`
  display: flex;
`;

const Count = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  font-weight: ${({ liked }) => (liked ? 'bold' : 'normal')};
  color: ${({ liked }) => (liked ? '#E2264D' : '#667580')};
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`;

type Props = {
  comments: number,
  retweets: number,
  liked: boolean,
  likes: number,
};

const Actions = ({
  comments, retweets, liked, likes,
}: Props) => (
  <Wrap>
    <Action>
      <Icon src={commentsIcon} />
      <Count>{comments > 0 && comments}</Count>
    </Action>
    <Action>
      <Icon src={retweetsIcon} />
      <Count>{retweets > 0 && retweets}</Count>
    </Action>
    <Action>
      {liked ? <Icon src={lovesIcon} /> : <Icon src={likesIcon} />}
      <Count liked={liked}>{likes > 0 && likes}</Count>
    </Action>
    <Action>
      <Icon src={directMessageIcon} />
    </Action>
  </Wrap>
);

export default Actions;
