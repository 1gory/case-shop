import React from 'react';
import styled from 'styled-components';
import Gallery from '../../generic/Gallery';
import Button from '../../generic/Form/Buttons/PrimaryButton';

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
  padding: 20px;
  color: #3b3b3b;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
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


export default ({ handleOpen }) => (
  <Wrapper>
    <PackagingWrapper>
      <H2>Упаковка</H2>
      <Gallery images={images} />
      <Description>
        Мы отправляем посылки в специальных плотных конвертах c воздушной подушкой,
        для защиты от ударов и повреждений.
        <br />Также изготавливаем деревянные шкатулки из фанеры c индивидуальным дизайном,
        гравировкой и надписями.
      </Description>

      <StyledButton onClick={handleOpen}>
        Заказать
      </StyledButton>
    </PackagingWrapper>
  </Wrapper>
);
