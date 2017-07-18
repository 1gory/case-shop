import React, {Component} from 'react';
import styled from 'styled-components';
import FeedbackForm from './FeedbackForm';
import FeedbackFail from './FeedbackFail';
import FeedbackSuccess from './FeedbackSuccess';

const Wrapper = styled.div`
  background-color: #3b3b3b;
  color: #fff;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export default class extends Component {
  render () {
    return (
      <Wrapper>
        <FeedbackForm/>
      </Wrapper>
    );
  }
};
