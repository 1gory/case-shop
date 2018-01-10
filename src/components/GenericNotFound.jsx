/* eslint-disable no-param-reassign */

import React from 'react';
import styled from 'styled-components';
import Header from './Header/index';
import Footer from './Footer/index';

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

const H1 = styled.h1`
  text-align: center;
`;

export default ({ staticContext }) => {
  if (staticContext) {
    staticContext.status = 404;
  }

  return (<Wrapper>
    <Header />
    <H1>Страница не найдена</H1>
    <Footer />
  </Wrapper>);
};
