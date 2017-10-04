import React from 'react';
import styled from 'styled-components';
import preloader from '../../../generic/Icons/preloader.svg';
import Form from '../../../generic/UploadFileForm/FormWrap';

const PreloaderWrapper = styled.div`
  padding: 86px;
  text-align: center;
`;

export default () => (
  <Form>
    <PreloaderWrapper>
      <img src={preloader} alt="preloader" />
    </PreloaderWrapper>
  </Form>
);
