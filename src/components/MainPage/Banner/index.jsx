import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import './styles.css';

const Banner = styled.div`
  background-size: cover;
  height: 450px;
  color: white;
  
  @media (min-width: 768px) {
    height: 660px;
  }
`;

const scroller = Scroll.scroller;

const Pixel = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
`;

const Button = styled.button`
  font-family: 'Lato-Regular', sans-serif;
  border: 1px solid white;
  color: white;
  background: none;
  padding: 15px 40px;
  border-radius: 30px;
  margin-top: 45px;
  font-size: 20px;
  cursor: pointer;
  
  @media (min-width: 768px) {
    margin-top: 60px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: 140px;
  
  @media (min-width: 768px) {
    margin-top: 200px;
  }
`;

const Header = styled.div`
  font-family: 'Lato-Regular', sans-serif;
  font-size: 24px;
  
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const MainHeader = styled.span`
  font-family: 'Lato-Light', sans-serif;
`;

const handleClick = () => {
  scroller.scrollTo('CatalogAncor', {
    duration: 800,
    delay: 100,
    smooth: true,
  });
};

export default () => (
  <Banner className="main-banner">
    <Pixel className="main-banner-pixel" />
    <Wrapper>
      <Header>
        <MainHeader>Качественные деревянные чехлы</MainHeader><br />
        c вашей гравировкой
      </Header>
      <Button onClick={handleClick}>
        Примеры гравировок
      </Button>
    </Wrapper>
  </Banner>
);

