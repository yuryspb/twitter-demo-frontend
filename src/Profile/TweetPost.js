import React, { Component } from "react";
import styled from "styled-components";
import Preview from "./TweetPreview";
import avatar from "./avatar.png";
import comments from "../Ui/commentsIcon.svg";
import retweets from "../Ui/retweetIcon.svg";
import loves from "../Ui/lovesClickedIcon.svg";
import likes from "../Ui/lovesIcon.svg";
import emails from "../Ui/directMessageIcon.svg";
import pinned from "../Ui/pinnedIcon.svg";

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

class TweetPost extends Component {
  render() {
    return (
      <Wrap>
        <Avatar pinned={this.props.pinned}>
          {this.props.pinned && <Pin src={pinned} />}
          <AvatarImage src={avatar} />
        </Avatar>
        <Post>
          <div>
            {this.props.pinned && <Pinned>Pinned Tweet</Pinned>}
            <UsrName>{this.props.name} </UsrName>
            <Time>
              @{this.props.Time} • {this.props.time}
            </Time>
          </div>
          {this.props.bigFont && <BigText>{this.props.children}</BigText>}
          {!this.props.bigFont && <Text>{this.props.children}</Text>}
          {this.props.preview && (
            <Preview
              image={this.props.preview.image}
              link={this.props.preview.link}
              title={this.props.preview.title}
            >
              {this.props.preview.description}
            </Preview>
          )}
          {this.props.image && (
            <ImageBlock>
              <PostedImage src={this.props.image} />
            </ImageBlock>
          )}
          <ActionBlock>
            <Action>
              <Icon src={comments} />
              <ActionCount>
                {this.props.comments > 0 && this.props.comments}
              </ActionCount>
            </Action>
            <Action>
              <Icon src={retweets} />
              <ActionCount>
                {this.props.retweets > 0 && this.props.retweets}
              </ActionCount>
            </Action>
            <Action>
              {this.props.liked ? <Icon src={loves} /> : <Icon src={likes} />}
              <ActionCount liked={this.props.liked}>
                {this.props.likes > 0 && this.props.likes}
              </ActionCount>
            </Action>
            <Action>
              <Icon src={emails} />
              <ActionCount>
                {this.props.emails > 0 && this.props.emails}
              </ActionCount>
            </Action>
          </ActionBlock>
        </Post>
      </Wrap>
    );
  }
}

export default TweetPost;
