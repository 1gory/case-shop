import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';

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
`;

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
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
  padding: 30px;
  width: 30px;
  height: 30px;
`;

const Name = styled.div`
  font-family: 'Lato-SemiBold';
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
`;

const Delimiter = styled.div`
  border-left: 2px solid #cccccc;
  width: 1px;
  margin: 20px auto;
  height: 40px;
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
            Вы выбираете тип одежды, цвет, цифры и надпись. Также возможен заказ индивидуального принта.
          </Description>
          <Delimiter />
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <IconWrapper>
            <HowWeWorkIcon2 />
          </IconWrapper>
          <Name>Оформление</Name>
          <Description>
            Наши специалисты свяжутся с вами для уточнения пожеланий и подверждения заказа.
          </Description>
          <Delimiter />
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <IconWrapper3>
            <HowWeWorkIcon3 />
          </IconWrapper3>
          <Name>Доставка</Name>
          <Description>
            Мы отправляем товар в день заказа и вы получаете его через 2-3 дня (Мск, Спб), либо в течение 3-7 дней. Оплата при получении.
          </Description>
          <Delimiter />
        </Col>

        <Col xs={12} sm={12} md={3} lg={3}>
          <IconWrapper4>
            <HowWeWorkIcon4 />
          </IconWrapper4>
          <Name>Результат</Name>
          <Description>
            С именной одеждой вы всегда будете в центре внимания! Нам будет очень приятно, если вы оставите фотографию и отзыв.
          </Description>
        </Col>
      </Row>
    </Steps>
  </Wrapper>
);
