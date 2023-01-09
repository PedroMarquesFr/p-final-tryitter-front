import React from "react";

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  TweetText,
  TweetImg,
  Status,
  Icons,
  CommentIcon,
  RetweetIcon,
  RetweetIconR,
  LikeIcon,
  Dot,
} from "./styles";

type tweetProps = {
  nickname: string;
  login: string;
  content: string;
  updatedAt: string;
};

const Tweet: React.FC<tweetProps> = (props) => {
  const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  const date = new Date(props.updatedAt);
  return (
    <Container>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>{props.nickname}</strong>
            <span>@{props.login}</span>
            <Dot />
            <time> {date.toLocaleDateString("pt-BR", options)}</time>
          </Header>
          <TweetText>{props.content}</TweetText>
          {/* <TweetImg /> */}
          {/* <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              20
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons> */}
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
