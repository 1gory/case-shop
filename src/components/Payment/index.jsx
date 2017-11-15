import React, { Component } from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import preloader from './preloader.svg';
import icon from './icon.svg';

const Wrapper = styled.div`
`;

const PreloaderContainer = styled.div`
  position: fixed;
  top: 50%;
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

export default class extends Component {
  constructor() {
    super();
    this.state = {
      customerNumber: '',
    };
  }

  componentWillMount() {
    const parsed = queryString.parse(this.props.location.search);
    this.state = {
      customerNumber: parsed.customerNumber,
    };
  }

  componentDidMount() {
    setTimeout(() => (this.FormRef.submit()), 1500);
  }

  render() {
    return (
      <Wrapper>
        <PreloaderContainer>
          <IconsWrapper>
            <Preloader src={preloader} alt="" />
            <Icon src={icon} alt="" />
          </IconsWrapper>
        </PreloaderContainer>
        <form ref={(el) => { this.FormRef = el; }} action="https://money.yandex.ru/eshop.xml" method="POST">
          <input name="shopId" value="88501" type="hidden" />
          <input name="scid" value="95712" type="hidden" />
          <input name="sum" value="500" type="hidden" />
          <input name="customerNumber" value={this.state.customerNumber} type="hidden" />
        </form>
      </Wrapper>
    );
  }
}
