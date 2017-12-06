import React, { Component } from 'react';
import styled from 'styled-components';
import { DefaultPlayer } from 'react-html5video';
import 'react-html5video/dist/styles.css';

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
  padding: 20px 0 80px 0;
  margin: 50px 0;
`;

const VideoWrapper = styled.div`
  
  @media (min-width: 768px) {
    max-width: 670px;
    margin: 0 auto;
  }
`;

const Video = styled(DefaultPlayer)`
  & video {
    background-color: #3b3b3b;
  }
`;

const VideoBlock = () => (
  <Video
    loop
    muted
    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
    poster="/video/preview.jpg"
  >
    <source src="/video/promo.mp4" type="video/mp4" />
    {/*<track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />*/}
  </Video >
);

export default () => (
  <Wrapper>
    <VideoSection>
      <VideoWrapper>
        <H2>Наше производство</H2>
        {typeof window !== 'undefined' && typeof window.navigator !== 'undefined' && VideoBlock}
      </VideoWrapper>
    </VideoSection>
  </Wrapper>
);
