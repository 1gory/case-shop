import React from 'react';
import styled from 'styled-components';
import white from './white.jpg';
import dark from './dark.jpg';
import RubleSign from '../../RubleSign';

const Wrapper = styled.div`
  padding-bottom: 60px;
  background-color: #fff;
`;

const H2 = styled.h2`
  color: #7f5152;
  font-size: 24px;
  font-family: 'Lato-SemiBold';
  text-align: center;
  padding-top: 60px;
  padding-bottom: 40px;
  margin: 0;
`;

const H2Light = styled.span`
  font-family: 'Lato-Light';
`;

const Cases = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const Case = styled.img`
  width: 120px;
  padding-bottom: 15px;
`;

const CaseWrapper = styled.div`
  color: black;
  text-align: cener;
  font-size: 16px;
  font-family: 'Lato-SemiBold';
`;

const Price = styled.div`
  height: 80px;
  font-size: 24px;
  font-family: 'Lato-Regular';
`;

export default () => (
  <Wrapper>
    <H2>
      Загрузите свое изображение <br/>
    <H2Light>и мы вышлем вам макет<br/> вашего будущего чехла</H2Light>
    </H2>
    <Cases>
      <CaseWrapper>
        <Case src={white} />
        <div>Гравировка <br />по фотографии</div>
      </CaseWrapper>
      <Price>1290<RubleSign/></Price>
      <CaseWrapper>
        <Case src={dark} />
        <div>Гравировка <br />по картинке</div>
      </CaseWrapper>
    </Cases>
  </Wrapper>
);
