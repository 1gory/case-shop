import React, { Component } from 'react';
import styled from 'styled-components';
import modalClose from '../../../../icons/modal-close.svg';
import Popup from '../../../generic/Popup';
import validatePhone from '../../../../functions/validatePhone';
import SentState from './Sent';
import Form from './Details';

const WrapperH3 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const StyledImg = styled.img`
  width: 13px;
  height: 13px;
  padding-top: 5px;
`;

export default class extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSend = this.handleSend.bind(this);
    this.newMessage = this.newMessage.bind(this);
  }

  newMessage(event) {
    event.preventDefault();
    this.setState({
      isSent: false,
    });
  }

  handleSend(event, formData) {
    event.preventDefault();
    if (!formData.phone || !(validatePhone(formData.phone))) {
      this.setState({
        invalidNumber: true,
      });
      return;
    }
    fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    }).then(async (data) => {
      const response = await data.json();
      if (response.status) {
        this.setState({
          isSent: true,
        });
      }
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <Popup isOpened={this.props.isOpened}>
        {/* TODO move to component */}
        <WrapperH3>
          <H3>{this.props.header}</H3>
          <StyledImg onClick={this.props.handleClose} src={modalClose} />
        </WrapperH3>
        {/* ====================== */}
        {this.state.isSent ?
          <SentState handleClick={this.newMessage} /> :
          <Form handleSend={this.handleSend} invalidNumber={this.state.invalidNumber} />
        }
      </Popup>
    );
  }
}
