import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 15px;
    background-color: #f2f2f2;
    display: none;
`;

const MenuLink = styled(Link)`
    display: block;
    padding-bottom: 15px;
    padding-top: 15px;
    text-decoration: none;
    color: black;
    font-family: 'Lato-Regular';
`;

export default () => (
    <Wrapper>
        <MenuLink to="">Работы</MenuLink>
        <MenuLink to="">Доставка</MenuLink>
        <MenuLink to="">Контакты</MenuLink>
        <MenuLink to="">Сотрудничество</MenuLink>
    </Wrapper>
);
