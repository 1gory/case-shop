import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';

import Card from '../../generic/Card/index';
import getProducts from '../../../functions/getProduct';
import getImage from '../../../functions/getImage';

const Wrapper = styled.div`
  color: #4a4a4a;
  text-align: center;
  padding-bottom: 60px;
`;

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
`;

const RowWrapper = styled.div`
  margin: 15px;
  
  @media (min-width: 768px) {
    max-width: 1170px;
    margin: 0 auto;
  }
`;

const GoToCatalogButton = styled(Link)`
  border-radius: 20px;
  border: solid 1px #222222;
  background: none;
  padding: 8px 30px;
  margin-top: 40px;
  display: inline-block;
  font-family: 'Lato-Regular';
  font-size: 16px;
  text-decoration: none;
  color: #222222;
`;

export default class extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  async componentWillMount() {
    const products = await getProducts('products/prints');

    this.setState({
      products: products.slice(0, 4),
    });
  }

  render() {
    return (<Wrapper>
      <H2>Каталог гравированных чехлов</H2>
      <RowWrapper>
        <Row>
          {this.state.products && this.state.products.map(product =>
            (<Col xs={6} sm={6} md={4} lg={3}>
              <Card
                name={product.name}
                price={product.price}
                image={getImage(product.printCode, 'reduced', 'turn', product.woodType, 'white')}
                id={product.id}
              />
            </Col>))}
        </Row>
      </RowWrapper>
      <GoToCatalogButton to="/catalog">
        Перейти в каталог
      </GoToCatalogButton>
    </Wrapper>);
  }
}
