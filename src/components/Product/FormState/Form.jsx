import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { Model, Material, PhoneNumber, CustomerName } from '../../generic/ProductDetails';
import OrderButton from '../../generic/Form/Buttons/PrimaryButton';
import validatePhone from '../../../functions/validatePhone';

const OrderForm = styled.form`
  padding-top: 45px;
`;

const StyledOrderButton = styled(OrderButton)`
  background-color: ${({ disabled }) => (disabled ? '#c1999a' : '#7f5152')};
`;

const OrderButtonWrapper = styled.div`
  padding-top: 25px;
  text-align: center;
`;

export default class extends Component {
  constructor() {
    super();
    this.state = {
      messenger: 'whatsapp',
      model: 'iPhone 5/5S/SE',
      material: 'light',
    };
    this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  componentDidMount() {
    this.cookies = new Cookies();
    this.cookies.remove('imageUrl', { path: '/' });
  }

  handleChangeForm(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  disableForm() {
    this.setState({
      disabled: true,
    });
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

  render() {
    return (
      <OrderForm>
        <Model handleChangeForm={this.handleChangeForm} />
        <Material handleChangeForm={this.handleChangeForm} />
        {/* <Messenger handleChangeForm={this.handleChangeForm} /> */}
        <PhoneNumber
          handleChangeForm={this.handleChangeForm}
          invalidNumber={this.state.invalidNumber}
        />
        <CustomerName handleChangeForm={this.handleChangeForm} />
        <OrderButtonWrapper>
          <StyledOrderButton
            disabled={this.state.disabled}
            onClick={(event) => {
              event.preventDefault();
              if (this.checkPhone(this.state)) {
                this.disableForm();
                this.props.handleSendForm(this.state);
              }
            }}
          >
            Заказать
          </StyledOrderButton>
        </OrderButtonWrapper>
      </OrderForm>
    );
  }
}
