import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import Menu from './Menu';
// import RubleSign from '../RubleSign';
// import basketLogo from './basket-logo.svg';
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import './styles.css';

const Wrapper = styled.div`
  background-color: #f5f5f6;
`;

const HeaderWrapper = styled.div`
  padding: 15px;
`;

const Header = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
`;

const Hamburger = styled.img`
  width: 30px;
`;

const Logo = styled.img`
  width: 150px;
`;

// const BasketList = styled.div`
//   border-radius: 20px;
//   background-color: #ebebeb;
//   font-family: 'Lato-Regular';
//   font-size: 16px;
//   color: #222222;
//   display: flex;
//   align-items: center;
//   padding: 10px 30px;
//   margin-top: 15px;
// `;
//
// const BasketLogo = styled.img`
//   width: 15px;
//   padding-right: 15px;
// `;

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOpened: !state.isOpened,
    }));
  }

  render() {
    return (
      <Wrapper>
        <HeaderWrapper>
          <Header>
            <Link to="/">
              <Logo src={logo} alt="casewood" />
            </Link>
            <Hamburger onClick={this.handleClick} src={hamburger} alt="menu" />
          </Header>
          {/* <BasketList> */}
          {/* <BasketLogo src={basketLogo} /> */}
          {/* <span>1 товар - 1000<RubleSign /></span> */}
          {/* </BasketList> */}
        </HeaderWrapper>
        <CSSTransitionGroup
          transitionName="menu"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {this.state.isOpened && <Menu />}
        </CSSTransitionGroup>
      </Wrapper>
    );
  }
}
