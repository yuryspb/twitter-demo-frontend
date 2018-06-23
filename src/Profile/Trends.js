import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  background: white;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 45px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Header = styled.h2`
  font-size: 17px;
  line-height: 21px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #292f33;
  margin: 0px;
`;

const Dot = styled.span`
  font-size: 12px;
  color: #66757f;
  margin-right: 5px;
  margin-left: 5px;
`;

const HeaderLink = styled(Link)`
  font-size: 12px;
  line-height: 14px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #1da1f2;
  text-decoration: none;
`;

const TrendWrap = styled.div`
  margin-top: 10px;
`;

const TrendLink = styled(Link)`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const TrendCount = styled.div`
  font-size: 12px;
  line-height: 20px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #718290;
`;

const Trend = ({ to, count, children, span }) => (
  <TrendWrap>
    <TrendLink to={to}>{children}</TrendLink>
    {count && (
      <TrendCount>
        {count}
        {span}
      </TrendCount>
    )}
  </TrendWrap>
);

export default () => (
  <Wrap>
    <Title>
      <Header>United Kingdom Trends</Header>
      <Dot>•</Dot>
      <HeaderLink to="/change">Change</HeaderLink>
    </Title>
    <Trend to="/hashtag/BringYourDogToWorkDay">#BringYourDogToWorkDay</Trend>
    <Trend to="/hashtag/FridayFeeling" count={12100} span=" Tweets">
      #FridayFeeling
    </Trend>
    <Trend
      to="/hashtag/BrexitAnniversary"
      count="It’s one year since the UK voted to leave the European Union"
    >
      #BrexitAnniversary
    </Trend>
    <Trend to="/search?q=HMSQueenElizabeth" count={1036} span=" Tweets">
      HMS Queen Elizabeth
    </Trend>
    <Trend to="/search?q=JoeBudden" count={1036} span=" Tweets">
      Joe Budden
    </Trend>
    <Trend to="/search?q=Trident" count={6136} span=" Tweets">
      Trident
    </Trend>
  </Wrap>
);
