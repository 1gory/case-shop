import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

const Wrapper = styled.div`
  background-color: #3b3b3b;
  color: #fff;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const H3 = styled.h3`
    font-family: 'Lato-Bold';
    font-size: 24px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const H4 = styled.h4`
  margin-top: 5px;
  font-family: 'Lato-Regular';
  font-size: 16px;
`;

const Form = styled.form`
  padding: 10px 80px 20px 80px;
  font-family: 'Lato-Regular';

  & input, button {
    margin: 5px 0;
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
  }

  & input {
    background-color: #585858;
    color: rgba(255, 255, 255, 0.5);
  }

  & button {
    background-color: #fff;
    color: #3b3b3b;
  }
`;

  const StyledInputMask = styled(InputMask)`
  opacity: 0.5;
  font-family: Lato-Regular;
  font-size: 16px;
  text-align: left;
  color: rgba(74, 74, 74, 0.5);
`;


export default () => (
  <Wrapper>
    <H3>Не можете определиться?</H3>
    <H4>Оставьте свой номер и мы с Вами свяжемся!</H4>
    <Form>
      <input placeholder='Имя' type='text'/>
      <StyledInputMask mask="+7 (999) 999-99-99" placeholder="Телефон" />
      <button>Отправить</button>
    </Form>
  </Wrapper>
);
