import React, { Component } from 'react';
import styled from 'styled-components';
import { Model, Material, Messenger, PhoneNumber } from '../../../generic/ProductDetails';

const H4 = styled.h4`
  font-size: 16px;
  color: #4a4a4a;
  padding: 0 0 0 15px;
  margin-bottom: 10px;
`;

const SendButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #3b3b3b;
  color: #ffffff;
  font-family: 'Lato-Regular';
  padding: 10px 50px;
  margin: 20px;
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      messenger: 'whatsapp',
      model: 'iPhone 4/4S',
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
      (
        <div>
          <Messenger handleChangeForm={this.handleChangeForm} />
          <PhoneNumber
            handleChangeForm={this.handleChangeForm}
            invalidNumber={this.props.invalidNumber}
          />

          <H4>Детали товара</H4>
          <Model handleChangeForm={this.handleChangeForm} />
          <Material handleChangeForm={this.handleChangeForm} />

          <SendButton onClick={event => (this.props.handleSendForm(event, this.state))}>
            Заказать
          </SendButton>
        </div>
      )
    );
  }
}
