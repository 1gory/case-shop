import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  z-index: 2;
`;

const Links = styled.div`
  box-sizing: border-box;
  padding: 15px;
  background-color: #f2f2f2;
`;

const MenuLink = styled(Link)`
  display: block;
  padding-bottom: 15px;
  padding-top: 15px;
  text-decoration: none;
  color: black;
  font-family: 'Lato-Regular';
`;

export default props => (
  <Wrapper>
    <Links>
      <MenuLink to="/catalog">Работы</MenuLink>
      <MenuLink to="">Доставка</MenuLink>
      <MenuLink to="">Контакты</MenuLink>
      <MenuLink to="">Сотрудничество</MenuLink>
    </Links>
  </Wrapper>
);
