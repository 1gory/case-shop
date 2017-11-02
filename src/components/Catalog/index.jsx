import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import BreadCrumbs from '../generic/BreadCrumbs';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Card from '../generic/Card/index';
import getProducts from '../../functions/getProduct';
import getImage from '../../functions/getImage';

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

const CatalogCategory = ({ products, categoryName, category }) => (
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
          />
        </Col>))}
    </Row>
  </RowWrapper>
);

export default class extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  async componentWillMount() {
    this.setState({
      products: await getProducts('products'),
      productsNames: await getProducts('products/names'),
      productsFk: await getProducts('products/fk'),
      productsZodiac: await getProducts('products/zodiac'),
      productsAuto: await getProducts('products/auto'),
    });
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Section>
          <BreadCrumbs
            breadcrumbs={[
              { name: 'Каталог', link: '/catalog' },
            ]}
          />
          <H1>Гравированные чехлы</H1>
          <CatalogCategory
            products={this.state.productsNames} category="names" categoryName="Именные чехлы"
          />
          <CatalogCategory
            products={this.state.productsFk} category="fk" categoryName="Футбольные клубы"
          />
          <CatalogCategory
            products={this.state.productsAuto} category="auto" categoryName="Автомобили"
          />
          <CatalogCategory
            products={this.state.productsZodiac} category="zodiac" categoryName="Знаки зодиака"
          />
          <CatalogCategory
            products={this.state.products} categoryName="Принты"
          />
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
};

