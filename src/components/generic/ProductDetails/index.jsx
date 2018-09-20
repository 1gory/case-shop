/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Dropdown from '../../generic/Dropdown/index';
import TextInput from '../../generic/Form/TextInput';

const Label = styled.label`
  display: block;
  text-align: left;
  font-family: 'Lato-Regular';

  & span {
    margin-left: 15px;
  }
  
  & input {
    width: 100%;
    border-radius: 20px;
    border: solid 1px #cccccc;
    background: none;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 12px;
    color: #4a4a4a;
  }

  & input::placeholder {
    color: #9e9e9e;
  }
`;

const StyledInputMask = styled(InputMask)`
  font-family: Lato-Regular;
  font-size: 16px;
  text-align: left;
  background: ${props => (props.invalidNumber ? '#ffd4d4' : 'initial')} !important;
`;

export const PhoneNumber = ({ handleChangeForm, invalidNumber }) => (
  <Label>
    <span>Номер телефона</span>
    <StyledInputMask
      invalidNumber={invalidNumber}
      name="phone"
      mask="+7 (999) 999-99-99"
      placeholder="+7"
      onChange={handleChangeForm}
    />
  </Label>
);

export const Messenger = ({ handleChangeForm }) => (
  <Label>
    <span>Куда выслать макет?</span>
    <Dropdown name="messenger" onChange={handleChangeForm}>
      <option value="whatsapp">WhatsApp</option>
      <option value="telegram">Telegram</option>
      <option value="call">Позвонить</option>
    </Dropdown>
  </Label>
);

export const Model = ({ handleChangeForm }) => (
  <Label>
    <span>Модель iPhone</span>
    <Dropdown name="model" onChange={handleChangeForm}>
      <option value="iPhone 5/5S/5SE">iPhone 5/5S/5SE</option>
      <option value="iPhone 6/6S">iPhone 6/6S</option>
      <option value="iPhone 6 PLUS/6S PLUS">iPhone 6 PLUS/6S PLUS</option>
      <option value="iPhone 7">iPhone 7</option>
      <option value="iPhone 7PLUS">iPhone 7PLUS</option>
      <option value="iPhone 8">iPhone 8</option>
      <option value="iPhone 8PLUS">iPhone 8PLUS</option>
      <option value="iPhone 10">iPhone X</option>
    </Dropdown>
  </Label>
);

export const Material = ({ handleChangeForm }) => (
  <Label>
    <span>Материал для чехла</span>
    <Dropdown name="material" onChange={handleChangeForm}>
      <option value="light">Светлое дерево</option>
      <option value="dark">Темное дерево</option>
    </Dropdown>
  </Label>
);

export const CustomerName = ({ handleChangeForm }) => (
  <Label>
    <span>Как к вам обращаться?</span>
    <TextInput handleChangeForm={handleChangeForm} placeholder="Имя" name="customerName" />
  </Label>
);
