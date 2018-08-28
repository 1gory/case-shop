import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 20px;
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #3b3b3b;

  @media (min-width: 768px) {
    text-align: center;
    width: 1170px;
    margin: 0 auto;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 0 20px;
`;

const Link = styled(RouterLink)`
  color: inherit; 
`;

export default () => (
  <Wrapper>
    <DescriptionWrapper>
      У нас вы можете купить деревянные чехлы с гравировкой на айфон любых моделей.<br />
      Мы находимся в городе Москве, <Link to="/delivery">
      но отправляем заказы по всей России и СНГ</Link>.<br />
      Быстрая доставка по Москве. Самовывоз - бесплатно.
    </DescriptionWrapper>
  </Wrapper>
);
