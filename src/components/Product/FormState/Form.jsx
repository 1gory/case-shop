import React, { Component } from 'react';
import styled from 'styled-components';
import { Model, Material, PhoneNumber } from '../../generic/ProductDetails';
import ImageForm from '../../generic/UploadFileForm';
import validatePhone from '../../../functions/validatePhone';

const OrderForm = styled.form`
  padding-top: 45px;
`;

const OrderButtonWrapper = styled.div`
  padding-top: 25px;
  text-align: center;
`;

const OrderButton = styled.button`
  border-radius: 20px;
  background-color: #7f5152;
  border: none;
  font-size: 16px;
  color: #ffffff;
  font-family: 'Lato-Light';
  padding: 10px 30px;
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
    this.state = {};
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSend = this.handleSend.bind(this);
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

  // TODO move sending to separated method
  handleSend(event, formData) {
    event.preventDefault();
    if (!formData.phone || !(validatePhone(formData.phone))) {
      this.setState({
        invalidNumber: true,
      });
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
          isSent: true,
        });
      }
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <OrderForm>
        <Model handleChangeForm={this.handleChangeForm} />
        <Material handleChangeForm={this.handleChangeForm} />
        {/* <Messenger handleChangeForm={this.handleChangeForm} /> */}
        <PhoneNumber
          handleChangeForm={this.handleChangeForm}
          invalidNumber={this.props.invalidNumber}
        />
        <OrderButtonWrapper>
          <OrderButton onClick={event => (this.props.handleSend(event, this.state))}>
            Заказать
          </OrderButton>
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
