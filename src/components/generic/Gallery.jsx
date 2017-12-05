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

export default ({ images }) => (
  <Wrapper>
    <Gallery images={images} enableImageSelection={false} rowHeight="250" />
    <ClearBlock />
  </Wrapper>
);
