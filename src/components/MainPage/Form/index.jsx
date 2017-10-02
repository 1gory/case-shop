/* eslint-disable no-param-reassign */

import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import Cookies from 'universal-cookie';
import Scroll from 'react-scroll';
import skip from './skip-to-form.svg';
import DetailsForm from './Details';
import validatePhone from '../../../functions/validatePhone';
import './styles.css';

import UpoadFileForm from '../../generic/UploadFileForm';
import SentFileForm from '../../generic/UploadFileForm/State/Sent';

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
const scroller = Scroll.scroller;

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
    this.newOrder = this.newOrder.bind(this);
    this.expand = this.expand.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  componentDidMount() {
    this.cookies = new Cookies();
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

  newOrder() {
    this.setState({
      fileFormStatus: EMPTY_FORM_STATUS,
      isOpened: true,
    });
  }

  handleSendForm(event, formData) {
    event.preventDefault();
    if (!formData.phone || !(validatePhone(formData.phone))) {
      this.setState({
        invalidNumber: true,
      });
      return;
    }
    formData.image = this.cookies.get('imageUrl');
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
    }).then(() => (
      scroller.scrollTo('FileFormAnchor', {
        duration: 800,
        delay: 0,
        smooth: true,
      })
    ));
  }

  render() {
    return (
      <Wrapper>
        <FileFormAnchor name="FileFormAnchor" />
        <SkipArrow src={skip} alt="" />
        <Form>
          {this.state.fileFormStatus === SENT_FORM_STATUS ?
            <SentFileForm handleClick={this.newOrder} /> :
            <UpoadFileForm
              expand={this.expand}
              collapse={this.collapse}
            /> }

          <CSSTransitionGroup
            transitionName="detalis"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {this.state.isOpened &&
              <DetailsForm
                handleSendForm={this.handleSendForm}
                invalidNumber={this.state.invalidNumber}
              />
            }
          </CSSTransitionGroup>
        </Form>
      </Wrapper>
    );
  }
}
