import React, {Component} from 'react';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import skip from './skip-to-form.svg';
import UploadedFileForm from './State/Uploaded';
import EmptyFileForm from './State/Empty';
import LoadingFileForm from './State/Loading';
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
  padding: 40px 30px;
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

export default class extends Component {

  constructor(){
    super();

    this.state = {
      isOpened: false,
      fileFormStatus: 'empty'
    }

    this.handleChangeLinkToPhoto = this.handleChangeLinkToPhoto.bind(this);
  }

  handleChangeLinkToPhoto() {
    this.setState(state => ({
      fileFormStatus: 'loading'
    }))

    setTimeout(() => {
      this.setState(state => ({
        isOpened: !state.isOpened,
        fileFormStatus: 'uploaded'
      }))}, 1000);
  }

  render () {

    let fileForm = '';

    switch (this.state.fileFormStatus) {
      case 'empty':
          fileForm = <EmptyFileForm handleChangeLinkToPhoto={this.handleChangeLinkToPhoto}/>
        break;
      case 'uploaded':
          fileForm = <UploadedFileForm />
        break;
      case 'loading':
          fileForm = <LoadingFileForm />
        break;

      default: fileForm = '';
    }

    return (
      <Wrapper>
        <SkipArrow src={skip} alt=''/>
        <Form>
          <FileForm >
            {fileForm}
          </FileForm>

          <CSSTransitionGroup
            transitionName="detalis"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
            >
            {this.state.isOpened && <DetailsForm />}
          </CSSTransitionGroup>
        </Form>
      </Wrapper>
    );
  }
};
