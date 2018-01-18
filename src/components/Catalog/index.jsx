import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
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
  return [{
    category: category.category,
    categoryRu: category.categoryRu,
    products: category.products,
  }];
};

const sliceCatalog = catalog => (catalog.map(item => ({
  category: item.category,
  categoryRu: item.categoryRu,
  products: item.products.slice(0, 4),
})));

export default class extends Component {
  constructor() {
    super();

    this.state = {
      catalog: [],
    };
    this.load = this.load.bind(this);
  }

  async componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(props) {
    this.load(props);
  }

  async load(props) {
    const urlParts = props.match.url.split('/');
    let categoryButton = true;
    let catalog = await getCatalog();
    if (urlParts[2]) {
      catalog = getCategory(catalog, urlParts[2]);
      categoryButton = false;
    } else {
      catalog = sliceCatalog(catalog);
    }
    this.setState({
      catalog,
      categoryButton,
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
          {this.state.catalog ? this.state.catalog.map(item => (
            <CatalogCategory
              products={item.products}
              category={item.category}
              categoryName={item.categoryRu}
              toCategoryButton={this.state.categoryButton}
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
