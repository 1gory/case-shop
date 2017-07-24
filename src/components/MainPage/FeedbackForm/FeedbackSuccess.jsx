import React from 'react';
import styled from 'styled-components';

const Message = styled.h3`
  color: #59cb78;
  font-family: 'Lato-Regular';
  font-size: 16px;
  font-weight: normal;
  padding: 80px 40px 120px 40px;
`;

export default () => (
  <Message>
    Спасибо! Мы свяжемся с вами как можно скорее.
  </Message>
);
