/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import contactsEmail from './contact-email.svg';
import contactsPhone from './contact-phone.svg';
import contactsMessenger from './contact-messengers.svg';
import FeedbackPopUp from './FeedbackPopUp/index';
import Button from '../../generic/Form/Buttons/GhostButton';
import logoBlock from './block-white.svg';

const ContactsAnchor = Scroll.Element;

const Wrapper = styled.div`
  background-color: #3b3b3b;
  position: relative;
`;

const ContactsWrapper = styled.div`
  padding: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    max-width: 970px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactWrapper = styled.div`
  width: 175px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

const ContactIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Label = styled.div`
  font-family: 'Lato-Regular';
  font-weight: bold;
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

const Logo = styled.img`
  display: none; 
 
  @media (min-width: 768px) {
    display: block;
    height: 50px;
    padding: 10px;
    opacity: 0.5;
  }
`;

const Contact = props => (
  <ContactWrapper>
    <ContactIcon src={props.icon} />
    <div>
      <Label>{props.label}</Label>
      <Info href={props.href} target="_blank" rel="noopener noreferrer">{props.info}</Info>
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
        <ContactsWrapper>
          <Contacts>
            <Logo src={logoBlock} />
            <Contact
              icon={contactsEmail}
              label="Email"
              info="store@casewood.ru"
              href="mailto:store@casewood.ru"
            />
            <Contact
              icon={contactsPhone}
              label="Телефон для связи"
              info="+7 (915) 284-23-84"
              href="https://api.whatsapp.com/send?text=Здравствуйте!&phone=+79152842384"
            />
            <Contact
              icon={contactsMessenger}
              label="WhatsApp, Telegram"
              info="+7 (915) 284-23-84"
              href="https://api.whatsapp.com/send?text=Здравствуйте!&phone=+79152842384"
            />
          </Contacts>
          <LeaveMessageButton onClick={this.handleOpen}>Оставить сообщение</LeaveMessageButton>
        </ContactsWrapper>
      </Wrapper>
    );
  }
}
