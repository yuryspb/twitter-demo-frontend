import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
  margin-right: 11px;
  margin-bottom: 23px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 126px;
  height: 126px;
`;

const ReplyBlock = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 15px;
  line-height: 22px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: black;
  margin: 0;
`;
const Descr = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: black;
`;
const Link = styled.a`
  font-size: 15px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #97a6b1;
  text-decoration: none;
`;

const TweetPreview = props => (
  <Wrap>
    <Image src={props.image} />
    <ReplyBlock>
      <Title>{props.title}</Title>
      <Descr>{props.children}</Descr>
      <Link>{props.link}</Link>
    </ReplyBlock>
  </Wrap>
);

export default TweetPreview;
