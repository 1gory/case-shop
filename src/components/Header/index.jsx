import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactPixel from 'react-facebook-pixel';
import { CSSTransitionGroup } from 'react-transition-group';
import Mertika from '../generic/YandexMetrika';
import MenuList from './Menu';
// import RubleSign from '../RubleSign';
// import basketLogo from './basket-logo.svg';
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import './styles.css';

ReactPixel.init('179889939225358');
ReactPixel.pageView();

const Wrapper = styled.div`
  background-color: #f5f5f6;
`;

const HeaderWrapper = styled.div`
  padding: 15px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 25px;
  }
`;

const Header = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    width: 100%;
    max-width: 970px;
  }
`;

const Hamburger = styled.img`
  width: 30px;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const MobileMenu = styled.div`
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
   display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
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
        <Mertika />
        <HeaderWrapper>
          <Header>
            <Link to="/">
              <Logo src={logo} alt="CASEWOOD" />
            </Link>
            <Menu>
              <MenuList />
            </Menu>
            <Hamburger onClick={this.handleClick} src={hamburger} alt="menu" />
          </Header>
          {/* <BasketList> */}
          {/* <BasketLogo src={basketLogo} /> */}
          {/* <span>1 товар - 1000<RubleSign /></span> */}
          {/* </BasketList> */}
        </HeaderWrapper>
        <MobileMenu>
          <CSSTransitionGroup
            transitionName="menu"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {this.state.isOpened && <MenuList />}
          </CSSTransitionGroup>
        </MobileMenu>
      </Wrapper>
    );
  }
}
