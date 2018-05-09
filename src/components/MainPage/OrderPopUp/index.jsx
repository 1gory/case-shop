/* eslint no-param-reassign: 0 */

import React from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import ym from 'react-yandex-metrika';
import moment from 'moment';
import modalClose from '../../../icons/modal-close.svg';
import Popup from '../../generic/Popup/index';
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

const handleSendForm = (formData) => {
  ReactPixel.trackCustom('trackOrder');
  ReactPixel.track('Purchase', { value: '1290.00', currency: 'RUB' });
  ym('reachGoal', 'order');
  ReactGA.event({ category: 'order_category', action: 'order' });
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
      window.location = '/checkout';
    }
  }).catch((e) => {
    console.log(e);
  });
};

export default props => (
  <Popup isOpened={props.isOpened}>
    {/* TODO move to component */}
    <WrapperH3>
      <H3>Детали заказа</H3>
      <StyledImg onClick={props.handleClose} src={modalClose} />
    </WrapperH3>
    <Form handleSendForm={handleSendForm} />
  </Popup>
);
