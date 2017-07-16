import React from 'react';
import styled from 'styled-components';
import RubleSign from '../RubleSign';
import dummy from './16.jpg';

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  margin-top: 30px;
  border-radius: 4px;
  cursor: pointer;
  padding-bottom: 30px;

//For desktop version
  ${'' /* &:hover {
    box-shadow: 0 4px 0px 0 rgba(54, 54, 54, 0.7);
  } */}
`;

const Img = styled.img`
  width: 80px;
  display: block;
  margin: 0 auto;
`;

const Name = styled.div`
  font-family: 'Lato-Bold';
  text-transform: uppercase;
  font-size: 16px;
  padding-top: 40px;
  padding-bottom: 20px;
`;

const Price = styled.div`
  font-family: 'Lato-Regular';
  font-size: 18px;
  color: #222222;
`;

export default () => (
  <Card>
    <Img src={dummy} />
    <Name>Flower Pattern</Name>
    <Price>1290<RubleSign/></Price>
  </Card>
);
