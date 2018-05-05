import React from 'react';
import styled from 'styled-components';
import WhiteColor from './Icons/rubleWhite.svg';
import BlackColor from './Icons/rubleBlack.svg';

const RubleSign = styled.span`
  color: #696969;
  opacity: 0;
  position: absolute;
`;

const RubleImg = styled.img`
  height: ${({ height }) => (`${height}px`)};
  margin-left: 4px;
`;

export default ({ white, height }) => (
  <span>
    <RubleSign>₽</RubleSign>
    <RubleImg src={white ? WhiteColor : BlackColor} height={height || 13} />
  </span>
);
