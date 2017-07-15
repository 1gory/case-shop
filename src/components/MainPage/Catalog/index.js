import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import RubleSign from '../../RubleSign';
import Scroll from 'react-scroll';
import Card from '../../Card'

const CatalogAncor = Scroll.Element;

const Wrapper = styled.div`
  color: #4a4a4a;
  text-align: center;
  padding-bottom: 60px;
`;

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
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
    <CatalogAncor name="CatalogAncor"/>
    <H2>Каталог гравированных чехлов</H2>
    <RowWrapper>
      <Row>
        {[...Array(4)].map((x, i) =>
          <Col xs={6} sm={6} md={4} lg={3}>
            <Card />
          </Col>)}
      </Row>
    </RowWrapper>
    <GoToCatalogButton>Перейти в каталог</GoToCatalogButton>
  </Wrapper>
);
