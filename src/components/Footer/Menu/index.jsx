import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ym from 'react-yandex-metrika';
import instagramIcon from '../../generic/Icons/contact-social-insta.svg';
import vkIcon from '../../generic/Icons/contact-social-vk.svg';
import logoYoutube from '../../generic/Icons/contact-social-youtube.svg';
import visa from '../../generic/Icons/payments/visa.svg';
import maestro from '../../generic/Icons/payments/maestro.svg';
import mastecard from '../../generic/Icons/payments/mastercard.svg';
import sbOnline from '../../generic/Icons/payments/sb_online.svg';
import mir from '../../generic/Icons/payments/mir.svg';
import qiwi from '../../generic/Icons/payments/qiwi.svg';

const Wrapper = styled.div`
  background-color: #272727;
  padding: 20px;
`;

const MenuWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    justify-content: space-between;
    max-width: 970px;
    flex-direction: row;
  }
`;

const MenuLink = styled(Link)`
  display: ${({ onlyDesktop }) => (onlyDesktop ? 'none' : 'block')};
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-family: 'Lato-Light';
  font-size: 16px;
  line-height: 1.88em;
  
  @media (min-width: 768px) {
    display: inline-block;
    padding-left: 25px;
  }
`;

const Icon = styled.img`
  width: 50px;
  margin: 10px;
`;

const SocialNetworksIcons = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const FooterMenu = styled.div`
  padding: 10px;
`;

const PaymentIcons = styled.div`
  padding: 10px;
  text-align: center;
`;

const PaymentServiceLogo = styled.img`
  height: 25px;
  padding: 5px 0 5px 15px;
`;

export default () => (
  <Wrapper>
    <MenuWrapper>
      <FooterMenu>
        <MenuLink to="/">Главная</MenuLink>
        <MenuLink to="/gallery">Галерея</MenuLink>
        <MenuLink to="/catalog">Каталог</MenuLink>
        <MenuLink to="/cooperation" onlyDesktop>Сотрудничество</MenuLink>
        <MenuLink to="/delivery">Доставка</MenuLink>
      </FooterMenu>

      <PaymentIcons>
        <PaymentServiceLogo src={visa} alt="Оплата картой visa" />
        <PaymentServiceLogo src={maestro} alt="Оплата картой maestro" />
        <PaymentServiceLogo src={mastecard} alt="Оплата картой mastercard" />
        <PaymentServiceLogo src={sbOnline} alt="Оплата через сбербанк онлайн" />
        <PaymentServiceLogo src={mir} alt="Оплата картой МИР" />
        <PaymentServiceLogo src={qiwi} alt="Оплата через Киви" />
      </PaymentIcons>
    </MenuWrapper>

    <SocialNetworksIcons>
      <a href="https://vk.com/casewoodru" onClick={() => (ym('reachGoal', 'gotovk'))}>
        <Icon src={vkIcon} />
      </a>
      <a href="https://instagram.com/casewood.ru/" onClick={() => (ym('reachGoal', 'gotoinstagram'))}>
        <Icon src={instagramIcon} />
      </a>
      <a href="https://youtube.com/channel/UCRhZ8w5tkM5PE74Fq3q4ESQ" onClick={() => (ym('reachGoal', 'gotoyoutube'))}>
        <Icon src={logoYoutube} alt="CASEWOOD YouTube" />
      </a>
    </SocialNetworksIcons>
  </Wrapper>
);
