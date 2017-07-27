import React, { Component } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

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
    font-size: 16px;
  }

  & input {
    background-color: #585858;
    color: #fff;
  }

  & button {
    background-color: #fff;
    color: #3b3b3b;
  }

  & input::placeholder {
    color: #9e9e9e;
  }
`;

const StyledInputMask = styled(InputMask)`
  font-family: Lato-Regular;
  font-size: 16px;
  text-align: left;
`;

export default class extends Component {

  constructor() {
    super();
    this.state = {};
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChangeForm(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <H3>Не можете определиться?</H3>
        <H4>Оставьте свой номер и мы с Вами свяжемся!</H4>
        <Form>
          <input
            onChange={this.handleChangeForm}
            placeholder="Имя"
            type="text"
            name="name"
          />
          <StyledInputMask
            onChange={this.handleChangeForm}
            mask="+7 (999) 999-99-99"
            placeholder="Телефон"
            name="phone"
          />
          <button onClick={e => (this.props.handleSend(e, this.state))}>Отправить</button>
        </Form>
      </div>
    );
  }
}

