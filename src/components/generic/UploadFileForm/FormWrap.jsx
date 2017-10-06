import React from 'react';
import styled from 'styled-components';
import '../../MainPage/Form/styles.css';

const FileForm = styled.form`
  // min-height: 210px;
  padding: 10px;
  background-color: #ebebeb;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  border-radius: 4px;
  
  @media (min-width: 768px) {
    width: 425px;
  }
`;

export default props => (
  <FileForm>
    {props.children}
  </FileForm>
);
