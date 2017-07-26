import React, { Component } from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import Scroll from 'react-scroll';
import skip from './skip-to-form.svg';
import UploadedFileForm from './State/Uploaded';
import EmptyFileForm from './State/Empty';
import LoadingFileForm from './State/Loading';
import SentFileForm from './State/Sent';
import DetailsForm from './Details';
import './styles.css';

const Wrapper = styled.div`
  text-align: center;
  padding: 30px 15px;
`;

const SkipArrow = styled.img`
  display: inline-block;
  margin-bottom: 30px;
  width: 40px;
`;

const Form = styled.div`
  padding: 30px 15px;
  background-color: #f3f3f3;
  border-radius: 4px;
`;

const FileForm = styled.form`
  padding: 10px;
  background-color: #ebebeb;
  box-shadow: 0 7px 15px 0 rgba(1, 1, 1, 0.1);
  border-radius: 4px;

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

const FileFormAnchor = Scroll.Element;

const EMPTY_FORM_STATUS = 'empty';
const UPLOADED_FROM_STATUS = 'uploaded';
const LOADING_FORM_STATUS = 'loading';
const SENT_FORM_STATUS = 'sent';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
      fileFormStatus: EMPTY_FORM_STATUS,
    };

    this.handleChangeLinkToPhoto = this.handleChangeLinkToPhoto.bind(this);
    this.handleSendForm = this.handleSendForm.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.sendFile = this.sendFile.bind(this);
    this.handleRemoveImage = this.handleRemoveImage.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChangeLinkToPhoto(event) {
    if (!event.target.value) {
      return;
    }

    this.setState({
      fileFormStatus: LOADING_FORM_STATUS,
    });
    fetch('http://localhost:3001/api/imageUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        link: event.target.value,
      }),
    }).then(async (response) => {
      const responseData = await response.json();
      this.setState({
        uploadedImagePath: responseData.path,
        isHorizontalImage: responseData.horizontal,
        fileFormStatus: UPLOADED_FROM_STATUS,
        isOpened: true,
      });
    });
  }

  handleSendForm(event) {
    event.preventDefault();
    this.setState({});
  }

  handleChangeFile(event) {
    this.setState({
      fileFormStatus: LOADING_FORM_STATUS,
    });

    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = (e) => {

      if (file.size > 3000000) {
        alert('Пожалуйста, выберите файл меньше 2.5Мб');
        this.setState({
          fileFormStatus: EMPTY_FORM_STATUS,
        });
      } else {
        this.sendFile(file);
      }
    };

    reader.readAsText(file);
  }

  handleRemoveImage(event) {
    event.preventDefault();
    this.setState({
      fileFormStatus: EMPTY_FORM_STATUS,
      isOpened: false,
    });
  }

  handleClearForm() {
    this.setState({
      fileFormStatus: EMPTY_FORM_STATUS,
      isOpened: false,
    });
  }

  sendFile(file) {
    const form = new FormData();
    form.append('file', file);
    fetch('http://localhost:3001/api/image', {
      method: 'POST',
      body: form,
    }).then(async (response) => {
      const responseData = await response.json();
      this.setState({
        uploadedImagePath: responseData.path,
        isHorizontalImage: responseData.horizontal,
        fileFormStatus: UPLOADED_FROM_STATUS,
        isOpened: true,
      });
    });
  }

  render() {
    let fileForm = (<EmptyFileForm
      handleChangeLinkToPhoto={this.handleChangeLinkToPhoto}
      handleChangeFile={this.handleChangeFile}
    />);

    switch (this.state.fileFormStatus) {
      case UPLOADED_FROM_STATUS:
        fileForm = (
          <UploadedFileForm
            isHorizontal={this.state.isHorizontalImage}
            filePath={this.state.uploadedImagePath}
            handleRemoveImage={this.handleRemoveImage}
          />
        );
        break;
      case LOADING_FORM_STATUS:
        fileForm = <LoadingFileForm />;
        break;
      case SENT_FORM_STATUS:
        fileForm = <SentFileForm handleClick={this.handleClearForm} />;
        break;
      default:
        break;
    }

    return (
      <Wrapper>
        <FileFormAnchor name="FileFormAnchor" />
        <SkipArrow src={skip} alt="" />
        <Form>
          <FileForm>
            {this.state.fileFormStatus && fileForm}
          </FileForm>

          <CSSTransitionGroup
            transitionName="detalis"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {this.state.isOpened && <DetailsForm handleSendForm={this.handleSendForm} />}
          </CSSTransitionGroup>
        </Form>
      </Wrapper>
    );
  }
}
