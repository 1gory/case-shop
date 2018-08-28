import React from 'react';
import styled from 'styled-components';
import Button from '../../generic/Form/Buttons/PrimaryButton';
import composition1 from './composition1.jpg';
import composition2 from './composition2.jpg';
import composition3 from './composition3.jpg';
import engraving1 from './engraving1.jpg';
import engraving from './engraving.gif';
import engraving2 from './engraving2.jpg';
import print1 from './print1.jpg';
import print2 from './print2.jpg';

import printing from './printing.gif';

const Wrapper = styled.div`
  text-align: center;
  padding: 50px 0 30px 0;
`;

const ResponsiveWrapper = styled.div`
  @media (min-width: 768px) {
    margin 0 auto;
    max-width: 1170px;
  }
`;

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 28px;
  color: #4a4a4a
`;

const ImgWrapper = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    padding: 0 15px;
  }
`;

const Img = styled.div`
  background: url(${props => props.src});
  height: 250px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Advantage = styled.div`
  color: #fff;
  font-family: 'Lato-Light';
  font-size: 24px;
  text-shadow: 1px 1px 3px black;
`;

const Advantages = styled.div`
  padding-top: 20px;
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Description = styled.div`
  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 20px;
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #3b3b3b;
  text-align: left;

  @media (min-width: 768px) {
    text-align: center;
    width: 1170px;
    margin: 0 auto;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;


export default props => (
  <Wrapper>
    <H2>Из чего состоит чехол</H2>
    <ResponsiveWrapper>
      <Advantages>
        <ImgWrapper>
          <Img src={composition1} alt="Основа деревянного чехла">
            <Advantage>Основа <br />soft-touch</Advantage>
          </Img>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={composition2} alt="Деревянный чехол на iPhone">
            <Advantage>Натуральное <br />дерево</Advantage>
          </Img>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={composition3} alt="Покрытие деревянного чехла">
            <Advantage>Лаковое <br />покрытие</Advantage>
          </Img>
        </ImgWrapper>
      </Advantages>
    </ResponsiveWrapper>
    <DescriptionWrapper>
      <Description>
        Основа деревянного чехла состоит из прочного Soft-Touch пластика с
        матовым бархатным напылением, приятным на ощупь.
        Для деревянной части чехла, расположенной сверху, мы используем
        качественное дерево двух цветов:
        светлое - бамбук и темное - палисандр. На дерево нанесен слой защитного
        лакового покрытия, которое не
        позволит вашему чехлу запачкаться или испортиться под воздействием влаги.
      </Description>
    </DescriptionWrapper>

    <H2>Как делается гравировка</H2>
    <ResponsiveWrapper>
      <Advantages>
        <ImgWrapper>
          <Img src={engraving1} alt="Рельефная фактура чехла с гравировкой">
            <Advantage>Рельефная <br />фактура</Advantage>
          </Img>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={engraving} alt="Как делается гравировка чехла" />
        </ImgWrapper>
        <ImgWrapper>
          <Img src={engraving2} alt="Индивидуальная гравировка чехла">
            <Advantage>Индивидуальная <br />гравировка</Advantage>
          </Img>
        </ImgWrapper>
      </Advantages>
    </ResponsiveWrapper>
    <DescriptionWrapper>
      <Description>
        Гравировка производится с помощью точного лазерного оборудования.
        Отлично подходит для нанесения на чехол надписей, логотипов, узоров.
        Луч лазера выжигает примерно миллиметр материала,
        проявляя волокнистую фактуру дерева в обработанной области.
      </Description>
    </DescriptionWrapper>

    <H2>Как наносится фото</H2>
    <ResponsiveWrapper>
      <Advantages>
        <ImgWrapper>
          <Img src={print1} alt="Стойкое нанесение на чехол">
            <Advantage>Стойкое <br />нанесение</Advantage>
          </Img>
        </ImgWrapper>
        <ImgWrapper>
          <Img src={printing} alt="Как делается нанесение на чехол" />
        </ImgWrapper>
        <ImgWrapper>
          <Img src={print2} alt="Высокая детализация нанесения на чехол" >
            <Advantage>Высокая <br />детализация</Advantage>
          </Img>
        </ImgWrapper>
      </Advantages>
    </ResponsiveWrapper>
    <DescriptionWrapper>
      <Description>
          Фото переносится на чехол с помощью стойкого нанесения на специальном оборудовании.
          Изображение не стирается со временем, устойчиво с царапинам.
          Можно наносить как черно-белые изображения,
          так и красочные полноцветные с высокой детализацией.
      </Description>
    </DescriptionWrapper>
    <StyledButton onClick={props.handleOpen}>
      Заказать
    </StyledButton>
  </Wrapper>
);
