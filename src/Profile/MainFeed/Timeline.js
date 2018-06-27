import React from "react";
import styled from "styled-components";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import Tweet from "./TweetPost";
import { Link } from "../../styles";
const tweetPreview = `${process.env.PUBLIC_URL}/media/tweet-preview.jpg`;

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

const HeaderLink = styled.a`
  font-size: 18px;
  line-height: 21px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  text-align: center;
  font-weight: bold;
  color: ${props => (props.active ? "#14171a" : "#1da1f2")};
  margin-right: 34px;
`;

const TweetReply = {
  title: "The Future of Web Fonts",
  description:
    "We love typefaces. They give our sites and applications personalized feel. They convey the information and tell a story. They establish information hierarchy. But they’re…",
  link: "vilijamis.com",
  image: tweetPreview
};

const tweets = [
  {
    name: "Every Interaction",
    login: "EveryInteract",
    time: "2015, 5, 2",
    comments: 0,
    retweets: 17,
    likes: 47,
    directmsg: null,
    pinned: true,
    liked: true,
    bigFont: true,
    text:
      "We’ve made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI",
    image: `${process.env.PUBLIC_URL}/media/tweet-pic.jpg`,
    preview: null
  },
  {
    name: "Every Interaction",
    login: "EveryInteract",
    time: "2018, 6, 21, 23:07",
    comments: 1,
    retweets: 4,
    likes: 2,
    directmsg: null,
    pinned: false,
    liked: false,
    bigFont: true,
    text:
      "Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/",
    image: null,
    preview: null
  },
  {
    name: "Every Interaction",
    login: "EveryInteract",
    time: "2017, 11, 18",
    comments: 0,
    retweets: 0,
    likes: 0,
    directmsg: null,

    pinned: false,
    liked: 0,
    bigFont: false,
    text:
      "Variable web fonts are coming, and will open a world of opportunities for weight use online",
    image: null,
    preview: TweetReply
  }
];

const strdate = date => distanceInWordsToNow(new Date(date));

export default () => (
  <Wrap>
    <Header>
      <HeaderLink active>Tweets</HeaderLink>
      <HeaderLink>Tweets & replies</HeaderLink>
      <HeaderLink>Media</HeaderLink>
    </Header>

    {tweets.map(post => (
      <Tweet
        name={post.name}
        login={post.login}
        time={strdate(post.time)}
        comments={post.comments}
        retweets={post.retweets}
        likes={post.likes}
        directmsg={post.directmsg}
        pinned={post.pinned}
        liked={post.liked}
        bigFont={post.bigFont}
        text={post.text}
        image={post.image}
        preview={post.preview}
      />
    ))}
  </Wrap>
);
