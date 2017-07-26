import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px;
`;

const FileLabel = styled.label`
  font-size: 22px;
  color: white;
  background-color: #3b3b3b;
  display: inline-block;
  cursor: pointer;
  font-family: 'Lato-Light';
  font-size: 16px;
  width: 100%;
  text-align: left;
  border-radius: 20px;
  padding: 10px 20px;
  box-sizing: border-box;

  & input {
    width: 0.1px !important;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`;

const ChoseInputTitle = styled.div`
  padding: 30px 0;
  color: #4a4a4a;
`;

export default props => (
  <Wrapper>
    <FileLabel>
      Выберите файл..
      <input
        onChange={props.handleChangeFile}
        type="file"
        accept="image/x-png,image/gif,image/jpeg"
      />
    </FileLabel>
    <ChoseInputTitle>или вставьте ссылку</ChoseInputTitle>
    <input
      placeholder="http://"
      type="text"
      onBlur={props.handleChangeLinkToPhoto}
    />
  </Wrapper>
);
