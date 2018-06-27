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

const Trend = ({ link, count, text, counttext }) => (
  <TrendWrap>
    <TrendLink to={link}>{text}</TrendLink>
    <TrendCount>
      {count}
      {counttext}
    </TrendCount>
  </TrendWrap>
);

const trends = [
  {
    id: 1,
    link: "hashtag/BringYourDogToWorkDay",
    text: "#BringYourDogToWorkDay",
    count: null,
    counttext: null
  },
  {
    id: 2,
    link: "hashtag/FridayFeeling",
    text: "#FridayFeeling",
    count: 12100,
    counttext: " Tweets"
  },
  {
    id: 3,
    link: "hashtag/BrexitAnniversary",
    text: "#BrexitAnniversary",
    count: null,
    counttext: "It’s one year since the UK voted to leave the European Union"
  },
  {
    id: 4,
    link: "search?q=HMSQueenElizabeth",
    text: "HMS Queen Elizabeth",
    count: 1036,
    counttext: " Tweets"
  },
  {
    id: 5,
    link: "search?q=JoeBudden",
    text: "Joe Budden",
    count: 1036,
    counttext: " Tweets"
  },
  {
    id: 6,
    link: "search?q=Trident",
    text: "Trident",
    count: 6136,
    counttext: " Tweets"
  }
];

export default () => (
  <Wrap>
    <Title>
      <Header>United Kingdom Trends</Header>
      <Dot>•</Dot>
      <HeaderLink to="/change">Change</HeaderLink>
    </Title>
    {trends.map(trendblock => (
      <Trend
        key={trendblock.id}
        link={`/${trendblock.link}`}
        text={trendblock.text}
        count={trendblock.count}
        counttext={trendblock.counttext}
      />
    ))}
  </Wrap>
);
