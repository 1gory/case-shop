/* eslint-disable no-param-reassign */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import TransparentButton from '../generic/Form/Buttons/TransparentButton';

const MainPageButton = TransparentButton.withComponent(Link);

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 140px 0;
  text-align: center;
`;

const Message = styled.h3`
  color: red;
  font-family: 'Lato-Regular';
  font-size: 16px;
  font-weight: normal;
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
          К сожалению, интернет-магазин временно не работает.
          Для связи с администрацией пишите info@casewood.ru
        </Message>
        <MainPageButton to="/">Вернуться на главную</MainPageButton>
      </Wrapper>
    </div>
    <Footer />
  </div>
);
