import React from 'react';
import styled from 'styled-components';
import advantage1 from './advantage-1.jpg';
import advantage3 from './advantage-3.jpg';
import advantage from './advantage.jpg';

const Wrapper = styled.div`
  text-align: center;
  padding: 50px 0 30px 0;
`;

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #4a4a4a
`;

const ImgWrapper = styled.div`

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
`;

const Advantages = styled.div`
  padding-top: 20px;
`;

export default () => (
  <Wrapper>
    <H2>Наши преимущества</H2>
    <Advantages>
      <ImgWrapper>
        <Img src={advantage1}>
          <Advantage>Натуральное <br />дерево</Advantage>
        </Img>
      </ImgWrapper>
      <ImgWrapper>
        <Img src={advantage}>
          <Advantage>Рельефная <br />фактура</Advantage>
        </Img>
      </ImgWrapper>
      <ImgWrapper>
        <Img src={advantage3}>
          <Advantage>Основа <br />soft-touch</Advantage>
        </Img>
      </ImgWrapper>
    </Advantages>
  </Wrapper>
);
