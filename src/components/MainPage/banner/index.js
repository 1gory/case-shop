import React from 'react';
import styled from 'styled-components';
import background from './sb-min.jpg';
import pixel from './pixel.png';

const Banner = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 450px;
  color: white;
`;

const Pixel = styled.div`
  background: url(${pixel}) repeat;
  width: 100%;
  height: inherit;
  position: absolute;
`;

const Button = styled.button`
  border: 1px solid white;
  color: white;
  background: none;
  padding: 15px 40px;
  border-radius: 30px;
  margin-top: 45px;
  font-size: 20px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: 140px;
`;

const Header = styled.div`
  font-family: 'Lato-Medium';
  font-size: 24px;
`;

const MainHeader = styled.span`
  font-family: 'Lato-Light';
`;

export default () => (
  <Banner>

      <Pixel>
      </Pixel>

      <Wrapper>
        <Header>
          <MainHeader>Качественные деревянные чехлы</MainHeader><br />
          c вашей гравировкой
        </Header>
        <Button>
          Примеры гравировок
        </Button>
      </Wrapper>

  </Banner>
)
