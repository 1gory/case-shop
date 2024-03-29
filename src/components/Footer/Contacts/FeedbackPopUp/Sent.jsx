import React from 'react';
import styled from 'styled-components';

const Message = styled.h3`
  color: red;
  font-family: 'Lato-Regular';
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  padding: 80px 40px 120px 40px;
`;

const Button = styled.button`
  border-radius: 20px;
  border: solid 1px #222222;
  background: none;
  padding: 5px 15px;
  margin-top: 20px;
  display: inline-block;
  font-family: 'Lato-Regular';
  font-size: 14px;
  text-decoration: none;
  color: #222222;
`;

export default ({ handleClick }) => (
  <Message>
    К сожалению, интернет-магазин временно не работает.
    Для связи с администрацией пишите info@casewood.ru
    <Button onClick={handleClick}>Отправить еще сообщение</Button>
  </Message>
);
