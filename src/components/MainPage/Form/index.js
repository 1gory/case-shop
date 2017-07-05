import React from 'react';
import styled from 'styled-components';
import skip from './skip-to-form.svg';

const Wrapper = styled.div`
  text-align: center;
  padding: 30px 15px;
`;

const SkipArrow = styled.img`
  display: inline-block;
  margin-bottom: 30px;
  width: 40px;
`;

const Form = styled.div`
  padding: 30px 15px;
  background-color: #f3f3f3;
  padding: 30px 15px;
`;

const FileForm = styled.form`
  padding: 40px 30px;
  background-color: #ebebeb;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);

  & input {
    width: 100%;
    border-radius: 20px;
    border: solid 1px #cccccc;
    background: none;
    padding: 10px 20px;
    color: rgba(74, 74, 74, 0.5);
    box-sizing: border-box;
  }
`;

const DetailsForm = styled.form`
  padding: 40px 25px 10px 25px;
  color: #4a4a4a;

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
    color: rgba(74, 74, 74, 0.5);
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

const ChoseInputTitle = styled.div`
  padding: 30px 0;
  color: #4a4a4a;
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

const FileLabel = styled.label`
  padding: 10px;
  font-size: 22px;
  color: white;
  background-color: #3b3b3b;
  display: inline-block;
  cursor: pointer;
  font-family: 'Lato-Light';
  font-size: 16px;
  width: 100%;
  text-align: left;
  border-radius: 20px;
  padding: 10px 20px;
  box-sizing: border-box;

  & input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`;

export default () => (
  <Wrapper>
    <SkipArrow src={skip} alt=''/>
    <Form>
      <FileForm>
        <FileLabel>
          Выберите файл..
          <input type='file'/>
        </FileLabel>
        <ChoseInputTitle>или вставьте ссылку</ChoseInputTitle>
        <input type='text'/>
      </FileForm>

      <DetailsForm>
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
      </DetailsForm>

      <Button>Получить макет</Button>
    </Form>
  </Wrapper>
);
