import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';

const Wrapper = styled.div`
  text-align: center;
  // background: #fff;
  padding: 20px 40px;
`;

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #9d9d9d;
`;

const Description = styled.p`
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #3b3b3b;
  
  @media (min-width: 768px) {
    width: 650px;
    margin: 0 auto;
  }
`;

const SelfDeliveryAnchor = Scroll.Element;

export default () => (
  <Wrapper>
    <SelfDeliveryAnchor name="SelfDeliveryAnchor" />
    <H2>Точка самовывоза</H2>
    <Description>
      4-й Лихачевский переулок, 13 стр.1. На общественном транспорте можно доехать от ст. метро
      «Речной вокзал» или «Петровско-разумовская», остановка «Лихоборская набережная».
      Либо от МЦК «Лихоборы» или «Окружная».
    </Description>
  </Wrapper>
);
