/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import Dropdown from '../../Dropdown/index';

const DetailsFormWrapper = styled.form`
  padding: 40px 25px 10px 25px;
  color: #4a4a4a;
  overflow: hidden;

  & label {
    display: block;
    text-align: left;
    font-family: 'Lato-Regular';

    & span {
      margin-left: 15px;
    }
  }

  & input {
    width: 100%;
    border-radius: 20px;
    border: solid 1px #cccccc;
    background: none;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 20px;
    color: #4a4a4a;
  }
  & input::placeholder {
    color: #9e9e9e;
  }
`;

const H3 = styled.h3`
  font-size: 16px;
  font-family: 'Lato-SemiBold';
  margin-bottom: 30px;
`;

const H4 = styled.h4`
  font-size: 16px;
  font-family: 'Lato-SemiBold';
  margin-top: 10px;
`;

const Button = styled.button`
  border-radius: 20px;
  background-color: #7f5152;
  border: none;
  font-size: 16px;
  color: #ffffff;
  font-family: 'Lato-Light';
  padding: 10px 30px;
`;

const StyledInputMask = styled(InputMask)`
  font-family: Lato-Regular;
  font-size: 16px;
  text-align: left;
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      messenger: 'whatsapp',
      model: 'iPhone 5/5S/5SE',
      woodType: 'light',
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    return (
      <DetailsFormWrapper>
        <H3>Наш оператор свяжется с вами, чтобы обсудить детали макета</H3>
        <label>
          <span>Номер телефона</span>
          <StyledInputMask
            name="phone"
            mask="+7 (999) 999-99-99"
            placeholder="+7"
            onChange={this.handleChangeForm}
          />
        </label>
        <label htmlFor="firstName">
          <span>Какой способ связи удобнее?</span>
          <Dropdown name="messenger" onChange={this.handleChangeForm}>
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
            <option value="viber">Viber</option>
          </Dropdown>
        </label>

        <H4>Детали товара</H4>
        <label>
          <span>Устройство</span>
          <Dropdown name="model" onChange={this.handleChangeForm}>
            <option value="iPhone 5/5S/5SE">iPhone 5/5S/5SE</option>
            <option value="iPhone 6/6S">iPhone 6/6S</option>
            <option value="iPhone 6 PLUS/6S PLUS">iPhone 6 PLUS/6S PLUS</option>
            <option value="iPhone 7">iPhone 7</option>
            <option value="iPhone 7PLUS">iPhone 7PLUS</option>
          </Dropdown>
        </label>
        <label>
          <span>Материал для чехла</span>
          <Dropdown name="woodType" onChange={this.handleChangeForm}>
            <option value="light">Светлое дерево</option>
            <option value="dark">Темное дерево</option>
          </Dropdown>
        </label>

        <Button onClick={event => (this.props.handleSendForm(event, this.state))}>
          Получить макет
        </Button>
      </DetailsFormWrapper>
    );
  }
}
