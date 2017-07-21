/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import SectionComponent from './Section';

const Wrapper = styled.div`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 40px;
`;

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
  color: #4a4a4a;
`;

const Sections = styled.div`
  margin: 45px 15px 20px 15px;
`;

export default () => (
  <Wrapper>
    <H2>FAQ</H2>
    <Sections>
      <SectionComponent
        question="Как сделать заказ"
        answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <SectionComponent
        question="Макет чехла"
        answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dent, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <SectionComponent
        question="Доставка и оплата"
        answer="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </Sections>
  </Wrapper>
);
