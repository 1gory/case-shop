import React from 'react';
import styled from 'styled-components';
import avatar from './avatar.jpg';

const Wrapper = styled.div`
  text-align: center;
  background: #fff;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
  color: #4a4a4a
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50px;
  margin: 20px
`;

const Name = styled.div`
  font-family: 'Lato-Bold';
  font-size: 16px;
`;

const Comment = styled.div`
  font-family: 'Lato-Regular';
  font-size: 13px;
  width: 300px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const Thumbs = styled.div``;

const Thumb = styled.div`
  width: 30px;
  height: 3px;
  border-radius: 3px;
  background-color: #b7b7b7;
  display: inline-block;
  margin: 8px;
`;

export default () => (
  <Wrapper>
    <H2>Отзывы</H2>
    <Avatar src={avatar} alt='avatar'/>
    <Name>Алексей, Москва</Name>
    <Comment>
      Подарил своей девушке чехол со своим портретом на день валентина. Спасибо, хорошие чехлы.
    </Comment>
    <Thumbs>
      <Thumb />
      <Thumb />
      <Thumb />
    </Thumbs>
  </Wrapper>
);
