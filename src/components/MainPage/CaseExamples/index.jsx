import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Button from '../../generic/Form/Buttons/PrimaryButton';
import image from './22_lion_turn_bamb_gray.jpg';
import teamLogo from './2_barcelona_turn_red_gray.jpg';
import name from './3_marina_turn_red_gray.jpg';
import zodiac from './4_aries_zodiac_turn_bamb_gray.jpg';
import OrderPopUp from './OrderPopUp';

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
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
  font-family: 'Lato-SemiBold';
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
          <H2>Примеры работы</H2>
          <RowWrapper>
            <Row>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/product/59c36eebc9ae0a42557f4ad4">
                  <ImgExample src={image} alt="" />
                  <div>С вашей картинкой или логотипом</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/product/59c2cee2c9ae0a42557f3dfa">
                  <ImgExample src={teamLogo} alt="" />
                  <div>С логотипом любимой команды</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/product/59c2d14bc9ae0a42557f3ec2">
                  <ImgExample src={name} alt="" />
                  <div>С вашим именем</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/product/59c2d957c9ae0a42557f413c">
                  <ImgExample src={zodiac} alt="" />
                  <div>С вашим гороскопом</div>
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
