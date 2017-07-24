/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';

const Message = styled.h3`
  color: #ffffff;
  font-family: 'Lato-Regular';
  font-size: 16px;
  font-weight: normal;
  padding: 80px 40px 102px 40px;
`;

const RedText = styled.span`
  color: #fe5e5e;
`;

const PhoneLink = styled.span`
  text-decoration: none;
  color: #ffffff;
  border-bottom: 1px dashed #ffffff;
  padding-bottom: 3px;
`;

const scroller = Scroll.scroller;

const handleClick = () => {
  scroller.scrollTo('ContactsAnchor', {
    duration: 800,
    delay: 100,
    smooth: true,
  });
};

export default () => (
  <Message>
    <RedText>Ошибка! </RedText>
    Похоже что форма не работает, попробуйте связаться с нами по одному из <PhoneLink onClick={handleClick}>номеров</PhoneLink> ниже.
  </Message>
);
