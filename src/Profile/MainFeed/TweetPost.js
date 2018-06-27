import React from "react";
import styled from "styled-components";
import Preview from "./TweetPreview";
import commentsIcon from "../../Ui/comments-icon.svg";
import retweetsIcon from "../../Ui/retweet-icon.svg";
import lovesIcon from "../../Ui/loves-clicked-icon.svg";
import likesIcon from "../../Ui/loves-icon.svg";
import emailsIcon from "../../Ui/direct-message-icon.svg";
import pinnedIcon from "../../Ui/pinned-icon.svg";
const avatar = `${process.env.PUBLIC_URL}/avatars/avatar.png`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  padding-bottom: 12px;
  padding-top: 8px;
  border-top: 1px solid #e1e8ed;
`;

const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.pinned ? "3px" : "12px")};
  justify-content: flex-start;
  align-items: flex-end;
`;

const AvatarImage = styled.img`
  width: 42px;
  height: 42px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const UsrName = styled.span`
  font-size: 15px;
  line-height: 30px;
  font-weight: bold;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #292f33;
`;

const Time = styled.span`
  font-size: 13px;
  line-height: 21px;
  font-weight: bold;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #697787;
`;

const Text = styled.p`
  line-height: 22px;
  font-size: 16px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #292f33;
  margin-top: 0;
`;

const BigText = styled.p`
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  line-height: 30px;
  font-size: 25px;
  font-weight: 200;
  color: #292f33;
  margin-bottom: 13px;
  margin-top: 0;
`;

const Icon = styled.img`
  margin-right: 11px;
`;

const Action = styled.div`
  display: flex;
`;

const ActionCount = styled.span`
  font-size: 13px;
  line-height: 15px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: ${props => (props.liked ? "#E2264D" : "#667580")};
  font-weight: ${props => (props.liked ? "bold" : "normal")};
`;

const ActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
`;

const Pinned = styled.span`
  font-size: 12px;
  line-height: 14px;
  font-family: "Helvetica Neue", "Helvetica", sans-serif;
  color: #707e88;
  margin-bottom: 4px;
  display: block;
`;

const Pin = styled.img`
  margin-bottom: 10px;
`;

const ImageBlock = styled.div`
  margin-right: 11px;
  margin-bottom: 14px;
`;

const PostedImage = styled.img`
  width: 490px;
`;

const TweetPost = props => (
  <Wrap>
    <Avatar pinned={props.pinned}>
      {props.pinned && <Pin src={pinnedIcon} />}
      <AvatarImage src={avatar} />
    </Avatar>
    <Post>
      <div>
        {props.pinned && <Pinned>Pinned Tweet</Pinned>}
        <UsrName>{props.name} </UsrName>
        <Time>
          @{props.Time} • {props.time}
        </Time>
      </div>
      {props.bigFont && <BigText>{props.text}</BigText>}
      {!props.bigFont && <Text>{props.text}</Text>}
      {props.preview && (
        <Preview
          image={props.preview.image}
          link={props.preview.link}
          title={props.preview.title}
        >
          {props.preview.description}
        </Preview>
      )}
      {props.image && (
        <ImageBlock>
          <PostedImage src={props.image} />
        </ImageBlock>
      )}
      <ActionBlock>
        <Action>
          <Icon src={commentsIcon} />
          <ActionCount>{props.comments > 0 && props.comments}</ActionCount>
        </Action>
        <Action>
          <Icon src={retweetsIcon} />
          <ActionCount>{props.retweets > 0 && props.retweets}</ActionCount>
        </Action>
        <Action>
          {props.liked ? <Icon src={lovesIcon} /> : <Icon src={likesIcon} />}
          <ActionCount liked={props.liked}>
            {props.likes > 0 && props.likes}
          </ActionCount>
        </Action>
        <Action>
          <Icon src={emailsIcon} />
          <ActionCount>{props.emails > 0 && props.emails}</ActionCount>
        </Action>
      </ActionBlock>
    </Post>
  </Wrap>
);

export default TweetPost;
