import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import QueryString from 'query-string';
import Helmet from 'react-helmet';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Banner from './Banner/index';
import Offer from './Offer/index';
import Form from './Form/index';
import CaseExamples from './CaseExamples';
import Catalog from './Catalog/index';
import FeedbackForm from './FeedbackForm';
import OurAdvantages from './OurAdvantages';
import OurProduction from './OurProduction';
import HowWeWork from './HowWeWork/index';
// import Comments from './Comments/index';
// import FAQ from './FAQ/index';
import Description from './Description';
import getPack from '../../functions/getPack';

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapPreloader: true,
    };

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
  }

  componentWillMount() {
    const parsed = QueryString.parse(this.props.location.search);
    if (parsed.category) {
      getPack(parsed.category).then((res) => {
        this.setState({
          bannerCode: res.pack.name,
          bannerSign: res.pack.sign,
          banner: res.pack.banner,
          collection: res.collection,
        });
      });
    } else {
      this.setState({
        bannerCode: 'default',
      });
    }
  }

  componentDidMount() {
    this.cookies = new Cookies();

    const parsed = QueryString.parse(this.props.location.search);

    if (!this.cookies.get('source') && parsed.utm_source) {
      this.cookies.set('source', parsed.utm_source);
    }
  }

  handleWaypointEnter() {
    this.setState({
      mapPreloader: false,
    });
  }

  render() {
    return (<Wrapper>
      <Helmet>
        <title>Деревянные чехлы для iPhone с гравировкой | Стекло в подарок</title>
        <meta
          name="description"
          content="Чехол из дерева с гравировкой станет отличным подарком для друзей и близких.
          Мы делаем деревянные чехлы для iphone на все существующие модели."
        />
      </Helmet>
      <Header />
      <Banner
        data={{
          code: this.state.bannerCode, sign: this.state.bannerSign, banner: this.state.banner,
        }}
      />
      <Offer />
      <Form />
      <CaseExamples collection={this.state.collection} />
      <Catalog />
      <FeedbackForm />
      <OurAdvantages />
      <HowWeWork />
      <OurProduction handleScroll={this.handleWaypointEnter} />
      {/* <Comments handleScroll={this.handleWaypointEnter} /> */}
      {/* <FAQ /> */}
      <Description />
      <Footer mapPreloader={this.state.mapPreloader} />
    </Wrapper>);
  }
}
