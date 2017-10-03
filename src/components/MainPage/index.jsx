import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Banner from './Banner/index';
import Offer from './Offer/index';
import Form from './Form/index';
import CaseExamples from './CaseExamples/index';
import Catalog from './Catalog/index';
import FeedbackForm from './FeedbackForm/index';
import OurAdvantages from './OurAdvantages/index';
import HowWeWork from './HowWeWork/index';
import Comments from './Comments/index';
// import FAQ from './FAQ/index';

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      mapPreloader: true,
    };

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
  }

  handleWaypointEnter() {
    this.setState({
      mapPreloader: false,
    });
  }

  render() {
    return (<Wrapper>
      <Header />
      <Banner />
      <Offer />
      <Form />
      <CaseExamples />
      <Catalog />
      <FeedbackForm />
      <OurAdvantages />
      <HowWeWork />
      <Comments handleScroll={this.handleWaypointEnter} />
      {/* <FAQ /> */}
      <Footer mapPreloader={this.state.mapPreloader} />
    </Wrapper>);
  }
}
