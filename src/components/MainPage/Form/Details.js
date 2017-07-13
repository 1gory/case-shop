import React, {Component} from 'react';
import styled from 'styled-components';

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
  render () {
    return (
      <DetailsFormWrapper>
        <H3>Наш оператор свяжется с вами, чтобы обсудить детали макета</H3>
        <label>
          <span>Номер телефона</span>
          <input type='text'/>
        </label>
        <label>
          <span>Какой способ связи удобнее?</span>
          <input type='text'/>
        </label>

        <H4>Детали товара</H4>
        <label>
          <span>Устройство</span>
          <input type='text'/>
        </label>
        <label>
          <span>Материал для чехла</span>
          <input type='text'/>
        </label>

        <Button>Получить макет</Button>
      </DetailsFormWrapper>
    )
  }
}
