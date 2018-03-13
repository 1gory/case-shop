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
import HowWeWork from './HowWeWork';
import Packaging from './Packaging';
import Gallery from './Gallery';
// import Comments from './Comments/index';
// import FAQ from './FAQ/index';
import Description from './Description';
import getPack from '../../functions/getPack';
import OrderPopUp from './OrderPopUp';

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapPreloader: true,
      isOpened: false,
    };

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  handleOpen() {
    this.setState({
      isOpened: true,
    });
  }

  handleClose() {
    this.setState({
      isOpened: false,
    });
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
          Мы делаем деревянные чехлы для iphone на все существующие модели.
          Быстрая доставка по Москве. Самовывоз - бесплатно."
        />
      </Helmet>
      <Header />
      <Banner
        data={{
          code: this.state.bannerCode, sign: this.state.bannerSign, banner: this.state.banner,
        }}
      />
      <OrderPopUp isOpened={this.state.isOpened} handleClose={this.handleClose} />
      <Offer />
      <Form />
      <Gallery />
      <Packaging handleOpen={this.handleOpen} />
      <OurProduction handleScroll={this.handleWaypointEnter} />
      <CaseExamples handleOpen={this.handleOpen} collection={this.state.collection} />
      <Catalog />
      <FeedbackForm />
      <HowWeWork />
      <OurAdvantages />
      {/* <Comments handleScroll={this.handleWaypointEnter} /> */}
      {/* <FAQ /> */}
      <Description />
      <Footer mapPreloader={this.state.mapPreloader} />
    </Wrapper>);
  }
}
