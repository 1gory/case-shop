import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

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

const YouTubeVideo = styled(YouTube)`
  width: 100%;
`;

const opt = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    rel: 0,
  },
};

export default () => (
  <Wrapper>
    <VideoSection>
      <VideoWrapper>
        <H2>Наше производство</H2>
        <YouTubeVideo
          videoId="bl1xcf4piZ4"
          opts={opt}
        />
      </VideoWrapper>
    </VideoSection>
  </Wrapper>
);
