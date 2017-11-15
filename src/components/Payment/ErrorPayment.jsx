import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../generic/Icons/logo.svg';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H3 = styled.h3`
    color: firebrick;
`;

const MessageWrappre = styled.div`
  text-align: center;
`;

const Message = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 115px;
`;

const LinkWrapper = styled.div`
  padding-top: 35px;
`;

export default () => (
  <Wrapper>
    <MessageWrappre>
      <H3>Ошибка! Что-то пошло не так!</H3>
      <Message>Свяжитесь с нами и мы поможем решить любую проблему!</Message>
      <LinkWrapper>
        <Link to="/">
          <Logo src={logo} alt="CASEWOOD" />
        </Link>
      </LinkWrapper>
    </MessageWrappre>
  </Wrapper>
);
