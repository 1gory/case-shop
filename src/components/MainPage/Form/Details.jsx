/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Model, Material, Messenger, PhoneNumber } from '../../generic/ProductDetails';

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


export default class extends Component {
  constructor() {
    super();

    this.state = {
      messenger: 'whatsapp',
      model: 'iPhone 5/5S/5SE',
      material: 'light',
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
        <Messenger handleChangeForm={this.handleChangeForm} />
        <PhoneNumber handleChangeForm={this.handleChangeForm} />

        <H4>Детали товара</H4>
        <Model handleChangeForm={this.handleChangeForm} />
        <Material handleChangeForm={this.handleChangeForm} />

        <Button onClick={event => (this.props.handleSendForm(event, this.state))}>
          Получить макет
        </Button>
      </DetailsFormWrapper>
    );
  }
}
