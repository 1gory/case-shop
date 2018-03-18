import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import TransparentButton from '../../generic/Form/Buttons/TransparentButton';
import Gallery from '../../generic/Gallery';

const GalleryAnchor = Scroll.Element;

const ToGalleryButton = TransparentButton.withComponent(Link);

const GalleryWrapper = styled.div`
  padding: 10px 0 60px 0;
  
  @media (min-width: 768px) {
    max-width: 1170px;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  background: #fff;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H2 = styled.h2`
  margin-top: 0;
  padding-top: 30px;
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #4a4a4a;
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
      src: '/gallery/4.jpg',
      thumbnail: '/gallery/thumbnail/4.jpg',
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
      src: '/gallery/9.jpg',
      thumbnail: '/gallery/thumbnail/9.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/8.jpg',
      thumbnail: '/gallery/thumbnail/8.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
  ];

export default () => (
  <Wrapper>
    <GalleryWrapper>
      <GalleryAnchor name="GalleryAnchor" />
      <H2>Примеры работы</H2>
      <Gallery images={images} />

      <ButtonWrapper>
        <ToGalleryButton to="/gallery">
          Еще примеры
        </ToGalleryButton>
      </ButtonWrapper>
    </GalleryWrapper>
  </Wrapper>
);
