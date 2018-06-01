import React from 'react';
import Scroll from 'react-scroll';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import OfferCard from './OfferCard';
import printOffer from './print.jpg';
import engravingOffer from './engraving.jpg';
import logoOffer from './logo.jpg';

const OfferAnchor = Scroll.Element;

const Wrapper = styled.div`
  padding-bottom: 60px;
  background-color: #fff;
`;

const scroller = Scroll.scroller;

const handleClick = () => {
  scroller.scrollTo('FileFormAnchor', {
    duration: 800,
    delay: 100,
    smooth: true,
  });
};

const RowWrapper = styled.div`
  max-width: 1170px;
  margin: 0 15px;
  
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export default () => (
  <Wrapper>
    <OfferAnchor name="OfferAnchor" />
    <RowWrapper>
      <Row>
        <Col xs={12} sm={4} md={4} lg={4}>
          <OfferCard
            price={1490}
            name={<span>Нанесение вашего фото на чехол<br /> (цветное или черно-белое)</span>}
            description="Качественное нанесение фото, высокая детализация"
            image={printOffer}
            onClick={handleClick}
          />
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <OfferCard
            price={1290}
            name={<span>Гравировка <br />на чехле</span>}
            description="Глубокая гравировка, приятная на ощупь рельефная фактура"
            image={engravingOffer}
            onClick={handleClick}
          />
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <OfferCard
            price={1490}
            name={<span>Нанесение логотипа <br />или картинки</span>}
            description="Насыщенные цвета, стойкая печать защищенная лаком "
            image={logoOffer}
            onClick={handleClick}
          />
        </Col>
      </Row>
    </RowWrapper>
  </Wrapper>
);
