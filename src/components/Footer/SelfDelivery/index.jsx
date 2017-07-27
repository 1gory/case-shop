import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';

const Wrapper = styled.div`
  text-align: center;
  background: #fff;
  padding: 20px 40px;
`;

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
  color: #9d9d9d;
`;

const Description = styled.p`
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #3b3b3b;
`;

const SelfDeliveryAnchor = Scroll.Element;

export default () => (
  <Wrapper>
    <SelfDeliveryAnchor name="SelfDeliveryAnchor" />
    <H2>Точка самовывоза</H2>
    <Description>
      Ст. метро «Речной вокзал». Последний вагон из центра и налево. Торговый центр «Интер-Север».
На первом этаже у входа в макдоналдс стоит стойка с аксессуарами. Там Вы сможете забрать заказ.
    </Description>
  </Wrapper>
);
