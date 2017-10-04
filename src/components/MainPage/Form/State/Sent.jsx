import React from 'react';
import styled from 'styled-components';
import Form from '../../../generic/UploadFileForm/FormWrap';

const Wrapper = styled.div`
  padding: 15px 0;
`;

const H4 = styled.h4`
  font-family: 'Lato-Regular';
  color: #59cb78;
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
  <Form>
    <Wrapper>
      <H4>Заказ успешно отправлен!</H4>
      <Message>
        Благодарим вас за ваш выбор.
        Наш оператор свяжется с вами в течении дня по указанному номеру,
        чтобы обсудить детали заказа.
      </Message>
      <Button onClick={event => (handleClick(event))}>Сделать еще заказ</Button>
    </Wrapper>
  </Form>
);
