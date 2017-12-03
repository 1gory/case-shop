import React from 'react';
import Gallery from 'react-grid-gallery';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 10px;

  @media (min-width: 768px) {
    margin 0 auto;
    max-width: 1170px;
  }
`;

const ClearBlock = styled.div`
  clear: both;
`;

const IMAGES =
  [
    {
      src: '/gallery/1.jpg',
      thumbnail: '/gallery/1.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/2.jpg',
      thumbnail: '/gallery/2.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/3.jpg',
      thumbnail: '/gallery/3.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/5.jpg',
      thumbnail: '/gallery/5.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/6.jpg',
      thumbnail: '/gallery/6.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/4.jpg',
      thumbnail: '/gallery/4.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/7.jpg',
      thumbnail: '/gallery/7.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/9.jpg',
      thumbnail: '/gallery/9.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/8.jpg',
      thumbnail: '/gallery/8.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
  ];

export default () => (
  <Wrapper>
    <Gallery images={IMAGES} enableImageSelection={false} rowHeight="250" />
    <ClearBlock />
  </Wrapper>
);
