import React from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';
import photo from './photo.jpg';
import caseWithEngraving from './case.jpg';
import arrow from './arrow.svg';
import RubleSign from '../../generic/RubleSign';
// import Button from '../../generic/Form/Buttons/GhostButton';

const Wrapper = styled.div`
  padding-bottom: 60px;
  padding-top: 60px;
  background-color: #fff;
  
  // @media (min-width: 768px) {
  //   padding-top: 120px;
  //   display: flex;
  //   justify-content: center;
  // }
`;

const ResponsiveWrapper = styled.div`
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 100%;
    max-width: 970px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const H2 = styled.h2`
  color: #7f5152;
  font-size: 24px;
  text-align: center;
  font-family: 'Lato-Regular';
  padding-bottom: 40px;
  margin: 0;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const H2Light = styled.span`
  font-family: 'Lato-Light';
  display: inline-block;
  padding-top: 5px;
`;

const Cases = styled.div`
  overflow: hidden;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const Case = styled.img`
  width: 145px;
  padding-bottom: 15px;
`;

const CaseWrapper = styled.div`
  color: black;
  text-align: cener;
  font-size: 16px;
  font-family: 'Lato-Regular';
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

const Arrow = styled.img`
  width: 55px;
  padding-bottom: 70px;
`;

const Price = styled.div`

  font-size: 24px;
  font-family: 'Lato-Regular';
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
`;

const SpecialOffer = styled.div`
  font-family: 'Lato-Light';
  color: #ff5657;
  padding-top: 15px;
`;

const scroller = Scroll.scroller;

const handleClick = () => {
  scroller.scrollTo('FileFormAnchor', {
    duration: 800,
    delay: 100,
    smooth: true,
  });
};

export default () => (
  <Wrapper>
    <ResponsiveWrapper>
      <H2 onClick={handleClick}>
        Загрузите свое изображение<br />
        <H2Light>Бесплатно подготовим макет</H2Light>
        <SpecialOffer>И дарим защитное стекло в подарок!</SpecialOffer>
      </H2>
      <div>
        <Cases>
          <CaseWrapper>
            <Case src={photo} />
            <div>Ваша <br />картинка</div>
          </CaseWrapper>
          <Arrow src={arrow} />
          <CaseWrapper>
            <Case src={caseWithEngraving} />
            <div>Гравировка <br />на чехле</div>
          </CaseWrapper>
        </Cases>
        <PriceWrapper>
          <Price>1290<RubleSign /></Price>
        </PriceWrapper>
      </div>
    </ResponsiveWrapper>
  </Wrapper>
);
