import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 20px;
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #3b3b3b;

  @media (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
  }
`;

const Link = styled(RouterLink)`
  color: inherit; 
`;

export default () => (
  <Wrapper>
    У нас вы можете заказать деревянные чехлы на айфон любых моделей.<br />
    Мы находимся в городе Москве, <Link to="/delivery">
    но отправляем заказы по всей России и СНГ</Link>.<br />
    Быстрая доставка по Москве. Самовывоз - бесплатно.
  </Wrapper>
);
