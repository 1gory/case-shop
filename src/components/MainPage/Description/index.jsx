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
      У нас вы можете купить деревянные чехлы с гравировкой на айфон любых моделей:<br />
      <Link to="/product/derevyannyj-chekhol-dlya-iphone-5">
        iPhone 5
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-5s">
        iPhone 5s
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-se">
        iPhone SE
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-6">
        iPhone 6
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-6-plus">
      iPhone 6 Plus
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-6s">
        iPhone 6s
      </Link>, <br /> <Link to="/product/derevyannyj-chekhol-dlya-iphone-6s-plus">
        iPhone 6s Plus
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-7">
        iPhone 7
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-7-plus">
        iPhone 7 Plus
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-8">
        iPhone 8
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-8-plus">
        iPhone 8 Plus
      </Link>, <Link to="/product/derevyannyj-chekhol-dlya-iphone-x">
        iPhone X
      </Link>
      <br />
      Мы находимся в городе Москве, <Link to="/delivery">
      но отправляем заказы по всей России и СНГ</Link>.<br />
      Быстрая доставка по Москве. Самовывоз - бесплатно.
    </DescriptionWrapper>
  </Wrapper>
);
