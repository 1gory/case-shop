import React from 'react';
import styled from 'styled-components';

const UploadedFileWrapper = styled.div`
  border-radius: 4px;
  border: solid 1px #cccccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadedFile = styled.img`
  width: 80%;
`;

const RemoveUploadedImageLink = styled.div`
  font-family: 'Lato-Regular';
  color: red;
  border-bottom: 1px dashed red;
  padding: 3px;
  margin: 10px;
`;

export default () => (
  <UploadedFileWrapper>
    <UploadedFile src="https://facebook.github.io/react/img/logo.svg" />
    <RemoveUploadedImageLink>Удалить</RemoveUploadedImageLink>
  </UploadedFileWrapper>
);

