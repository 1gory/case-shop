import React, {Component} from 'react';
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
  render () {
    return (
      <div>
        <H3>Не можете определиться?</H3>
        <H4>Оставьте свой номер и мы с Вами свяжемся!</H4>
        <Form>
          <input placeholder='Имя' type='text'/>
          <StyledInputMask mask='+7 (999) 999-99-99' placeholder='Телефон'/>
          <button>Отправить</button>
        </Form>
      </div>
    )
  }
}
