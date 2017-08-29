import React from 'react';
import styled from 'styled-components';
import preloader from './preloader.svg';

const PreloaderWrapper = styled.div`
  padding: 86px;
`;

export default () => (
  <PreloaderWrapper>
    <img src={preloader} alt="preloader" />
  </PreloaderWrapper>
);
