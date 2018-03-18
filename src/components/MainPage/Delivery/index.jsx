import React, { Component } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import ym from 'react-yandex-metrika';

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #4a4a4a;
`;

const Wrapper = styled.div`
  background: #fff;
`;

const DeliveryWrapper = styled.div`
  padding: 10px 0 50px 0;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
  }
`;

const Description = styled.div`
  color: #3b3b3b;
  text-align: left;
  padding: 10px 0 30px 0;
  color: #3b3b3b;
`;

// TODO move to separated file
const StyledInputMask = styled(InputMask)`
  border: 1px solid #cccccc;
  border-radius: 20px;
  padding: 8px 15px;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Lato-Regular';
  color: #4a4a4a;
`;

const IndexInputWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
  text-align: left
`;

const DeliveryDetails = styled.div`
  color: #3b3b3b;
  font-size: 14px;
  padding-top: 5px;
`;

const ErrorMessage = styled(DeliveryDetails)`
  color: red;
`;

const DeliveryTime = styled(DeliveryDetails)``;

const DeliveryCosts = styled(DeliveryDetails)``;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      error: false,
      success: false,
      deliveryTime: null,
      deliveryCosts: null,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const postIndexLength = String(parseInt(e.target.value, 10)).length;
    if (postIndexLength === 6) {
      ym('reachGoal', 'inputIndex');
      const postIndex = e.target.value;
      fetch(`/api/postcalc?toIndex=${postIndex}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }).then(async (response) => {
        if (response.status !== 200) {
          throw Error();
        }
        const responseData = await response.json();
        this.setState({
          error: false,
          success: true,
          deliveryTime: responseData.time,
          deliveryCosts: responseData.price,
        });
      }).catch((/* error */) => {
        this.setState({
          error: true,
          success: false,
        });
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <DeliveryWrapper>
          <H2>Доставка</H2>
          <Description>
            Мы отправляем чехлы по России «Первым классом»
            и не делаем дополнительных наценок на отправку.
            Введите свой индекс (6 цифр), чтобы узнать стоимость и сроки доставки до вашего города.
            День отправления не учитывается.
          </Description>

          <IndexInputWrapper>
            <StyledInputMask
              placeholder="Введите свой индекс"
              name="name"
              mask="999999"
              onChange={this.onChange}
            />
            {this.state.error && <ErrorMessage>Проверьте правильность ввода индекса</ErrorMessage>}
            {this.state.success &&
            <div>
              <DeliveryTime>
                Сроки доставки: {this.state.deliveryTime} дн.
              </DeliveryTime>
              <DeliveryCosts>
                Стоимость отправки: {this.state.deliveryCosts} руб.
              </DeliveryCosts>
            </div>}
          </IndexInputWrapper>
        </DeliveryWrapper>
      </Wrapper>
    );
  }
}
