import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import RubleSign from '../RubleSign';
import dummy from './16.jpg';

const Wrapper = styled.div`
  color: #4a4a4a;
  text-align: center;
  padding-bottom: 60px;
`;

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
`;

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Img = styled.img`
  width: 80px;
  display: block;
  margin: 0 auto;
`;

const Name = styled.div`
  font-family: 'Lato-Bold';
  text-transform: uppercase;
  font-size: 16px;
  padding-top: 40px;
  padding-bottom: 20px;
`;

const Price = styled.div`
  font-family: 'Lato-Regular';
  font-size: 18px;
  color: #222222;
`;

const RowWrapper = styled.div`
  margin: 15px;
`;

const GoToCatalogButton = styled.button`
  border-radius: 20px;
  font-family: 'Lato-Regular';
  border: solid 1px #222222;
  background: none;
  padding: 8px 30px;
  margin-top: 40px;
`;

export default () => (
  <Wrapper>
    <H2>Каталог грвированных чехлов</H2>
    <RowWrapper>
      <Row>
        {[...Array(4)].map((x, i) =>
          <Col xs={6} sm={6} md={4} lg={3}>
            <Card>
              <Img src={dummy} />
              <Name>Flower Pattern</Name>
              <Price>1290<RubleSign>₽</RubleSign></Price>
            </Card>
          </Col>)}
      </Row>
    </RowWrapper>
    <GoToCatalogButton>Перейти в каталог</GoToCatalogButton>
  </Wrapper>
);
