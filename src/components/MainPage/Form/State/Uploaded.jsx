import React from 'react';
import styled from 'styled-components';

const UploadedFileWrapper = styled.div`
  margin: 10px 30px;
  border-radius: 4px;
  border: solid 1px #cccccc;
  padding-bottom: 5px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadedFile = styled.img`
  ${({ isHorizontal }) => (isHorizontal ? 'max-width: 300px;' : 'height: inherit')};
  width: ${({ isHorizontal }) => (isHorizontal ? '80%' : 'initial')};
`;

const RemoveUploadedImageLink = styled.div`
  font-family: 'Lato-Regular';
  color: red;
  border-bottom: 1px dashed red;
  padding: 2px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const ImgWrapper = styled.div`
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isHorizontal }) => (isHorizontal ? 'display: flex; flex-direction: column; align-items: center;' : '')}
`;

export default ({ filePath, isHorizontal, handleRemoveImage }) => (
  <UploadedFileWrapper>
    <ImgWrapper isHorizontal={isHorizontal}>
      <UploadedFile isHorizontal={isHorizontal} src={`/${filePath}`} />
    </ImgWrapper>
    <RemoveUploadedImageLink onClick={handleRemoveImage}>Удалить</RemoveUploadedImageLink>
  </UploadedFileWrapper>
);

