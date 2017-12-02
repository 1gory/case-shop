/* eslint no-param-reassign: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';
import ReactPixel from 'react-facebook-pixel';
import ym from 'react-yandex-metrika';
import moment from 'moment';
import modalClose from '../../../../icons/modal-close.svg';
import Popup from '../../../generic/Popup';
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
    this.state = {
      isSent: false,
    };

    this.handleSendForm = this.handleSendForm.bind(this);
    this.newOrder = this.newOrder.bind(this);
  }

  newOrder(event) {
    event.preventDefault();
    this.setState({
      isSent: false,
    });
  }

  handleSendForm(formData) {
    ReactPixel.track('Purchase', { value: 1290, currency: 'RUB' });
    ym('reachGoal', 'order');
    formData.timezoneOffset = moment().utcOffset();
    fetch('/api/order', {
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

  // TODO компонент дублируется
  render() {
    return (
      <Popup isOpened={this.props.isOpened}>
        {/* TODO move to component */}
        <WrapperH3>
          <H3>Детали заказа</H3>
          <StyledImg onClick={this.props.handleClose} src={modalClose} />
        </WrapperH3>
        {/* ====================== */}
        {this.state.isSent ?
          <SentState handleClick={this.newOrder} /> :
          <Form handleSendForm={this.handleSendForm} />
        }
      </Popup>
    );
  }
}
