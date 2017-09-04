import React, { Component } from 'react';
import styled from 'styled-components';
import modalClose from '../../../../icons/modal-close.svg';
import ImageInput from '../../Form/ImageInput';

const Wrapper = styled.div`
  padding: 30px;
  text-align: center;
`;

const ChoseInputTitle = styled.div`
  padding: 30px 0;
  color: #4a4a4a;
`;

const InputLinkWrapper = styled.div`
  position: relative;
  
  & input {
    font-family: 'Lato-Regular';
    width: 100%;
    border-radius: 20px;
    border: solid 1px #cccccc;
    background: none;
    padding: 10px 20px;
    color: rgba(74, 74, 74, 0.5);
    box-sizing: border-box;
  }

  & input::placeholder {
    color: #9a9a9a;
  }
`;

const CancelIcon = styled.img`
  width: 15px;
  position: absolute;
  top: 14px;
  right: -25px;
  display: ${({ isInputEmpty }) => (isInputEmpty ? ' none' : 'block')};
`;

const DoneButton = styled.span`
  color: #4a4a4a;
  font-size: 14px;
  border-bottom: 1px dashed #4a4a4a;;
  display: ${({ isInputEmpty }) => (isInputEmpty ? ' none' : 'initial')};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50px;
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      linkToPhoto: '',
      isInputEmpty: true,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeLinkToPhoto = this.handleChangeLinkToPhoto.bind(this);
  }

  handleClick() {
    this.setState({
      linkToPhoto: '',
      isInputEmpty: true,
    });
  }

  handleChangeLinkToPhoto(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    state.isInputEmpty = !e.target.value;
    this.setState(state);
  }

  render() {
    return (
      <Wrapper>
        <ImageInput handleChangeFile={this.props.handleChangeFile} />
        <ChoseInputTitle>или вставьте ссылку</ChoseInputTitle>
        <InputLinkWrapper>
          <input
            placeholder="http://"
            type="text"
            onChange={this.handleChangeLinkToPhoto}
            value={this.state.linkToPhoto}
            name="linkToPhoto"
          />
          <CancelIcon
            src={modalClose}
            onClick={this.handleClick}
            isInputEmpty={this.state.isInputEmpty}
          />
          <ButtonWrapper>
            <DoneButton
              isInputEmpty={this.state.isInputEmpty}
              onClick={() => this.props.handleSendLinkToPhoto(this.state.linkToPhoto)}
            >
              Готово
            </DoneButton>
          </ButtonWrapper>
        </InputLinkWrapper>
      </Wrapper>
    );
  }
}
