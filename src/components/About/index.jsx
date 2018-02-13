/* eslint-disable max-len */

import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../Header';
import Footer from '../Footer';
import casesEngraving from './cases-engraving-machine.jpg';
import metalEngraving from './metal-engraving-machine.jpg';
import stickers from './stickers.jpg';
import oldLogo from './old-logo.jpg';
import newLogo from './new-logo.jpg';
import cases from './cases.jpg';
import envelops from './envelope.jpg';
import makingCase from './makingCase.jpg';
import doneCases from './doneCases.jpg';

const Wrapper = styled.div`
  background-color: #fff;
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

const Img = styled.img`
  padding: 20px;
  border-radius: 50%;
  display: ${({ hide }) => (!hide ? 'block' : 'none')};
  width: 120px;
  height: 120px;
  
  @media (min-width: 768px) {
    display: block;
    width: 150px;
    height: 150px;
  }
`;

const ImagesWrapper = styled.div`
   padding: 15px 0 20px 0;
   display: flex;
   justify-content: center;
`;

const Email = styled.a`
  color: black;
`;

export default () => (
  <Wrapper>
    <Helmet>
      <title>О нас | Деревянные чехлы для iPhone Casewood</title>
      <meta
        name="description"
        content="О компании casewood"
      />
    </Helmet>
    <Header />
    <SectionWrapper>
      <Section>
        <DescriptionHeader>О компании</DescriptionHeader>
        <Description>
          Мы занимаемся производством деревянных чехлов с 2015 года.
          За это время успели накопить богатый опыт производства и оформления дизайна деревянных чехлов.
          В нашем арсенале имеется различное оборудование для всех видов лазерных гравировок, что позволяет нам выполнять гравировку не только на чехлах, но и заниматься производством различной продукции в рамках других проектов (лазерная резка, гравировка на металле, изготовление сувенирной продукции и.т.п)
        </Description>
        <ImagesWrapper>
          <Img src={casesEngraving} alt="Станок для гравировки чехлов" />
          <Img src={metalEngraving} alt="Станок для гравировки металла" />
          <Img src={stickers} alt="Стикеры с лого Casewood" hide />
        </ImagesWrapper>
        <Description>
          <DescriptionSubHeader>Наш проект развивался в несколько этапов</DescriptionSubHeader>
          С 2015 года мы испробовали различные материалы для изготовления чехлов, различные породы дерева, пластиковые основы, много экспериментировали с методами гравировки.
          В результате было решено использовать чехлы с толстой деревянной пластиной которая крепится на основу из soft-touch пластика.
          С 2017 года сменили логотип и провели редизайн сайта, сделали мобильную версию и подключили платежные системы для удобной оплаты.
          В настоящее время экспериментируем с различной гравировкой фотографий, постоянно добавляем новые принты в каталог.
        </Description>
        <ImagesWrapper>
          <Img src={oldLogo} alt="Старый логотип Casewood" hide />
          <Img src={cases} alt="Деревянные чехлы Casewood" />
          <Img src={newLogo} alt="Новый логотип Casewood" />
        </ImagesWrapper>
        <Description>
          <DescriptionSubHeader>Наши главные ценности - довольные покупатели</DescriptionSubHeader>
          Мы стараемся выстраивать теплые человеческие отношения с покупателями.
          Чаще всего деревянные чехлы с индивидуальной гравировкой изготавливаются в подарок, поэтому очень важно выполнить дизайн, учитывая все пожелания заказчика.
          Важным звеном является логистика - зачастую доставка требуется к определенной дате и обычная отправка почтой может не уложиться в срок.
          Мы работаем с различными курьерскими компаниями, и подбираем оптимальный вариант доставки. Также у нас имеются подарочные конверты и упаковки, которые украсят подарок и добавят торжественности моменту.
        </Description>
        <ImagesWrapper>
          <Img src={envelops} alt="Конверты для отправки Casewood" />
          <Img src={makingCase} alt="Изготовление деревянного чехла" hide />
          <Img src={doneCases} alt="Продукция Casewood" />
        </ImagesWrapper>
        <Description>
          <DescriptionSubHeader>Команда</DescriptionSubHeader>
          Для вас трудится небольшая, но слаженная команда профессионалов. <br />
          Мы любим то, что делаем и делаем то, что любим. <br />
          Дизайн, разработка макетов, иллюстрации - Сверидова Елена <br />
          Маркетинг, аналитика, реклама - Родионов Станислав <br />
          Разработка, верстка, интеграция инструментов - Першин Игорь <br />
          Прием заказов, производство, логистика - Рашов Сергей
        </Description>
        <Description>
          <DescriptionSubHeader>Контакты</DescriptionSubHeader>
          Мы всегда рады обращениям к нам по любым вопросам <br />
          <Email href="mailto:info@casewood.ru">info@casewood.ru</Email> - для вопросов, претензий, отзывов<br />
          <Email href="mailto:store@casewood.ru">store@casewood.ru</Email> - реклама, сотрудничество
        </Description>
      </Section>
    </SectionWrapper>
    <Footer />
  </Wrapper>
);
