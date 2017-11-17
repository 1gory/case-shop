import React, { Component } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import GhostButton from '../generic/Form/Buttons/GhostButton';
import preloader from './preloader.svg';
import icon from './icon.svg';

const Wrapper = styled.div`
`;

const PreloaderContainer = styled.div`
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Preloader = styled.img`
  width: 230px;
`;

const Icon = styled.img`
  width: 60px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%,-50%);
`;

const IconsWrapper = styled.div`
  position: relative;
`;

const ButtonsWrapper = styled.div`
  width: 230px;
  position: relative;
  margin: 0 auto;
`;

const Button = styled(GhostButton)`
  width: 100%;
  margin-top: 15px;
`;

const Prepayment = styled(Button)`
`;

const FullPayment = styled(Button)`
  background-color: #89da65;
`;

export default class extends Component {
  constructor() {
    super();
    this.state = {
      customerNumber: '',
    };

    this.handleSendForm = this.handleSendForm.bind(this);
  }

  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.state = {
      value: 500,
      customerNumber: parsed.customerNumber,
      transferredValue: parsed.value,
    };
  }

  handleSendForm(value) {
    if (value) {
      this.setState({
        value: value * 0.9,
      }, () => { this.FormRef.submit(); });
    } else {
      this.FormRef.submit();
    }
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
            <input name="sum" value={this.state.value} type="hidden" />

            <ButtonsWrapper>
              <Prepayment
                name="customerNumber"
                onClick={() => { this.handleSendForm(); }}
              >
                Предоплата
              </Prepayment>

              <FullPayment
                name="customerNumber"
                onClick={() => { this.handleSendForm(this.state.transferredValue); }}
              >
                Полная оплата (-10%)
              </FullPayment>
            </ButtonsWrapper>
          </form>
        </PreloaderContainer>
      </Wrapper>
    );
  }
}
