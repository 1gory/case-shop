import React, {Component} from 'react';
import styled from 'styled-components';
import dropdown from './dropdown.svg';

const Select = styled.select`
  width: 100%;
  border-radius: 20px;
  border: solid 1px #cccccc;
  background: none;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 20px;

  font-family: 'Lato-Regular';
  appearance: button;
  color: #4a4a4a;
`;

const Arrow = styled.img`
  width: 10px;
  position: absolute;
  top: 25px;
  right: 20px;
`;

const Wrapper = styled.div`
  position: relative;
`;

export default class extends Component {
  render(){
    return (
      <Wrapper>
        <Select>
          {this.props.children}
        </Select>
        <Arrow src={dropdown} alt=''/>
      </Wrapper>
    );
  }
}
