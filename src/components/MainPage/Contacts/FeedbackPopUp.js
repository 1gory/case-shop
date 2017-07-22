import React from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import modalclose from './modal-close.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const PopupForm = styled.div`
  padding: 30px;
  font-family: 'Lato-Regular';
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
  width: 350px;
`;

const WrapperH3 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const StyledImg = styled.img`
  width: 13px;
  height: 13px;
  padding-top: 5px;
`;

const H4 = styled.h4`
  font-size: 16px;
  color: #4a4a4a;
  padding: 15px 0 0 15px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  padding-top: 25px;
  & input, textarea {
    border: 2px solid #cccccc;
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
`;

const InputMessage = styled.textarea`
  height: 125px;
  resize: none;
  padding-top: 10px;
`;

export default () => (
  <Wrapper>
    <PopupForm>
      <WrapperH3>
        <H3>Оставить сообщение</H3>
        <StyledImg src={modalclose}/>
      </WrapperH3>
      <Form>
        <H4>Номер телефона (для связи)</H4>
        <StyledInputMask mask='+7 (999) 999-99-99' placeholder='+7'/>
        <H4>Сообщение</H4>
        <InputMessage placeholder='Введите сообщение...' type='text' height='135'/>
        <ButtonWrapper>
          <SendButton>Отправить</SendButton>
        </ButtonWrapper>
      </Form>
    </PopupForm>
  </Wrapper>
);
