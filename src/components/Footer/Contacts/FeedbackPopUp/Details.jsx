import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import styled from 'styled-components';
import MessageInput from '../../../generic/Form/MessageInput';

const Form = styled.form`
  padding-top: 15px;
  & input, textarea {
    border: 1px solid #cccccc;
    border-radius: 20px;
    padding: 8px 15px;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Lato-Regular';
    color: #4a4a4a;
  }
`;

const SendButton = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #3b3b3b;
  color: #ffffff;
  font-family: 'Lato-Regular';
  padding: 10px 50px;
  margin: 30px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const StyledInputMask = styled(InputMask)`
  font-family: Lato-Regular;
  font-size: 16px;
  background: ${props => (props.invalidNumber ? '#ffd4d4' : 'initial')} !important;
`;

const H4 = styled.h4`
  font-size: 16px;
  color: #4a4a4a;
  padding: 15px 10px 10px 15px;
  margin: 0;
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
      (
        <Form>
          <H4>Номер телефона (для связи)</H4>
          <StyledInputMask
            mask="+7 (999) 999-99-99"
            placeholder="+7"
            name="phone"
            onChange={this.handleChangeForm}
            invalidNumber={this.props.invalidNumber}
            type="phone"
          />
          <H4>Сообщение</H4>
          <MessageInput
            handleChangeForm={this.handleChangeForm}
            placeholder="Введите сообщение..."
            rows="5"
          />
          <ButtonWrapper>
            <SendButton
              onClick={event => (this.props.handleSend(event, this.state))}
            >
              Отправить
            </SendButton>
          </ButtonWrapper>
        </Form>
      )
    );
  }
}
