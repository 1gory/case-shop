import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${props => (props.isOpened ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Popup = styled.div`
  padding: 30px;
  margin: 0 20px;
  font-family: 'Lato-Regular';
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  background-color: #ffffff;
  border-radius: 5px;
  width: 350px;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
`;

export default props => (
  <Wrapper isOpened={props.isOpened}>
    <Popup>
      {props.children}
    </Popup>
  </Wrapper>
);
