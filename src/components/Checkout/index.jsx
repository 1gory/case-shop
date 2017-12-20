/* eslint-disable no-param-reassign */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  color: #59cb78;
  font-family: 'Lato-Regular';
  font-size: 16px;
  font-weight: normal;
`;

export default () => (
  <div>
    <Header />
    <div>
      <Wrapper>
        <Message>
          Спасибо! <br /> Мы свяжемся с вами как можно скорее.
        </Message>
        <MainPageButton to="/">Вернуться на главную</MainPageButton>
      </Wrapper>
    </div>
    <Footer />
  </div>
);
