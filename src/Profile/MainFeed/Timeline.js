import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Tweet from './TweetPost';

const Wrap = styled.div`
  width: 100%;
  margin-top: 8px;
  background: white;
`;

const Header = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 16px;
`;

const HeaderLink = styled(NavLink)`
  font-size: 18px;
  line-height: 21px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  text-align: center;
  font-weight: bold;
  color: ${({ active }) => (active ? '#14171a' : '#1da1f2')};
  margin-right: 34px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid #1da1f2;
  }
`;

const formatDate = date => distanceInWordsToNow(new Date(date));

export default class Tweets extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const { userData } = this.props;
    const source = 'https://twitter-demo.erodionov.ru';
    const key = process.env.REACT_APP_SECRET_CODE;

    fetch(`${source}/api/v1/accounts/${userData.id}/statuses?since_id=1&access_token=${key}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;
    const { userData } = this.props;

    return (
      <Wrap>
        <Header>
          <HeaderLink exact to={`/${userData}/`} active>
            Tweets
          </HeaderLink>
          <HeaderLink exact to="/with_replies">
            Tweets & replies
          </HeaderLink>
          <HeaderLink exact to="/media">
            Media
          </HeaderLink>
        </Header>

        {posts.map(post => (
          <Tweet
            key={post.id}
            avatar={post.account.avatar}
            name={post.account.display_name}
            login={post.account.username}
            time={formatDate(post.created_at)}
            comments={post.comments}
            retweets={post.reblogs_count}
            likes={post.favourites_count}
            directmsg={post.directmsg}
            pinned={post.pinned}
            liked={post.activeLike}
            bigFont={post.sensitive}
            text={post.content}
            image={post.media_attachments}
            preview={post.in_reply_to_id}
          />
        ))}
      </Wrap>
    );
  }
}
