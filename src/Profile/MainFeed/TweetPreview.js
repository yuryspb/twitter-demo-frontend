import React from 'react';
import styled from 'styled-components';

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

const Reply = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 8px;
`;

const Title = styled.h2`
  font-size: 15px;
  line-height: 22px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: black;
  margin: 0;
`;
const Description = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
  color: black;
`;

const TweetPreview = (props) => {
  const { image, title, children } = props;

  return (
    <Wrap>
      <Image src={image} />
      <Reply>
        <Title>{title}</Title>
        <Description>{children}</Description>
      </Reply>
    </Wrap>
  );
};

export default TweetPreview;
