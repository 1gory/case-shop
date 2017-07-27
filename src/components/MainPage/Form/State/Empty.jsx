import React, { Component } from 'react';
import styled from 'styled-components';
import modalClose from '../../../icons/modal-close.svg';

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

const InputLinkWrapper = styled.div`
  position: relative;
`;

const CancelIcon = styled.img`
  width: 15px;
  position: absolute;
  top: 14px;
  right: -25px;
  display: ${({ isInputEmpty }) => (isInputEmpty ? ' none' : 'block')};
`;

const Done = styled.span`
  color: #4a4a4a;
  font-size: 14px;
  position: absolute;
  left: 40%;
  top: 50px;
  border-bottom: 1px dashed #4a4a4a;;
  display: ${({ isInputEmpty }) => (isInputEmpty ? ' none' : 'block')};
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
        <FileLabel>
          Выберите файл..
          <input
            onChange={this.props.handleChangeFile}
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
          />
        </FileLabel>
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
          <Done
            isInputEmpty={this.state.isInputEmpty}
            onClick={() => this.props.handleSendLinkToPhoto(this.state.linkToPhoto)}
          >
            Готово
          </Done>
        </InputLinkWrapper>
      </Wrapper>
    );
  }
}
