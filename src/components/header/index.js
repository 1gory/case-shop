import React from 'react';
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    height: 40px;
    justify-content: space-between;
    padding: 20px;
`;

const Hamburger = styled.img`
   width: 50px;
`;

const Logo = styled.img`
    width: 180px;   
`;

export default () => (
    <Wrapper>
        <Logo src={logo} alt="casewood"/>
        <Hamburger src={hamburger} alt="menu"/>
    </Wrapper>
)