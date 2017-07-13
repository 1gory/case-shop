import React, {Component} from 'react';
import styled from 'styled-components';
import preloader from './preloader.svg'

const PreloaderWrapper = styled.div`
  padding: 56px;
`;

export default class extends Component {
  render () {
    return (
      <PreloaderWrapper>
        <img src={preloader} alt='preloader'/>
      </PreloaderWrapper>
    )
  }
}
