import React, {Component} from 'react';
import styled from 'styled-components';
import arrowCollapse from './faq-collapse.svg'
import arrowExpand from './faq-expand.svg'

const SectionWrapper = styled.section`
  text-align: left;
  background-color: ${props => props.isActive ? '#fff' : 'inherit'};
  border-bottom: ${props => props.isActive ? 'none' : '1px solid #e7eef3'};
  padding: 20px;
`;

const Question = styled.h4`
  color: #7f5152;
  font-family: 'Lato-Bold';
  font-size: 20px;
  margin-bottom: 15px;
`;

const Answer = styled.section`
  color: #80909c;
  font-family: 'Lato-Regular';
  font-size: 16px;
  line-height: 22px;
  display: ${props => props.isActive ? 'block' : 'none'};
`;

const Arrow = styled.img`
  width: 15px;
  height: 15px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive,
    }));
  }

  render() {
    return (
      <SectionWrapper isActive={this.state.isActive}>
        <Header onClick={this.handleClick}>
            <Question>{this.props.question}</Question>
            <Arrow src={this.state.isActive ? arrowCollapse : arrowExpand} />
        </Header>
        <Answer isActive={this.state.isActive}>
          {this.props.answer}
        </Answer>
      </SectionWrapper>
    );
  }
}
