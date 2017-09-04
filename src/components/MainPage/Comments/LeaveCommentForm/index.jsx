import React from 'react';
import styled from 'styled-components';
import ImageInput from '../../../generic/Form/ImageInput';
import Input from '../../../generic/Form/MessageInput';
// import TextInput from '../../../generic/Form/TextInput';
import Button from '../../../generic/Form/Buttons/GhostButton';

const Wrapper = styled.form`
  padding: 0 60px;
`;

const H4 = styled.h4`
  font-family: 'Lato-SemiBold'; 
`;

const MessageInput = styled(Input)`
  margin: 10px 0;
`;

export default () => (
  <Wrapper>
    <H4>Ваш отзыв:</H4>
    <ImageInput handleChangeFile={() => (null)} />
    <MessageInput
      handleChangeForm={() => (null)}
      rows="4"
      placeholder="Напишите ваше Имя, город и сообщение"
    />
    <Button>Отправить</Button>
  </Wrapper>
);
