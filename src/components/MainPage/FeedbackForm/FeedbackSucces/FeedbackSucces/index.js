import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #3b3b3b;
  text-align: center;
  padding: 120px 40px 140px 40px;
`;

const Message = styled.h3`
  color: #59cb78;
  font-family: 'Lato-Light';
  font-size: 16px;
  font-weight: normal;
`;

export default () => (
  <Wrapper>
    <Message>Спасибо! Мы свяжемся с вами как можно скорее.</Message>
  </Wrapper>
);
