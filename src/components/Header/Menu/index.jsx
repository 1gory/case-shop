import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  z-index: 2;
  
  @media (min-width: 768px) {
    width: auto;
    position: relative;
  }
`;

const Links = styled.div`
  box-sizing: border-box;
  padding: 15px;
  background-color: #f2f2f2;
  
  @media (min-width: 768px) {
    background-color: #f5f5f6;
    padding: 0;
  }
`;

const MenuLink = styled(Link)`
  display: ${({ onlyDesktop }) => (onlyDesktop ? 'none' : 'block')};
  padding-bottom: 15px;
  padding-top: 15px;
  text-decoration: none;
  color: #222222;
  font-family: 'Lato-Regular';
  
  @media (min-width: 768px) {
    display: inline-block;
    padding-left: 25px;
  }
`;

export default () => (
  <Wrapper>
    <Links>
      <MenuLink to="/">Главная</MenuLink>
      <MenuLink to="/gallery">Галерея</MenuLink>
      <MenuLink to="/catalog">Каталог</MenuLink>
      <MenuLink to="/cooperation" onlyDesktop>Сотрудничество</MenuLink>
      <MenuLink to="/delivery">Доставка</MenuLink>
      <MenuLink to="/about">О компании</MenuLink>
      {/* <MenuLink to="">Контакты</MenuLink> */}
    </Links>
  </Wrapper>
);
