import React from 'react';
import styled from 'styled-components';
import preloader from './preloader.svg';

const PreloaderWrapper = styled.div`
  padding: 86px;
  text-align: center;
`;

export default () => (
  <PreloaderWrapper>
    <img src={preloader} alt="preloader" />
  </PreloaderWrapper>
);
