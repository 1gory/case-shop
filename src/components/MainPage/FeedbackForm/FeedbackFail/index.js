import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #3b3b3b;
  text-align: center;
  padding: 100px 40px 130px 40px;
`;

const Message = styled.h3`
  color: #ffffff;
  font-family: 'Lato-Light';
  font-size: 16px;
  font-weight: normal;
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
  <Wrapper>
    <Message>
      <RedText>Ошибка! </RedText>Похоже что форма не работает, попробуйте связаться с нами по одному из <PhoneLink to='/'>номеров</PhoneLink> ниже.
    </Message>
  </Wrapper>
);
