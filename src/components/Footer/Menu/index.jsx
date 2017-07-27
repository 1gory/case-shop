import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import instagramIcon from './contact-social-insta.svg';
import vkIcon from './contact-social-vk.svg';

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
  width: 150px;
  text-align: center;
`;

const FooterLinks = styled.div`
  padding: 10px;
`;

export default () => (
  <Wrapper>
    <FooterLinks>
      <LinkWrapper>
        <StyledLink to="/catalog">Работы</StyledLink>
      </LinkWrapper>

      <LinkWrapper>
        <StyledLink to="/delivery">Доставка</StyledLink>
      </LinkWrapper>

      {/* <LinkWrapper>*/}
      {/* <StyledLink to="/">Контакты</StyledLink>*/}
      {/* </LinkWrapper>*/}

      {/* <LinkWrapper>*/}
      {/* <StyledLink to="/">Сотрудничество</StyledLink>*/}
      {/* </LinkWrapper>*/}
    </FooterLinks>

    <SocialNetworksIcons>
      <a href="https://vk.com/casewoodru">
        <Icon src={vkIcon} />
      </a>
      <a href="https://instagram.com/casewood.ru/">
        <Icon src={instagramIcon} />
      </a>
    </SocialNetworksIcons>
  </Wrapper>
);
