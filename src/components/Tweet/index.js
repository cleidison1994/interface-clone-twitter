import React from 'react';

import {
   Container, 
   Retweeted, 
   OwnerIcon,
   Body, 
   Avatar, 
   Content, 
   Header, 
   Dot, 
   Description,
   ImageContent,
   Icons,
   Status,
   CommentIcon,
   RetweetIcon,
   LikeIcon
    } from './styles';

function Tweet() {
  return (
    <Container>
      <Retweeted>
      <OwnerIcon />
        Voçe retweetou
        </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Cleidison Barradas</strong>
            <span>@barradas</span>
            <Dot />
            <time>12 de julho</time>
          </Header>
          <Description>Fogete não tem ré</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon/>
              18
            </Status>
            <Status>
              <RetweetIcon/>
              18
            </Status>
            <Status>
              <LikeIcon/>
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;