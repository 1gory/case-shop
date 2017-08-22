import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import BreadCrumbs from '../generic/BreadCrumbs';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Card from '../generic/Card/index';
import getProducts from '../../functions/getProduct';

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
  margin: 15px;
`;

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

const RowWrapper = styled.div`
  margin: 15px;
  margin-bottom: 60px;
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
    });
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <BreadCrumbs
          breadcrumbs={[
            { name: 'Каталог', link: '/catalog' },
          ]}
        />
        <H2>Гравированные чехлы</H2>
        <RowWrapper>
          <Row>
            {this.state.products && this.state.products.map(product =>
              (<Col xs={6} sm={6} md={4} lg={3}>
                <Card
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  id={product.id}
                />
              </Col>))}
          </Row>
        </RowWrapper>
        {/* <PaginationWrapper>*/}
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

