import React, { Component } from "react";
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
  font-family: HelveticaNeue, Helvetica;
  color: black;
  margin: 0;
`;
const Descr = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-family: HelveticaNeue, Helvetica;
  color: black;
`;
const Link = styled.a`
  font-size: 15px;
  font-family: HelveticaNeue, Helvetica;
  color: #97a6b1;
  text-decoration: none;
`;

class TweetPreview extends Component {
  render() {
    return (
      <Wrap>
        <Image src={this.props.image} />
        <ReplyBlock>
          <Title>{this.props.title}</Title>
          <Descr>{this.props.children}</Descr>
          <Link>{this.props.link}</Link>
        </ReplyBlock>
      </Wrap>
    );
  }
}

export default TweetPreview;
