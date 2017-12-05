import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ym from 'react-yandex-metrika';
import instagramIcon from '../../generic/Icons/contact-social-insta.svg';
import vkIcon from '../../generic/Icons/contact-social-vk.svg';
import logoYoutube from '../../generic/Icons/contact-social-youtube.svg';

const Wrapper = styled.div`
  background-color: #272727;
  padding: 20px;
`;

const LinkWrapper = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-family: 'Lato-Light';
  font-size: 16px;
  line-height: 1.88em;
`;

const Icon = styled.img`
  width: 50px;
  margin: 10px;
`;

const SocialNetworksIcons = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const FooterLinks = styled.div`
  padding: 10px;
`;

export default () => (
  <Wrapper>
    <FooterLinks>
      <LinkWrapper>
        <StyledLink to="/">Главная</StyledLink>
      </LinkWrapper>

      <LinkWrapper>
        <StyledLink to="/catalog">Работы</StyledLink>
      </LinkWrapper>

      <LinkWrapper>
        <StyledLink to="/delivery">Доставка</StyledLink>
      </LinkWrapper>

      {/* <LinkWrapper> */}
      {/* <StyledLink to="/">Сотрудничество</StyledLink> */}
      {/* </LinkWrapper> */}
    </FooterLinks>

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
