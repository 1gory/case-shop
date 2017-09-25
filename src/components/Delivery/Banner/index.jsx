import React from 'react';
import styled from 'styled-components';
import worldMap from './world-map.jpg';

const Wrapper = styled.div`
  background-image: url(${worldMap});
  background-size: cover;
  height: 230px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Header = styled.h1`
  font-family: 'Lato-Light';
  font-size: 36px;
  font-weight: lighter;
`;

export default () => (
  <Wrapper>
    <Header>
      Осуществляем доставку по всей планете!
    </Header>
  </Wrapper>
);

