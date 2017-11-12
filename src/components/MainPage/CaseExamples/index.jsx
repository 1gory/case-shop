import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import Button from '../../generic/Form/Buttons/PrimaryButton';
import OrderPopUp from './OrderPopUp';

const CatalogAnchor = Scroll.Element;

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #4a4a4a;
`;

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

const ImgExample = styled.img`
  width: 140px;
  padding-bottom: 40px;
`;

const ExampleWrapper = styled(Link)`
  padding-top: 40px;
  display: block;
  text-decoration: none;
  color: #000;
`;

const RowWrapper = styled.div`
  margin: 15px;
  font-family: 'Lato-Regular';
  font-weight: bold;
  
  @media (min-width: 768px) {
    max-width: 970px;
    margin: 0 auto;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

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
      (
        <Wrapper>
          <OrderPopUp isOpened={this.state.isOpened} handleClose={this.handleClose} />
          <CatalogAnchor name="CatalogAnchor" />
          <H2>Примеры работы</H2>
          <RowWrapper>
            <Row>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/russia">
                  <ImgExample src="/case-examples/gray/russia.jpg" alt="" />
                  <div>Россия</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/fk">
                  <ImgExample src="/case-examples/gray/2_barcelona_turn_red_gray.jpg" alt="" />
                  <div>С логотипом любимой команды</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/names">
                  <ImgExample src="/case-examples/gray/elena.jpg" alt="" />
                  <div>С вашим именем</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/zodiac">
                  <ImgExample src="/case-examples/gray/4_aries_zodiac_turn_bamb_gray.jpg" alt="" />
                  <div>С вашим гороскопом</div>
                </ExampleWrapper>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/marvel">
                  <ImgExample src="/case-examples/gray/10_marvel_turn_bamb_white.jpg" alt="" />
                  <div>Marvel</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/auto">
                  <ImgExample src="/case-examples/gray/lexus.jpg" alt="" />
                  <div>Ваше авто</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/ufc">
                  <ImgExample src="/case-examples/gray/ufc.jpg" alt="" />
                  <div>UFC</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/prints">
                  <ImgExample src="/case-examples/gray/12_skull_turn_red_gray.jpg" alt="" />
                  <div>С вашей картинкой или логотипом</div>
                </ExampleWrapper>
              </Col>
            </Row>
          </RowWrapper>
          <StyledButton onClick={this.handleOpen}>
            Заказать
          </StyledButton>
        </Wrapper>
      )
    );
  }
}
