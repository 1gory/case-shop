import React from 'react';
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

export default () => (
  <Wrapper>
    <Header />
    <Banner />
    <Offer />
    <Form />
    <CaseExamples />
    <Catalog />
    <FeedbackForm />
    <OurAdvantages />
    <HowWeWork />
    <Comments />
    {/* <FAQ /> */}
    <Footer />
  </Wrapper>
);
