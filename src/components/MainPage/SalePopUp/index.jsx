/* eslint no-param-reassign: 0 */

import React from 'react';
import styled from 'styled-components';
import Button from '../../generic/Form/Buttons/TransparentButton';
import modalClose from '../../../icons/modal-close.svg';
import Popup from '../../generic/Popup/index';

const WrapperH3 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #fe5e5e;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 13px;
  height: 13px;
  padding-top: 5px;
  cursor: pointer;
`;

const Text = styled.p`
  text-align: center;
`;

// const Price = styled.div`
//   display: inline-block;
//   font-size: 22px;
//   padding-top: 15px;
//   padding-bottom: 25px;
// `;

const StyledButton = styled(Button)`
  color: green;
  border: 1px solid green;
  margin-top: 0;
  
   &:hover {
    border: solid 1px #fff;
    background: #59cb78;  
    color: #fff; 
  }
`;

export default props => (
  <Popup isOpened={props.isOpened}>
    <WrapperH3>
      <H3>Внимание!</H3>
      <StyledImg onClick={props.handleClose} src={modalClose} />
    </WrapperH3>
    <Text>К сожалению, интернет-магазин закрыт,<br />
      если вас интересует вопрос приобретения, можете связаться с нами:
      <br />
      <br />
      <a href="https://api.whatsapp.com/send?phone=79162282456">
        <StyledButton>Связаться</StyledButton>
      </a>
    </Text>
  </Popup>
);
