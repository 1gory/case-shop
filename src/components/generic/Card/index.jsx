import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RubleSign from '../RubleSign';

const WrapperLink = styled(Link)`
  text-decoration: none;
  color: #4a4a4a;
`;

const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  margin-top: 30px;
  border-radius: 4px;
  cursor: pointer;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  
  // for desktop version
  // &:hover {
  //   box-shadow: 0 4px 0px 0 rgba(54, 54, 54, 0.7);
  // }
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

export default props => (
  <WrapperLink to={`/product/${props.id}`}>
    <Card>
      <Img src={props.image} />
      <Name>{props.name}</Name>
      <Price>{props.price}<RubleSign /></Price>
    </Card>
  </WrapperLink>
);
