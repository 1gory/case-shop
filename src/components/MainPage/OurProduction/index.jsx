import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';
import Waypoint from 'react-waypoint';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  text-align: center;
  padding: 50px 0 30px 0;
`;

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #fff
`;

const VideoSection = styled.div`
  background-color: #3b3b3b;
  padding: 20px 0 50px 0;
  margin: 50px 0;
`;

const VideoWrapper = styled.div`
  
  @media (min-width: 768px) {
    max-width: 670px;
    margin: 0 auto;
  }
`;

const YouTubeVideo = styled(YouTube)`
  width: 100%;
`;

const Description = styled.div`
  text-align: left;
  padding: 20px;
  color: #ccc;
  font-family: 'Lato-Light';
  
  @media (min-width: 768px) {
    max-width: 670px;
    margin: 0 auto;
  }
`;

const AboutLink = styled(Link)`
  color: #ccc;
`;

const opt = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    rel: 0,
  },
};

export default ({ handleScroll }) => (
  <Wrapper>
    <Waypoint onEnter={handleScroll} />
    <VideoSection>
      <VideoWrapper>
        <H2>Наше производство</H2>
        <YouTubeVideo
          videoId="bl1xcf4piZ4"
          opts={opt}
        />
      </VideoWrapper>
      <Description>
        Деревянный чехол с гравировкой станет отличным подарком для друзей и близких.
        Каждый чехол, который мы гравируем - особенный.
        Мы делаем деревянные чехлы для iphone на все существующие модели.<br />
        Чтобы лучше познакомиться, мы подготовлили <AboutLink to="/about">
        страницу «о компании».</AboutLink>
      </Description>
    </VideoSection>
  </Wrapper>
);
