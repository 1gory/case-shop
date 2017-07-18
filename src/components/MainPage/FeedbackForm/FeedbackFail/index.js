import React, {Component} from 'react';
import styled from 'styled-components';
import Header from '../../../Header';
import Footer from '../../../Footer';
import Banner from '../../Banner'
import Offer from '../../Offer';
import Form from '../../Form';
import CaseExamples from '../../CaseExamples';
import Catalog from '../../Catalog';
import FeedbackForm from './FeedbackFail';
import OurAdvantages from '../../OurAdvantages';
import HowWeWork from '../../HowWeWork';
import Comments from '../../Comments';
import FAQ from '../../FAQ';
import SelfDelivery from '../../../Footer/SelfDelivery';
import Map from '../../../Footer/Map'
import Contacts from '../../Contacts'

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Banner />
        <Offer />
        <Form />
        <CaseExamples />
        <Catalog />
        <FeedbackForm />
        <OurAdvantages />
        <HowWeWork />
        <Comments />
        <FAQ />
        <SelfDelivery />
        <Map />
        <Contacts />
        <Footer />
      </Wrapper>
    );
  }
}
