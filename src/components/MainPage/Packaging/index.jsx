import React from 'react';
import styled from 'styled-components';
import Gallery from '../../generic/Gallery';

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #4a4a4a;
`;

const Wrapper = styled.div`
  background: #fff;
`;

const PackagingWrapper = styled.div`
  padding: 10px 0 50px 0;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
  }
`;

const Description = styled.div`
  text-align: left;
  padding: 20px 10px;
  color: #3b3b3b;
`;

const images =
  [
    {
      src: '/packaging/1.jpg',
      thumbnail: '/packaging/thumbnail/1.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/packaging/2.jpg',
      thumbnail: '/packaging/thumbnail/2.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/packaging/3.jpg',
      thumbnail: '/packaging/thumbnail/3.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
  ];


export default () => (
  <Wrapper>
    <PackagingWrapper>
      <H2>Упаковка</H2>
      <Gallery images={images} />
      <Description>
        Мы отправляем посылки в специальных защитных конвертах,
        чтобы исключить возможность повреждения.
        <br />Специально для вас сделаем деревянную коробочку c гравировкой и надписями.
      </Description>
    </PackagingWrapper>
  </Wrapper>
);
