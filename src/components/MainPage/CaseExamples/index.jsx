import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import dummy from './16.jpg';
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

const ExampleWrapper = styled.div`
  padding-top: 40px;
`;

const RowWrapper = styled.div`
  margin: 15px;
  font-family: 'Lato-SemiBold';
`;

const ButtonWrapper = styled.div`
  padding-top: 30px;
`;

const Button = styled.button`
  border-radius: 20px;
  background-color: #7f5152;
  border: none;
  font-size: 16px;
  color: #ffffff;
  font-family: 'Lato-Light';
  padding: 10px 30px;
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
                <ExampleWrapper>
                  <ImgExample src={dummy} alt="" />
                  <div>С вашей картинкой или логотипом</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper>
                  <ImgExample src={dummy} alt="" />
                  <div>С лого любимой футбольной команды</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper>
                  <ImgExample src={dummy} alt="" />
                  <div>С вашим именем</div>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper>
                  <ImgExample src={dummy} alt="" />
                  <div>С вашим гороскопом</div>
                </ExampleWrapper>
              </Col>
            </Row>
          </RowWrapper>
          <ButtonWrapper>
            <Button onClick={this.handleOpen}>
              Заказать
            </Button>
          </ButtonWrapper>
        </Wrapper>
      )
    );
  }
}
