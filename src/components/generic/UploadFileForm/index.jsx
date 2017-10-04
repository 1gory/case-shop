import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import UploadedFileForm from './State/Uploaded';
import EmptyFileForm from './State/Empty';
import LoadingFileForm from './State/Loading';
import ErrorFileForm from './State/Error';
import '../../MainPage/Form/styles.css';
import FileForm from './FormWrap';

const EMPTY_FORM_STATUS = 'empty';
const UPLOADED_FROM_STATUS = 'uploaded';
const LOADING_FORM_STATUS = 'loading';
const ERROR_FORM_STATUS = 'error';

export default class extends Component {
  constructor() {
    super();

    this.state = {
      fileFormStatus: EMPTY_FORM_STATUS,
    };

    this.handleSendLinkToPhoto = this.handleSendLinkToPhoto.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.sendFile = this.sendFile.bind(this);
    this.handleRemoveImage = this.handleRemoveImage.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  componentDidMount() {
    this.cookies = new Cookies();
  }

  handleSendLinkToPhoto(link) {
    if (!link) {
      return;
    }

    this.setState({
      fileFormStatus: LOADING_FORM_STATUS,
    });
    fetch('/api/imageUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        link,
      }),
    }).then(async (response) => {
      if (response.status !== 200) {
        this.setState({
          fileFormStatus: ERROR_FORM_STATUS,
        });

        if (this.props.collapse) {
          this.props.collapse();
        }
        return;
      }
      const responseData = await response.json();
      this.setState({
        uploadedImagePath: responseData.thumbnail,
        isHorizontalImage: responseData.horizontal,
        fileFormStatus: UPLOADED_FROM_STATUS,
      });
      if (this.props.expand) {
        this.props.expand();
      }
    }).catch((/* e */) => {
      this.setState({
        fileFormStatus: ERROR_FORM_STATUS,
      });

      if (this.props.collapse) {
        this.props.collapse();
      }
    });
  }

  handleChangeFile(event) {
    this.setState({
      fileFormStatus: LOADING_FORM_STATUS,
    });
    const reader = new FileReader();
    const file = event.target.files[0];
    if (this.props.expand) {
      this.props.expand();
    }
    reader.onload = (/* e */) => {
      if (file.size > 5000000) {
        alert('Пожалуйста, выберите файл меньше 5Мб');
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
    this.cookies.remove('imageUrl', { path: '/' });
    this.setState({
      fileFormStatus: EMPTY_FORM_STATUS,
    });
  }

  handleClearForm() {
    this.setState({
      fileFormStatus: EMPTY_FORM_STATUS,
    });
    if (this.props.collapse) {
      this.props.collapse();
    }
  }

  sendFile(file) {
    const form = new FormData();
    form.append('file', file);
    fetch('/api/image', {
      method: 'POST',
      body: form,
    }).then(async (response) => {
      if (response.status !== 200) {
        this.setState({
          fileFormStatus: ERROR_FORM_STATUS,
        });
        if (this.props.collapse) {
          this.props.collapse();
        }
        return;
      }
      const responseData = await response.json();
      this.cookies.set('imageUrl', responseData.path, { path: '/' });
      this.setState({
        uploadedImagePath: responseData.thumbnail,
        isHorizontalImage: responseData.horizontal,
        fileFormStatus: UPLOADED_FROM_STATUS,
      });
    }).catch((/* e */) => {
      this.setState({
        fileFormStatus: ERROR_FORM_STATUS,
      });
    });
  }

  render() {
    let fileForm = (<EmptyFileForm
      handleSendLinkToPhoto={this.handleSendLinkToPhoto}
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
      case ERROR_FORM_STATUS:
        fileForm = <ErrorFileForm handleClick={this.handleClearForm} />;
        break;
      default:
        break;
    }

    return (
      <FileForm>
        {this.state.fileFormStatus && fileForm}
      </FileForm>
    );
  }
}
