import React, {Component} from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import Menu from './Menu';
import { CSSTransitionGroup } from 'react-transition-group';
import './styles.css';

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
