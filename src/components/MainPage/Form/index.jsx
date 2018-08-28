/* eslint-disable no-param-reassign */

import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactGA from 'react-ga';
import ym from 'react-yandex-metrika';
import Cookies from 'universal-cookie';
import ReactPixel from 'react-facebook-pixel';
import Scroll from 'react-scroll';
import skip from './skip-to-form.svg';
import DetailsForm from './Details';
import './styles.css';

import UpoadFileForm from '../../generic/UploadFileForm';
import whatsappIcon from '../../generic/Icons/whatsapp.svg';
import telegramIcon from '../../generic/Icons/telegram.svg';
import SentFileForm from './State/Sent';
import Loading from './State/Loading';

const Wrapper = styled.div`
  text-align: center;
  padding: 30px 15px;
  
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 820px;
    padding: 85px 15px;
  }
`;

const SkipArrow = styled.img`
  display: inline-block;
  margin-bottom: 30px;
  width: 40px;
  
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Form = styled.div`
  padding: 30px 15px;
  background-color: #f3f3f3;
  border-radius: 4px;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`;

const FormWrapper = styled.div`
  ${({ render, errorss }) => (render &&
    `margin-left: ${(errorss ? '20%' : '-60px')};
    transition: margin 0.4s ease-in;
    transition-delay: ${(errorss ? '0.5s' : '0')};`)
  };
`;

const H2 = styled.h2`
  font-size: 23px;
  font-family: 'Lato-Light', sans-serif;
  padding: 30px 0;
`;

const SubHeader = styled.span`
  font-family: 'Lato-Regular', sans-serif;
`;

const MessengerImg = styled.img`
  width: 25px;
  vertical-align: middle;
  padding-bottom: 2px;
`;

const FileFormAnchor = Scroll.Element;
const scroller = Scroll.scroller;

const EMPTY_FORM_STATUS = 'empty';
const ERROR_FORM_STATUS = 'error';
const LOADING_FORM_STATUS = 'loading';

const checkWidth = () => typeof window !== 'undefined' && window.innerWidth > 768;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      isOpened: true,
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

  newOrder(event) {
    event.preventDefault();
    this.setState({
      fileFormStatus: EMPTY_FORM_STATUS,
      isOpened: true,
      secrets: false,
    });
  }

  handleSendForm(formData) {
    ReactPixel.trackCustom('trackOrder');
    ReactPixel.track('Lead');
    ym('reachGoal', 'order');
    ReactGA.event({ category: 'order_category', action: 'order' });
    scroller.scrollTo('FileFormAnchor', {
      duration: 800,
      delay: 0,
      smooth: true,
    });
    this.setState({
      isOpened: false,
      secrets: true,
      fileFormStatus: LOADING_FORM_STATUS,
    });
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
        window.location = '/checkout';
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
        <H2>
          Загрузите изображение<br />
          <SubHeader>
            мы бесплатно сделаем макет<br />
            и вышлем вам в <MessengerImg
              src={whatsappIcon}
              alt="вышлем в Whatsapp"
            /> или <MessengerImg
              src={telegramIcon}
              alt="вышлем в Telegram"
            />
          </SubHeader>
        </H2>
        <Form>
          {<FormWrapper errorss={this.state.secrets} render={checkWidth()}>
            {this.state.fileFormStatus === ERROR_FORM_STATUS &&
              <SentFileForm handleClick={this.newOrder} />
            }
            {this.state.fileFormStatus === LOADING_FORM_STATUS &&
              <Loading />
            }
            {this.state.fileFormStatus === EMPTY_FORM_STATUS &&
              <UpoadFileForm
                expand={this.expand}
                collapse={this.collapse}
              />
            }
          </FormWrapper>}
          <CSSTransitionGroup
            transitionName="details"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {this.state.isOpened && <DetailsForm handleSendForm={this.handleSendForm} /> }
          </CSSTransitionGroup>
        </Form>
      </Wrapper>
    );
  }
}
