import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import Menu from './Menu';
import { CSSTransitionGroup } from 'react-transition-group';
import './styles.css';
import Basklogo from './basket-logo.svg'
import RubleSign from '../MainPage/RubleSign'

const Wrapper = styled.div`
`;

const Header = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 15px;
`;

const Hamburger = styled.img`
  width: 30px;
`;

const Logo = styled.img`
  width: 150px;
`;

const BasketList = styled.div`
  border-radius: 20px;
  background-color: #ebebeb;
  padding: 10px 30px;
  margin: 15px;
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #222222;
`;

const BasketLogo = styled.img`
  width: 15px;
  padding-right: 15px;
`;

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      isOpened: !state.isOpened,
    }));
  }

  render(){
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt="casewood"/>
          <Hamburger onClick={this.handleClick} src={hamburger} alt="menu"/>
        </Header>
      <BasketList>
        <BasketLogo src={Basklogo}/>
        1 товар - 1000<RubleSign>₽</RubleSign>
      </BasketList>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
          >
          {this.state.isOpened && <Menu />}
        </CSSTransitionGroup>
      </Wrapper>
    );
  }
}
