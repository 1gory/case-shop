import React from 'react';
import styled from 'styled-components';
import preloader from '../../Icons/preloader.svg';

const PreloaderWrapper = styled.div`
  padding: 86px 30px 32px 30px;
  text-align: center;
`;

const Title = styled.p`
  font-size: 13px;
  color: #4a4a4a;
`;

export default () => (
  <PreloaderWrapper>
    <img src={preloader} alt="preloader" />
    <Title>Пока изображение загружается,<br /> заполните форму</Title>
  </PreloaderWrapper>
);
