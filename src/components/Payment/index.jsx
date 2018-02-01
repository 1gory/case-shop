import React, { Component } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import GhostButton from '../generic/Form/Buttons/GhostButton';
import preloader from './preloader.svg';
import icon from './icon.svg';
import visa from '../generic/Icons/payments/visa.svg';
import maestro from '../generic/Icons/payments/maestro-black.svg';
import mastecard from '../generic/Icons/payments/mastercard-black.svg';
import sbOnline from '../generic/Icons/payments/sb_online.svg';
import mir from '../generic/Icons/payments/mir.svg';
import qiwi from '../generic/Icons/payments/qiwi-black.svg';
import yandexMoney from '../generic/Icons/payments/yandex_money.svg';
import RubleSign from '../generic/RubleSign';

const Wrapper = styled.div`
  width: 100%;
`;

const PreloaderContainer = styled.div`
  height: 100vh;
  background-color: #f9f9f9;
  overflow: scroll;
`;

const Preloader = styled.img`
  width: 170px;
`;

const Icon = styled.img`
  width: 45px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
`;

const IconsWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const CardsWrapper = styled.div`
  width: 260px;
  position: relative;
  margin: 0 auto;
`;

// const Button = styled(GhostButton)`
//   width: 100%;
//   margin-top: 15px;
// `;

const Card = styled.div`
  font-size: 15px;
  font-family: 'Lato-Regular', sans-serif;
  margin-bottom: 15px;
  background-color: #fff;
  color: #4a4a4a;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  padding: 20px;
  cursor: pointer;
  text-align: center;
`;

const YandexKassaCard = styled(Card)`
  display: ${props => (!props.sberbankChecked ? 'block' : 'none')};
`;

const PaymentIcons = styled.div`
  padding: 15px 0;
  text-align: center;
`;

const PaymentServiceLogo = styled.img`
  height: 25px;
  padding: 5px 5px 0 0;
`;

const PaymentServiceSBLogo = styled(PaymentServiceLogo)`
  height: 35px;
`;

const SbPaymentInfo = styled.div`
  text-align: left;
  display: ${props => (props.isOpened ? 'block' : 'none')};
`;

const PaymentChoiceSign = styled.h2`
  color: #4a4a4a;
  font-family: 'Lato-Regular', sans-serif;
  font-size: 18px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const Param = styled.div`
  color: #a3a3a3;
  padding-top: 10px;
`;

const Value = styled.div`
  font-weight: bold;
  padding-top: 5px;
`;

const Summ = styled.div`
  padding-top: 8px;
  font-size: 18px;
`;

export default class extends Component {
  constructor() {
    super();
    this.state = {
      customerNumber: '',
      sberbankChecked: false,
    };

    this.handleSendForm = this.handleSendForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.state = {
      customerNumber: parsed.customerNumber,
      transferredValue: parsed.value,
    };
  }

  handleClick() {
    this.setState({
      sberbankChecked: true,
    });
  }

  handleClickBack(e) {
    e.stopPropagation();
    this.setState({
      sberbankChecked: false,
    });
  }

  handleSendForm() {
    this.FormRef.submit();
  }

  render() {
    return (
      <Wrapper>
        <PreloaderContainer>
          <IconsWrapper>
            <Preloader src={preloader} alt="" />
            <Icon src={icon} alt="" />
          </IconsWrapper>
          <form ref={(el) => { this.FormRef = el; }} action="https://money.yandex.ru/eshop.xml" method="POST">
            <input name="shopId" value="159341" type="hidden" />
            <input name="scid" value="151001" type="hidden" />
            <input name="sum" value={this.state.transferredValue} type="hidden" />
            <input name="customerNumber" value={this.state.customerNumber} type="hidden" />
          </form>
          <CardsWrapper>
            <PaymentChoiceSign>Выберите способ оплаты</PaymentChoiceSign>
            <Card onClick={() => { this.handleClick(); }}>
              <div>
                Перевод на карту Сбербанк
              </div>
              <PaymentIcons>
                <PaymentServiceSBLogo src={sbOnline} alt="Оплата через сбербанк онлайн" />
              </PaymentIcons>
              <SbPaymentInfo isOpened={this.state.sberbankChecked}>
                Реквизиты для перевода на карту Сбербанк:
                <Param>Номер карты</Param>
                <Value>4276380164308178</Value>
                <Param>Получатель</Param>
                <Value>Игорь Валерьевич П.</Value>
                <Param>Номер телефона получателя</Param>
                <Value>+7 (916) 228-24-56</Value>
                {this.state.transferredValue && <div>
                  <Param>Сумма</Param>
                  <Summ>{this.state.transferredValue} <RubleSign /></Summ>
                </div>}
                <ButtonWrapper>
                  <GhostButton onClick={(e) => { this.handleClickBack(e); }}>Назад</GhostButton>
                </ButtonWrapper>
              </SbPaymentInfo>
            </Card>
            {this.state.transferredValue && <YandexKassaCard
              sberbankChecked={this.state.sberbankChecked}
              onClick={() => { this.handleSendForm(this.state.transferredValue); }}
            >
              <div>
                Оплата банковской картой или электронными деньгами
              </div>
              <PaymentIcons>
                <PaymentServiceLogo src={visa} alt="Оплата картой visa" />
                <PaymentServiceLogo src={maestro} alt="Оплата картой maestro" />
                <PaymentServiceLogo src={mastecard} alt="Оплата картой mastercard" />
                <PaymentServiceLogo src={qiwi} alt="Оплата через Киви" />
                <PaymentServiceLogo src={yandexMoney} alt="Оплата Яндекс деньги" />
                <PaymentServiceLogo src={mir} alt="Оплата картой МИР" />
              </PaymentIcons>
            </YandexKassaCard>}
          </CardsWrapper>
        </PreloaderContainer>
      </Wrapper>
    );
  }
}
