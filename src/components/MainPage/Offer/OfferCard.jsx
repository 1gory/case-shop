import React from 'react';
import styled from 'styled-components';
import Button from './../../generic/Form/Buttons/TransparentButton';
import RubleSign from './../../generic/RubleSign';

const Wrapper = styled.div`
  text-align: center;
  height: 350px;
  padding-top: 15px;
  
  @media (min-width: 768px) {
    height: 480px;
    padding-top: 100px;
  }
`;

const BuyButton = styled(Button)`
  background: #fff;
  border: none;
  margin-bottom: 30px;
  margin-top: 0;
`;

const Background = styled.div`
  background-image: url(${({ image }) => image});
  position: relative;
  background-size: cover;
  height: 100%;
`;

const Name = styled.h3`
  color: #fff;
  font-family: 'Lato-Regular',sans-serif;
  font-size: 18px;
  font-weight: bolder;
`;

const Description = styled.p`
  opacity: 0.7;
  font-family: 'Lato-Light',sans-serif;
  color: #fff;
  margin: 0;
  padding: 0 30px;
`;

const Price = styled.div`
  padding: 40px;
  font-family: 'Lato-Regular',sans-serif;
  font-size: 21px;
  color: #fff;
`;

const Shadow = styled.div`
  background: linear-gradient(to bottom, transparent, black) no-repeat bottom;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Section = styled.section``;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default ({ name, description, price, image, onClick }) => (<Wrapper>
  <Background image={image}>
    <Shadow />
    <CardContent>
      <Section>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Section>
      <Price>{price}<RubleSign height={15} white /></Price>
      <BuyButton onClick={onClick}>
        Заказать
      </BuyButton>
    </CardContent>
  </Background>
</Wrapper>);
