/* eslint-disable no-param-reassign */

import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import Button from '../generic/Form/Buttons/TransparentButton';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 140px 0;
  text-align: center;
`;

const RedText = styled.div`
  color: red;
`;

const Message = styled.h3`
  font-family: 'Lato-Regular';
  font-size: 16px;
  font-weight: normal;
`;

const Price = styled.div`
  font-size: 22px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledButton = styled(Button)`
  color: green;
  border: 1px solid green;
  margin-top: 0;
  
   &:hover {
    border: solid 1px #fff;
    background: #59cb78;  
    color: #fff; 
  }
`;

export default () => (
  <div>
    <Helmet>
      <title>Спасибо! | Деревянные чехлы для iPhone Casewood</title>
    </Helmet>
    <Header />
    <div>
      <Wrapper>
        <Message>
          <RedText>К сожалению, интернет-магазин закрыт</RedText><br /> но вы можете заказать<br />
          деревянный чехол без граврировки<br /> всего за <br /><Price>490р</Price>
        </Message>
        <a href="https://api.whatsapp.com/send?phone=79162282456"><StyledButton>Заказать</StyledButton></a>
        <br />
        <br />
        <br />
        <span>Для связи с администрацией пишите info@casewood.ru</span>
      </Wrapper>
    </div>
    <Footer />
  </div>
);
