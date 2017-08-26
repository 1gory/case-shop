import React, { Component } from 'react';
import styled from 'styled-components';
import FeedbackForm from './FeedbackForm';
import FeedbackFail from './FeedbackFail';
import FeedbackSuccess from './FeedbackSuccess';
import modalClose from '../../../icons/modal-close.svg';
import validatePhone from '../../../functions/validatePhone';

const Wrapper = styled.div`
  background-color: #3b3b3b;
  color: #fff;
  text-align: center;
  padding: 30px 0;
  position: relative;
`;

const CloseButton = styled.img`
  position: absolute;
  position: absolute;
  width: 15px;
  right: 40px;
  top: 40px;
`;

const STATUS_SUCCESS = 'success';
const STATUS_FAIL = 'fail';
const STATUS_EMPTY = 'empty';

export default class extends Component {

  constructor() {
    super();
    this.state = {
      status: STATUS_EMPTY,
    };
    this.handleSend = this.handleSend.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // TODO move sending to separated method
  handleSend(event, formData) {
    event.preventDefault();
    if (!formData.phone || !(validatePhone(formData.phone))) {
      this.setState({
        invalidNumber: true,
      });
      return;
    }
    if (!formData.name) {
      this.setState({
        invalidName: true,
      });
      return;
    }
    fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(async (data) => {
      const response = await data.json();
      if (response.status) {
        this.setState({
          status: STATUS_SUCCESS,
        });
      }
    }).catch((/* error */) => {
      this.setState({
        status: STATUS_FAIL,
      });
    });
  }

  handleClose() {
    this.setState({
      status: STATUS_EMPTY,
    });
  }

  render() {
    let form = '';
    switch (this.state.status) {
      case STATUS_SUCCESS:
        form = <FeedbackSuccess />;
        break;
      case STATUS_FAIL:
        form = <FeedbackFail />;
        break;
      default:
        form = (<FeedbackForm
          handleSend={this.handleSend}
          invalidNumber={this.state.invalidNumber}
          invalidName={this.state.invalidName}
        />);
    }
    return (
      <Wrapper>
        {(this.state.status === STATUS_SUCCESS || this.state.status === STATUS_FAIL)
          && <CloseButton src={modalClose} onClick={this.handleClose} /> }
        {form}
      </Wrapper>
    );
  }
}
