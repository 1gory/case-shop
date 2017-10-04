import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { Model, Material, PhoneNumber } from '../../generic/ProductDetails';
import ImageForm from '../../generic/UploadFileForm';
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

const IndividualCaseFormWrapper = styled.div`
  margin: 35px 0;
`;

const IndividualCaseForm = styled.div`
  padding: 60px 18px;
  text-align: center;
  background-color: #f3f3f3;
`;

const Message = styled.div`
  font-family: 'Lato-Regular';
  color: #222222;
  margin-bottom: 25px;
`;

const Button = styled.button`
  border-radius: 20px;
  border: solid 1px #222222;
  background: none;
  padding: 8px 30px;
  display: inline-block;
  font-family: 'Lato-Regular';
  font-size: 16px;
  text-decoration: none;
  color: #222222;
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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.cookies = new Cookies();
    this.cookies.remove('imageUrl', { path: '/' });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      individualCase: true,
    });
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

        <IndividualCaseFormWrapper>
          {this.state.individualCase &&
          <ImageForm />
          }
          {!this.state.individualCase &&
          <IndividualCaseForm>
            <Message>
              Если вы хотите создать свою<br /> гравировку, воспользуйтесь<br /> специальной формой:
            </Message>
            <Button onClick={this.handleClick}>
              Создать свою гравировку
            </Button>
          </IndividualCaseForm>
          }
        </IndividualCaseFormWrapper>
      </OrderForm>
    );
  }
}
