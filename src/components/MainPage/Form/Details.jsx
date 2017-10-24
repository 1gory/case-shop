/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { Model, Material, Messenger, PhoneNumber } from '../../generic/ProductDetails';
import Button from '../../generic/Form/Buttons/PrimaryButton';
import validatePhone from '../../../functions/validatePhone';

const DetailsFormWrapper = styled.form`
  padding: 40px 25px 10px 25px;
  color: #4a4a4a;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

const H3 = styled.h3`
  font-size: 16px;
  font-family: 'Lato-Regular';
  margin-bottom: 30px;
`;

const H4 = styled.h4`
  font-size: 16px;
  font-family: 'Lato-Regular';
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 18px;
  background-color: ${({ disabled }) => (disabled ? '#c1999a' : '#7f5152')};
`;


export default class extends Component {
  constructor() {
    super();

    this.state = {
      messenger: 'whatsapp',
      model: 'iPhone 4/4S',
      material: 'light',
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.disableForm = this.disableForm.bind(this);
    this.checkPhone = this.checkPhone.bind(this);
    this.handleOpenSubMunu = this.handleOpenSubMunu.bind(this);
  }

  checkPhone(formData) {
    if (!formData.phone || !(validatePhone(formData.phone))) {
      this.setState({
        invalidNumber: true,
      });
      return false;
    }
    return true;
  }

  disableForm() {
    this.setState({
      disabled: true,
    });
  }

  handleOpenSubMunu() {
    this.setState({
      subMenuIsOpened: true,
    });
  }

  async handleChangeForm(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    await this.setState(state);
  }

  render() {
    return (
      <DetailsFormWrapper>
        <H3>Наш оператор свяжется с вами, чтобы обсудить детали макета</H3>
        <Messenger handleChangeForm={this.handleChangeForm} />
        <PhoneNumber
          handleChangeForm={async (e) => {
            await this.handleChangeForm(e);
            if (this.state.phone && validatePhone(this.state.phone)) {
              this.setState({ subMenuIsOpened: true });
            }
          }}
          invalidNumber={this.state.invalidNumber}
        />

        <CSSTransitionGroup
          transitionName="details"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {this.state.subMenuIsOpened &&
            <div>
              <H4>Детали товара</H4>
              <Model handleChangeForm={this.handleChangeForm} />
              <Material handleChangeForm={this.handleChangeForm} />
            </div>
          }
        </CSSTransitionGroup>

        <StyledButton
          onClick={(event) => {
            event.preventDefault();
            if (this.checkPhone(this.state)) {
              this.disableForm();
              this.props.handleSendForm(this.state);
            }
          }}
          disabled={this.state.disabled}
        >
          Заказать
        </StyledButton>
      </DetailsFormWrapper>
    );
  }
}
