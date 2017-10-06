import React from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import white from './23_girl_front_bamb_white.jpg';
import dark from './22_sailor_2_front_red_white.jpg';
import RubleSign from '../../generic/RubleSign';

const Wrapper = styled.div`
  padding-bottom: 60px;
  padding-top: 60px;
  background-color: #fff;
  
  @media (min-width: 768px) {
    padding-top: 120px;
    display: flex;
    justify-content: center;
  }
`;

const ResponsiveWrapper = styled.div`
  @media (min-width: 768px) {
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

const CaseWrapper = styled(Link)`
  color: black;
  text-align: cener;
  font-size: 16px;
  font-family: 'Lato-Regular';
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

const Price = styled.div`
  height: 80px;
  font-size: 24px;
  font-family: 'Lato-Regular';
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
        Загрузите свое изображение <br />
        <H2Light>и мы вышлем вам макет<br /> вашего будущего чехла</H2Light>
      </H2>
      <Cases>
        <CaseWrapper to="#">
          <Case src={white} />
          <div>Гравировка <br />по фотографии</div>
        </CaseWrapper>
        <Price>1290<RubleSign /></Price>
        <CaseWrapper to="/product/59c54598c9ae0a42557fa1a1">
          <Case src={dark} />
          <div>Гравировка <br />по картинке</div>
        </CaseWrapper>
      </Cases>
    </ResponsiveWrapper>
  </Wrapper>
);
