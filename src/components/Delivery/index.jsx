import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import Banner from './Banner';
import Details from './Details';

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

export default () => (
  <Wrapper>
    <Helmet>
      <title>Доставка | Деревянные чехлы для iPhone Casewood</title>
      <meta
        name="description"
        content="Осуществляем доставку по всей планете!
        Мы подберем для вас оптимальный вариант доставвки."
      />
    </Helmet>
    <Header />
    <Banner />
    <Details />
    <Footer />
  </Wrapper>
);
