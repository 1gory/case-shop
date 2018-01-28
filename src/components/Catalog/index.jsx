/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Link, Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import BreadCrumbs from '../generic/BreadCrumbs';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Card from '../generic/Card/index';
import getCatalog from '../../functions/getCatalog';
import getImage from '../../functions/getImage';
import Button from '../generic/Form/Buttons/GhostButton';
import MapPreloader from '../Footer/Map/MapPreloader';

const H1 = styled.h1`
  font-family: 'Lato-Regular';
  font-size: 24px;
  margin: 15px;
  
  @media (min-width: 768px) {
    text-align: center;
    max-width: 1170px;
    margin: 0 auto;
    font-size: 36px;
  }
`;

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 20px;
  color: #4a4a4a;
  margin-bottom: 0;
`;

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

const RowWrapper = styled.div`
  margin: 15px;
  margin-bottom: 60px;
`;

const Section = styled.section`
  @media (min-width: 768px) {
    max-width: 1170px;
    margin: 0 auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
`;

// const PaginationWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: 'Lato-Regular';
//   padding: 50px;
// `;
//
// const PaginationLink = styled.span`
//   padding: 10px 15px;
//   margin: 5px;
//   border: solid 1px #222222;
//   border-radius: 20px;
// `;
//
// const NextPage = styled.span`
//   padding: 10px 20px;
//   margin: 5px;
//   border: solid 1px #222222;
//   border-radius: 20px;
// `;

const ToCategoryButton = Button.withComponent(Link);

const CatalogCategory = ({ products, categoryName, category, toCategoryButton }) => (
  <RowWrapper>
    { categoryName ? <H2>{categoryName}</H2> : '' }
    <Row>
      {products && products.map(product =>
        (<Col xs={6} sm={6} md={4} lg={3}>
          <Card
            name={product.name}
            price={product.price}
            image={getImage(product.printCode, 'reduced', 'turn', product.woodType, 'white', category)}
            id={product.id}
            url={product.url}
          />
        </Col>))}
    </Row>
    {toCategoryButton && <ButtonWrapper>
      <ToCategoryButton to={`/catalog/${category}`}>
        В категорию
      </ToCategoryButton>
    </ButtonWrapper>
    }
  </RowWrapper>
);

const getCategory = (catalog, categoryName) => {
  const category = catalog.find(item => (item.category === categoryName));
  return category ? [{
    title: category.title,
    metaDescription: category.metaDescription,
    category: category.category,
    categoryRu: category.categoryRu,
    products: category.products,
  }] : [];
};

const sliceCatalog = catalog => (catalog.map(item => ({
  category: item.category,
  categoryRu: item.categoryRu,
  products: item.products.slice(0, 4),
})));

export default class Catalog extends Component {

  static async requestInitialData(url, host) {
    const id = url.split('/').pop();
    let singleCategory = true;
    let catalog = await getCatalog(`${host || ''}/api/catalog`);
    let status = 200;
    let header;
    if (id === 'catalog') {
      catalog = sliceCatalog(catalog);
      singleCategory = false;
    } else {
      catalog = getCategory(catalog, id);
      status = catalog[0] ? 200 : 404;
      if (catalog[0]) {
        header = {
          title: catalog[0].title,
          metaDescription: catalog[0].metaDescription,
        };
      }
    }

    return { catalog, singleCategory, status, header };
  }

  constructor(props) {
    super(props);

    let initialData;
    if (props.staticContext) {
      initialData = props.staticContext.initialData;
    } else {
      initialData = window.__initialData__;
      delete window.__initialData__;
    }

    if (initialData && initialData.catalog) {
      this.state = {
        catalog: initialData.catalog,
        singleCategory: initialData.singleCategory,
      };
    } else {
      this.state = {
        catalog: [],
      };
    }

    this.load = this.load.bind(this);
  }

  async componentWillMount() {
    if (!this.state.catalog[0]) {
      this.load(this.props);
    }
  }

  componentWillReceiveProps(props) {
    this.load(props);
  }

  async load(props) {
    Catalog.requestInitialData(props.match.url).then(({ catalog, singleCategory }) => {
      if (catalog[0]) {
        this.setState({
          catalog,
          singleCategory,
        });
      } else {
        this.setState({ notFound: true });
      }
    });
  }

  render() {
    const breadcrumbs = [
      { name: 'Каталог', link: '/catalog' },
    ];
    if (this.state.singleCategory) {
      breadcrumbs.push({ name: this.state.catalog[0].categoryRu, link: `${this.state.catalog[0].category}` });
    }
    if (this.state.notFound) {
      return <Redirect to="/404" />;
    }
    return (
      <Wrapper>
        <Helmet>
          <title>
            {this.state.singleCategory ?
              this.state.catalog[0].title :
              'Каталог | Деревянные чехлы для iPhone Casewood'
            }
          </title>
          <meta
            name="description"
            content={this.state.singleCategory ?
              this.state.catalog[0].metaDescription :
              'Каталог деревянных чехлов, выберите нужный вам принт, или загрузите свой мы сделаем индивидуальную гравировку'
            }
          />
        </Helmet>
        <Header />
        <Section>
          <BreadCrumbs
            breadcrumbs={breadcrumbs}
          />
          <H1>Гравированные чехлы</H1>
          {this.state.catalog ? this.state.catalog.map(item => (
            <CatalogCategory
              products={item.products}
              category={item.category}
              categoryName={item.categoryRu}
              toCategoryButton={!this.state.singleCategory}
            />
          )) : <MapPreloader />}
        </Section>
        {/* <PaginationWrapper> */}
        {/* <PaginationLink>1</PaginationLink> */}
        {/* <PaginationLink>2</PaginationLink> */}
        {/* <PaginationLink>3</PaginationLink> */}
        {/* ... */}
        {/* <PaginationLink>9</PaginationLink> */}
        {/* <NextPage>Следующая</NextPage> */}
        {/* </PaginationWrapper> */}
        <Footer />
      </Wrapper>
    );
  }
}
