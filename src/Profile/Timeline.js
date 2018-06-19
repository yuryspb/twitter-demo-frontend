import React from "react";
import styled from "styled-components";
import Tweet from "./TweetPost";
import { Link } from "../styles";
import tweetPreview2 from "./tweetPreview2.svg";
import tweetPic from "./tweetPic.png";

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
  image: tweetPreview2
};

export default () => (
  <Wrap>
    <Header>
      <HeaderLink active>Tweets</HeaderLink>
      <HeaderLink>Tweets & replies</HeaderLink>
      <HeaderLink>Media</HeaderLink>
    </Header>
    <Tweet
      name="Every Interaction"
      Login="EveryInteract"
      time="2 Mar 2015"
      comments={0}
      retweets={17}
      likes={47}
      directmsg
      bigFont
      pinned
      liked
      image={tweetPic}
    >
      We’ve made some more resources for all<br />you wonderful{" "}
      <Link>#design</Link> folk<br />
      <Link>everyinteraction.com/resources/</Link> <Link>#webdesign</Link>
      <br /> <Link>#UI</Link>
    </Tweet>
    <Tweet
      name="Every Interaction"
      Login="EveryInteract"
      time="23h"
      comments={1}
      retweets={4}
      likes={2}
      directmsg
      bigFont
    >
      Our new website concept; Taking you<br />from… @ Every Interaction<br />
      <Link href="#">instagram.com/p/BNFGrfhBP3M/</Link>
    </Tweet>
    <Tweet
      name="Every Interaction"
      Login="EveryInteract"
      time="Nov 18"
      comments={0}
      retweets={0}
      likes={0}
      directmsg
      bigFont={false}
      preview={TweetReply}
    >
      Variable web fonts are coming, and will open a world of opportunities<br />for
      weight use online
    </Tweet>
  </Wrap>
);
