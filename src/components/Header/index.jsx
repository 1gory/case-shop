import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ym from 'react-yandex-metrika';
import styled from 'styled-components';
import ReactPixel from 'react-facebook-pixel';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactGA from 'react-ga';
import YandexMetrica from '../generic/YandexMetrica';
import MenuList from './Menu';
import logo from '../generic/Icons/logo.svg';
import logoInsta from '../generic/Icons/contact-social-insta.svg';
import logoVk from '../generic/Icons/contact-social-vk.svg';
import hamburger from './hamburger.svg';
import './styles.css';

ReactGA.initialize('UA-112805996-1');

if (typeof window !== 'undefined') {
  ReactGA.pageview(window.location.pathname + window.location.search);
  ReactPixel.init('2004284103182141');
  ReactPixel.pageView();
}

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
  padding-right: 10px;
`;

const LogoSocial = styled.img`
  width: 30px;
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
        <YandexMetrica />
        {/* <Jivosite /> */}
        <HeaderWrapper>
          <Header>
            <div>
              <Link to="/">
                <Logo src={logo} alt="CASEWOOD" />
              </Link>
              <noindex>
                <a
                  href="https://instagram.com/casewood.ru/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  onClick={() => (ym('reachGoal', 'gotoinstagram'))}
                >
                  <LogoSocial src={logoInsta} alt="CASEWOOD Instagram" />
                </a>
              </noindex>
              <noindex>
                <a
                  href="https://vk.com/casewoodru"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  onClick={() => (ym('reachGoal', 'gotovk'))}
                >
                  <LogoSocial src={logoVk} alt="CASEWOOD VK" />
                </a>
              </noindex>
            </div>
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
