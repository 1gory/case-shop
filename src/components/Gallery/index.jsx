/* eslint-disable no-param-reassign */

import React from 'react';
import ym from 'react-yandex-metrika';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Header from '../Header';
import BreadCrumbs from '../generic/BreadCrumbs';
import Gallery from '../generic/Gallery';
import Footer from '../Footer';
import logoInsta from '../generic/Icons/contact-social-insta.svg';
import logoVk from '../generic/Icons/contact-social-vk.svg';

const Section = styled.section`
  @media (min-width: 768px) {
    max-width: 1170px;
    margin: 0 auto;
  }
`;

const GalleryWrapper = styled.div`
  padding-top: 30px;
`;

const Sign = styled.span`
  padding: 50px 0;
  font-family: 'Lato-Regular';
  text-align: center;
  display: block;
`;

const LogoSocial = styled.img`
  padding: 20px 10px;
  width: 50px;
`;

const images =
  [
    {
      src: '/gallery/1.jpg',
      thumbnail: '/gallery/thumbnail/1.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/2.jpg',
      thumbnail: '/gallery/thumbnail/2.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/3.jpg',
      thumbnail: '/gallery/thumbnail/3.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/5.jpg',
      thumbnail: '/gallery/thumbnail/5.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/6.jpg',
      thumbnail: '/gallery/thumbnail/6.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/4_2.jpg',
      thumbnail: '/gallery/thumbnail/4_2.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/7.jpg',
      thumbnail: '/gallery/thumbnail/7.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/8.jpg',
      thumbnail: '/gallery/thumbnail/8.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/9.jpg',
      thumbnail: '/gallery/thumbnail/9.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    // ////////////////////////////////////////////
    {
      src: '/gallery/10.jpg',
      thumbnail: '/gallery/10.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/11.jpg',
      thumbnail: '/gallery/11.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/12.jpg',
      thumbnail: '/gallery/12.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/13.jpg',
      thumbnail: '/gallery/13.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/14.jpg',
      thumbnail: '/gallery/14.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/15.jpg',
      thumbnail: '/gallery/15.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/17.jpg',
      thumbnail: '/gallery/17.jpg',
      thumbnailWidth: 210,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/16.jpg',
      thumbnail: '/gallery/16.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/18.jpg',
      thumbnail: '/gallery/18.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/21.jpg',
      thumbnail: '/gallery/21.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/19.jpg',
      thumbnail: '/gallery/19.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/20.jpg',
      thumbnail: '/gallery/20.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/22.jpg',
      thumbnail: '/gallery/22.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/23.jpg',
      thumbnail: '/gallery/23.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/24.jpg',
      thumbnail: '/gallery/24.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/25.jpg',
      thumbnail: '/gallery/25.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/28.jpg',
      thumbnail: '/gallery/28.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/26.jpg',
      thumbnail: '/gallery/26.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/27.jpg',
      thumbnail: '/gallery/27.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/29.jpg',
      thumbnail: '/gallery/29.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/30.jpg',
      thumbnail: '/gallery/30.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/31.jpg',
      thumbnail: '/gallery/31.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/32.jpg',
      thumbnail: '/gallery/32.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
  ];

export default () => (
  <div>
    <Helmet>
      <title>Галерея работ | Деревянные чехлы для iPhone Casewood</title>
      <meta
        name="description"
        content="Галерея готовых работ.
        Еще больше фото смотрите в нашем instagram и группе вконтакте"
      />
    </Helmet>
    <Header />
    <Section>
      <BreadCrumbs
        breadcrumbs={[
          { name: 'Галерея', link: '/gallery' },
        ]}
      />

      <GalleryWrapper>
        <Gallery images={images} />
      </GalleryWrapper>

      <Sign>
        Еще больше примеров работ в нашей группе vk и в нашем instagram:
        <div>
          <a
            href="https://instagram.com/casewood.ru/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (ym('reachGoal', 'gotoinstagram'))}
          >
            <LogoSocial src={logoInsta} alt="CASEWOOD Instagram" />
          </a>
          <a
            href="https://vk.com/casewoodru"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => (ym('reachGoal', 'gotovk'))}
          >
            <LogoSocial src={logoVk} alt="CASEWOOD VK" />
          </a>
        </div>
      </Sign>

    </Section>
    <Footer />
  </div>
);
