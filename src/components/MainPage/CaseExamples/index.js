import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import dummy from './16.jpg';

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
  color: #4a4a4a;
`;

const Wrapper = styled.div`
  text-align: center;
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
`;

export default () => (
  <Wrapper>
    <H2>Примеры работы</H2>
    <RowWrapper>
      <Row>
        <Col xs={6} sm={6} md={4} lg={3}>
          <ExampleWrapper>
            <ImgExample src={dummy} alt='' />
            <div>С вашей картинкой или логотипом</div>
          </ExampleWrapper>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <ExampleWrapper>
            <ImgExample src={dummy} alt='' />
            <div>С лого любимой футбольной команды</div>
          </ExampleWrapper>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <ExampleWrapper>
            <ImgExample src={dummy} alt='' />
            <div>С вашим именем</div>
          </ExampleWrapper>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <ExampleWrapper>
            <ImgExample src={dummy} alt='' />
            <div>С вашим гороскопом</div>
          </ExampleWrapper>
        </Col>
      </Row>
    </RowWrapper>
  </Wrapper>
);
