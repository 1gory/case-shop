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
    К сожалению, интернет-магазин временно не работает.
    Для связи с администрацией пишите info@casewood.ru
  </Message>
);
