import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import ModalClose from './modal-close.svg';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 30px;
  font-family: 'Lato-Regular';
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
`;

const H3 = styled.h3`
  float: left;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  float: right;
  width: 13px;
  height: 13px;
  color: #b0b0b0;
  padding-top: 5px;
`;

const H4 = styled.p`
  font-size: 16px;
  color: #4a4a4a;
  padding: 15px 0 0 15px;
  margin-bottom: 9px;
`;

const Form = styled.form`
  clear: both;
  padding-top: 25px;
  & input, textarea {
    border: 2px solid #cccccc;
    border-radius: 19px;
    padding: 8px 15px;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Lato-Regular';
  }
  & div {
    text-align: center;
  }
  & button {
    border: none;
    border-radius: 19px;
    background-color: #3b3b3b;
    color: #ffffff;
    font-family: 'Lato-Regular';
    padding: 12px 51px;
    margin: 30px;
  }
`;

const StyledInputMask = styled(InputMask)`
  font-family: Lato-Regular;
  font-size: 16px;
`;

const InputMessage = styled.textarea`
  height: 125px;
  resize: none;
  padding-top: 10px;
`;

export default () => (
  <Wrapper>
    <H3>Оставить сообщение</H3>
    <StyledLink to='/'><img src={ModalClose}/></StyledLink>
    <Form>
      <H4>Номер телефона (для связи)</H4>
      <StyledInputMask mask='+7 (999) 999-99-99' placeholder='+7'/>
      <H4>Сообщение</H4>
      <InputMessage placeholder='Введите сообщение...' type='text' height='135'/>
      <div>
        <button>Отправить</button>
      </div>
    </Form>
  </Wrapper>
);
