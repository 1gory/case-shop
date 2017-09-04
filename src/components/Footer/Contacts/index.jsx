/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import contactsEmail from './contact-email.svg';
import contactsPhone from './contact-phone.svg';
import contactsMessenger from './contact-messengers.svg';
import FeedbackPopUp from './FeedbackPopUp/index';
import Button from '../../generic/Form/Buttons/GhostButton';

const ContactsAnchor = Scroll.Element;

const Wrapper = styled.div`
  background-color: #3b3b3b;
  position: relative;
`;

const Contacts = styled.div`
  width: 250px;
  margin: 0 auto;
  padding: 15px;
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
`;

const ContactIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Label = styled.div`
  font-family: 'Lato-Bold';
  color: #9d9d9d;
  font-size: 12px;
  padding-bottom: 5px;
`;

const Info = styled.a`
  font-family: 'Lato-Light';
  font-size: 16px;
  color: #ffffff;
`;

const LeaveMessageButton = styled(Button)`
  margin: 15px;
`;

const Contact = props => (
  <ContactWrapper>
    <ContactIcon src={props.icon} />
    <div>
      <Label>{props.label}</Label>
      <Info href={props.href}>{props.info}</Info>
    </div>
  </ContactWrapper>
);

export default class extends Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      isOpened: true,
    });
  }

  handleClose() {
    this.setState({
      isOpened: false,
    });
  }

  render() {
    return (
      <Wrapper>
        <FeedbackPopUp
          isOpened={this.state.isOpened}
          handleClose={this.handleClose}
          header="Оставить сообщение"
        />
        <ContactsAnchor name="ContactsAnchor" />
        <Contacts>
          <Contact
            icon={contactsEmail}
            label="Email"
            info="casewod.store@gmail.com"
            href="mailto:casewod.store@gmail.com"
          />
          <Contact
            icon={contactsPhone}
            label="Телефон для связи"
            info="8 (499) 409-08-18"
            href="tel:84994090818"
          />
          <Contact
            icon={contactsMessenger}
            label="WhatsApp, Viber, Telegram"
            info="+7 (925) 654-34-92"
            href="whatsapp://send?text=Здравствуйте!&phone=+79256543492"
          />
          <LeaveMessageButton onClick={this.handleOpen}>Оставить сообщение</LeaveMessageButton>
        </Contacts>
      </Wrapper>
    );
  }
}
