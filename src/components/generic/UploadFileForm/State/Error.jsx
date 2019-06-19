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

const WhatsappLink = styled.a`
  color: green;
`;

export default ({ handleClick }) => (
  <Wrapper>
    <H4>Что-то пошло не так!</H4>
    <Message>
      Просто отправьте изображение нам в <WhatsappLink href="whatsapp://send?text=Здравствуйте!&phone=+79162282456">WhatsApp!</WhatsappLink>
    </Message>
    <Button onClick={handleClick}>Попробвать снова</Button>
  </Wrapper>
);
