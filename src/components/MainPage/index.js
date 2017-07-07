import React, {Component} from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Menu from '../Menu';
import Banner from './Banner'
import Offer from './Offer';
import Form from './Form';
import CaseExamples from './CaseExamples';
import Catalog from './Catalog';
import FeedbackForm from './FeedbackForm';
import OurAdvantages from './OurAdvantages';
import HowWeWork from './HowWeWork';

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

export default class App extends Component {
    render() {
        return (
            <Wrapper>
                <Header/>
                <Menu />
                <Banner />
                <Offer />
                <Form />
                <CaseExamples />
                <Catalog />
                <FeedbackForm />
                <OurAdvantages />
                <HowWeWork />
            </Wrapper>
        );
    }
}
