/* eslint-disable max-len: ["error"] */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import HowWeWorkIcon1 from './HowWeWork1';
import HowWeWorkIcon2 from './HowWeWork2';
import HowWeWorkIcon3 from './HowWeWork3';
import HowWeWorkIcon4 from './HowWeWork4';

const Wrapper = styled.div`
  text-align: center;
  padding: 20px 0 30px 0;
`;

const Steps = styled.div`
  padding-top: 40px;
  margin: 15px;
  
  @media (min-width: 768px) {
    max-width: 1170px;
    margin: 0 auto;
  }
`;

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #4a4a4a
`;

const IconWrapper = styled.div`
  margin: 0 auto;
  fill: #646464;
  width: 40px;
  height: 40px;
  border: solid 2px #cccccc;
  padding: 25px;
  border-radius: 50px;
`;

const IconWrapper3 = styled(IconWrapper)`
  padding: 20px;
  width: 50px;
  height: 50px;
`;

const IconWrapper4 = styled(IconWrapper)`
  padding: 25px;
  width: 45px;
  height: 45px;
`;

const Name = styled.div`
  font-family: 'Lato-Regular';
  font-weight: bold;
  font-size: 16px;
  padding-top: 15px;
  padding-bottom: 8px;
`;

const Description = styled.div`
  font-family: 'Lato-Regular';
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  width: 200px;
  margin: 0 auto;
  
  & a {
    color: inherit;
  }
`;

const Delimiter = styled.div`
  border-left: 2px solid #cccccc;
  width: 1px;
  margin: 20px auto;
  height: 40px;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export default () => (
  <Wrapper>
    <H2>Как мы работаем</H2>
    <Steps>
      <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
          <IconWrapper>
            <HowWeWorkIcon1 />
          </IconWrapper>
          <Name>Заказ</Name>
          <Description>
            Выбирайте из каталога или загружайте свой принт или картинку на странице любого чехла
          </Description>
          <Delimiter />
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <IconWrapper>
            <HowWeWorkIcon2 />
          </IconWrapper>
          <Name>Оформление</Name>
          <Description>
            Наши специалисты свяжутся c Вами как можно скорее для уточнения всех деталей
          </Description>
          <Delimiter />
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <IconWrapper4>
            <HowWeWorkIcon4 />
          </IconWrapper4>
          <Name>Изготовление</Name>
          <Description>
            Мы изготовим чехол учитывая все Ваши пожелания и отправим его в надежной упаковке
          </Description>
          <Delimiter />
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <IconWrapper3>
            <HowWeWorkIcon3 />
          </IconWrapper3>
          <Name>Доставка</Name>
          <Description>
            Вы получаете чехол через 1-3 дня (Мск, Спб). Для регионов <Link to="/delivery">
            сроки считаются отдельно</Link>
          </Description>
        </Col>
      </Row>
    </Steps>
  </Wrapper>
);
