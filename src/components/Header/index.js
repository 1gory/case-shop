import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import Menu from './Menu';
import { CSSTransitionGroup } from 'react-transition-group';
import './styles.css';
import Basklogo from './basklogo.svg'

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

const Basklist = styled.div`
  border-radius: 21px;
  background-color: #ebebeb;
  padding: 15px;



`;
const Basklistlogo = styled.img`
  width: 16px;
  float: left;
  margin-left: 27px;

`;
const Basklisttext = styled.div`
  font-family: Lato-Regular, sans-serif;
  font-size: 16px;
  text-align: left;
  color: #222222;
  margin-left: 50px;
`;

const items = () => (
  <div>
    I'm a Kat
  </div>
);

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
    console.log('test test test test tes!');
  }

  render(){
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} alt="casewood"/>
          <Hamburger onClick={this.handleClick} src={hamburger} alt="menu"/>
        </Header>
      <Basklist>
        <Basklistlogo src={Basklogo}/>
        <Basklisttext>1 товар - 1000 рублей</Basklisttext>
      </Basklist>
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
