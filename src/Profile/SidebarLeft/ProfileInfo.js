import React from "react";
import styled from "styled-components";
import locationIcon from "../../Ui/location-icon.svg";
import linkIcon from "../../Ui/link-icon.svg";
import joinedIcon from "../../Ui/joined-icon.svg";
import verifyIcon from "../../Ui/verify-icon.svg";

const Wrap = styled.div`
  margin-top: 45px;
`;

const InfoBlock = styled.div`
  display: flex;
`;

const UsrName = styled.span`
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  color: #14171a;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
`;

const VerifyIcon = styled.img`
  margin-left: 5px;
  margin-top: 1px;
`;

const Login = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #697787;
  margin-right: 8px;
`;

const FollowChk = styled.span`
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  line-height: 12px;
  font-size: 12px;
  color: #697787;
`;

const Descr = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #14171a;
  margin-top: 12px;
  margin-bottom: 13px;
`;

const MsgBtn = styled.button`
  background: #1da1f2;
  border-radius: 100px;
  border: none;
  color: white;
  font-size: 14px;
  line-height: 14px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  font-weight: bold;
  text-align: center;
  width: 128px;
  height: 39px;
  margin-right: 5px;
  cursor: pointer;
`;

const ButtonBlock = styled.div`
  margin-top: 17px;
  display: flex;
  justify-content: center;
`;

const InfoIcon = styled.img`
  margin-right: 13px;
`;

const InfoText = styled.span`
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;

const InfoLink = styled.a`
  font-size: 14px;
  line-height: 28px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #1d81c2;
  text-decoration: none;
  cursor: pointer;
`;

export default () => (
  <Wrap>
    <InfoBlock>
      <UsrName>Every Interaction</UsrName>
      <VerifyIcon src={verifyIcon} />
    </InfoBlock>
    <Login>@EveryInteract</Login>
    <FollowChk>Follows you</FollowChk>
    <Descr>
      UX Design studio focused problem<br />solving creativity. Design to us is
      how<br />can we make things *work* amazing.
    </Descr>
    <div>
      <InfoBlock>
        <InfoIcon src={locationIcon} />
        <InfoText>London, UK</InfoText>
      </InfoBlock>
      <InfoBlock>
        <InfoIcon src={linkIcon} />
        <InfoLink>everyinteraction.com</InfoLink>
      </InfoBlock>
      <InfoBlock>
        <InfoIcon src={joinedIcon} />
        <InfoText>Joined May 2008</InfoText>
      </InfoBlock>
    </div>
    <ButtonBlock>
      <MsgBtn>Tweet to</MsgBtn>
      <MsgBtn>Message</MsgBtn>
    </ButtonBlock>
  </Wrap>
);
