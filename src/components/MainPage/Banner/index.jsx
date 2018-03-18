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
`;

const MainHeader = styled.h1`
  font-weight: lighter; 
  margin: 5px;
  font-family: 'Lato-Light', sans-serif;
  font-size: 24px;
  
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const SubHeader = MainHeader.withComponent('h2');

const SubHeaderExtended = styled(SubHeader)`
  font-weight: bold; 
`;

const handleClick = () => {
  scroller.scrollTo('GalleryAnchor', {
    duration: 800,
    delay: 100,
    smooth: true,
  });
};

export default ({ data }) => (
  <Banner className={data.banner ? data.banner : 'main-banner'}>
    <Pixel className="main-banner-pixel" />
    <Wrapper>
      <Header>
        { data.sign }
        { data.code === 'default' ? <div>
          <MainHeader>Деревянные чехлы для iPhone</MainHeader>
          <SubHeaderExtended>c вашей гравировкой</SubHeaderExtended>
        </div> : ''}
      </Header>
      <Button onClick={handleClick}>
        Примеры гравировок
      </Button>
    </Wrapper>
  </Banner>
);

