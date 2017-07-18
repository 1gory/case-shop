import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Message = styled.h3`
  color: #ffffff;
  font-family: 'Lato-Light';
  font-size: 16px;
  font-weight: normal;
  padding: 80px 40px 102px 40px;
`;

const RedText = styled.span`
  color: #fe5e5e;
`;

const PhoneLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  border-bottom: 1px dashed #ffffff;
  padding-bottom: 3px;
`;

export default () => (
  <Message>
    <RedText>Ошибка! </RedText>Похоже что форма не работает, попробуйте связаться с нами по одному из <PhoneLink to='/'>номеров</PhoneLink> ниже.
  </Message>
);
