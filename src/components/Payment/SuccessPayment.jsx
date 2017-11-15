import React, { Component } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import logo from '../generic/Icons/logo.svg';

const Wrapper = styled.div`
  font-family: 'Lato-Regular';
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H3 = styled.h3`
    color: limegreen ;
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

export default class extends Component {
  constructor() {
    super();

    this.state = {
      customerNumber: '',
    };
  }

  async componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.state = {
      customerNumber: parsed.customerNumber,
    };
  }

  render() {
    return (
      <Wrapper>
        <MessageWrappre>
          <H3>Ваш платеж принят, спасибо!</H3>
          {this.state.customerNumber && <Message>
            Ваш заказ привязан к номеру мобильного телефона:
            <br /><br />
            <b>{this.state.customerNumber}</b>
          </Message>}
          <LinkWrapper>
            <Link to="/">
              <Logo src={logo} alt="CASEWOOD" />
            </Link>
          </LinkWrapper>
        </MessageWrappre>
      </Wrapper>
    );
  }
}
