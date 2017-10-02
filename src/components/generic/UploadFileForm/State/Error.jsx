import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 30px;
`;

const H4 = styled.h4`
  font-family: 'Lato-Regular';
  color: #fe5e5e;
`;

const Message = styled.p`
  font-family: 'Lato-Regular';
  color: #4a4a4a;
  font-size: 14px;
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
  <Wrapper>
    <H4>Ошибка!</H4>
    <Message>
      Не удалось загрузить<br /> изображение
    </Message>
    <Button onClick={handleClick}>Попробвать снова</Button>
  </Wrapper>
);
