/* eslint-disable max-len */

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Wrapper = styled.div`
  background-color: #fff;
`;

const BannerWrapper = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding: 40px;
  
  @media (min-width: 768px) {
    padding: 20px 40px;
  }
`;

const ImgWrapper = styled.div`
  display: block;
`;

const Img = styled.img`
  width: 140px;
`;

const SectionWrapper = styled.section`
  background-color: #f9f9f9;
  padding-top: 0;
  padding: 30px 15px 120px 15px;
  
  @media (min-width: 768px) {
    padding: 50px 15px 80px 15px;
  }
`;

const Section = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const Description = styled.article`
  font-size: 18px;
  font-family: 'Lato-Regular', sans-serif;
  line-height: 1.44;
  color: #222222;
  text-align: left;
  padding: 0;
  
  @media (min-width: 768px) {
    padding: 10px 0;
  }
`;

const DescriptionHeader = styled.h1`
  font-family: 'Lato-Regular', sans-serif;
  font-weight: bold;
  color: #222222;
  font-size: 24px;
  text-align: left;
  
  @media (min-width: 768px) {
    text-align: center;
    font-size: 32px;  
  }
`;

const DescriptionSubHeader = styled.h2`
  font-family: 'Lato-Regular', sans-serif;
  font-weight: bold;
  color: #222222;
  font-size: 20px;
  text-align: left;  

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

const List = styled.ul`
  max-width: 550px;

  & li {
    padding-bottom: 10px;
  }
`;

export default () => (
  <Wrapper>
    <Header />
    <BannerWrapper>
      <Row>
        <Col xs={6} sm={6} md={4} lg={3}>
          <ImgWrapper>
            <Img src="/case-examples/white/22_lion_turn_bamb_white.jpg" alt="" />
          </ImgWrapper>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <ImgWrapper>
            <Img src="/case-examples/white/2_barcelona_turn_red_white.jpg" alt="" />
          </ImgWrapper>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <ImgWrapper>
            <Img src="/case-examples/white/3_marina_turn_red_white.jpg" alt="" />
          </ImgWrapper>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <ImgWrapper>
            <Img src="/case-examples/white/4_aries_zodiac_turn_bamb_white.jpg" alt="" />
          </ImgWrapper>
        </Col>
      </Row>
    </BannerWrapper>
    <SectionWrapper>
      <Section>
        <DescriptionHeader>Сотрудничество</DescriptionHeader>
        <Description>
          <DescriptionSubHeader>Приемущества работы с Casewood</DescriptionSubHeader>
          У вас интернет магазин/розничная точка, сеть магазинов? Сотрудничая с casewood.ru вы существенно расширяете свой ассортимент сегментом премиум чехлов для популярных моделей телефонов по минимальной цене
          <List>
            <li>Единственное производство деревянных чехлов в России (полный цикл)</li>
            <li>Вы сотрудничаете напрямую с производителем</li>
            <li>Мы продаем как заготовки под гравировку так и полностью готовую продукцию</li>
            <li>Осуществляем индивидуальные заказы от 1шт</li>
            <li>Наша продукция продается в десятках розничных и интернет</li>
          </List>
        </Description>

        <Description>
          <DescriptionSubHeader>Заготовки</DescriptionSubHeader>
          <List>
            <li>Вы покупаете заготовки напрямую у производителя, не переплачивая посредникам</li>
            <li>Производство чехлов из дерева для абсолютно любой модели телефонов</li>
            <li>Возможно изготовление под заказ чехлов из любой породы дерева в самые короткие сроки</li>
            <li>Доставка по всему миру (Почта/емs/сдэк/деловые линии и т. д.)</li>
          </List>
        </Description>

        <Description>
          <DescriptionSubHeader>Чехлы с гравировкой</DescriptionSubHeader>
          <List>
            <li>Гравируем любой рисунок/лого/ваши решения</li>
            <li>Продажа от одной штуки</li>
            <li>Оптовые цены при покупке от 50 шт (можно в ассортименте для разных моделей)</li>
            <li>Для корпоративных клиентов возможна отсрочка платежа</li>
            <li>Производство упаковки с вашим лого (от 100шт) из дерева, картона, блистера и т.д.</li>
            <li>Собственная курьерская служба по Москве</li>
            <li>Доставка вашим клиентам от вашего имени/магазина (подробнее узнавайте у менеджера)</li>
          </List>
          Деревянный чехол - «эко» товар, который всегда в тренде. Используем только натуральные материалы. Каждый чехол обрабатывается уникальным материалом который защищает его от воздействия внешней среды (перепады температуры, влага и т.д.)
        </Description>
      </Section>
    </SectionWrapper>
    <Footer />
  </Wrapper>
);
