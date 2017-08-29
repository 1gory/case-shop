import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import Scroll from 'react-scroll';
import skip from './skip-to-form.svg';
import DetailsForm from './Details';
import validatePhone from '../../../functions/validatePhone';
import './styles.css';

import UpoadFileForm from '../../generic/UploadFileForm';

const Wrapper = styled.div`
  text-align: center;
  padding: 30px 15px;
`;

const SkipArrow = styled.img`
  display: inline-block;
  margin-bottom: 30px;
  width: 40px;
`;

const Form = styled.div`
  padding: 30px 15px;
  background-color: #f3f3f3;
  border-radius: 4px;
`;

const FileFormAnchor = Scroll.Element;

const EMPTY_FORM_STATUS = 'empty';
const SENT_FORM_STATUS = 'sent';
const ERROR_FORM_STATUS = 'error';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
      fileFormStatus: EMPTY_FORM_STATUS,
    };

    this.handleSendForm = this.handleSendForm.bind(this);
    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  expand() {
    this.setState({
      isOpened: true,
    });
  }

  collapse() {
    this.setState({
      isOpened: true,
    });
  }

  handleSendForm(event, formData) {
    event.preventDefault();
    if (!formData.phone || !(validatePhone(formData.phone))) {
      return;
    }

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
          fileFormStatus: SENT_FORM_STATUS,
          isOpened: false,
        });
      }
    }).catch((/* error */) => {
      this.setState({
        fileFormStatus: ERROR_FORM_STATUS,
      });
    });
  }

  render() {
    return (
      <Wrapper>
        <FileFormAnchor name="FileFormAnchor" />
        <SkipArrow src={skip} alt="" />
        <Form>
          <UpoadFileForm expand={this.expand} collapse={this.collapse} />

          <CSSTransitionGroup
            transitionName="detalis"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {this.state.isOpened && <DetailsForm handleSendForm={this.handleSendForm} />}
          </CSSTransitionGroup>
        </Form>
      </Wrapper>
    );
  }
}
