import React from 'react';
import styled from 'styled-components';

const MessageInput = styled.textarea`
  resize: none;
  padding-top: 10px;
  
  border: 1px solid #cccccc;
  border-radius: 20px;
  padding: 8px 15px;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Lato-Regular';
  color: #4a4a4a;
`;

export default ({ className, handleChangeForm, placeholder, rows }) => (
  <MessageInput
    className={className}
    placeholder={placeholder}
    type="text"
    rows={rows}
    name="message"
    onChange={handleChangeForm}
  />
);
