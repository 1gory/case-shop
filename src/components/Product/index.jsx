import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import BreadCrumbs from '../generic/BreadCrumbs';
import getProducts from '../../functions/getProduct';
import ProductForm from './FormState/Form';
import SentState from './FormState/Sent';

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

const Gallery = styled.div`
  margin: 30px 15px 0 15px;
`;

const MainImageWrapper = styled.div`
  height: 500px;
  background-color: #fff;
  text-align: center;
  padding: 30px 0;
  box-sizing: border-box;
`;

const MainImage = styled.img`
  height: 100%;
`;

const Thumbs = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
`;

const Thumb = styled.img`
  height: 120px;
  background-color: #fff;
  margin: 8px 8px 0 0;
  padding: 5px;
`;

const Details = styled.div`
  padding: 0 15px;
`;

const Name = styled.h1`
   font-family: 'Lato-SemiBold';
   text-transform: uppercase;
   font-size: 28px;
   margin: 30px 0;
   color: #4a4a4a;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.44;
  font-family: 'Lato-Regular';
  color: #4a4a4a;
  margin: 0;
`;

export default class extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      activeImageIndex: 0,
      isSent: false,
    };

    this.newOrder = this.newOrder.bind(this);
  }

  async componentWillMount() {
    const id = this.props.match.url.split('/').pop();
    const products = await getProducts(`products/${id}`);
    this.setState({
      product: products[0],
    });
  }

  handleClickToThumb(index) {
    this.setState({
      activeImageIndex: index,
    });
  }

  newOrder() {
    this.setState({
      isSent: false,
    });
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <BreadCrumbs
          breadcrumbs={[
            { name: 'Каталог', link: '/catalog' },
            { name: this.state.product.name, link: `/product/${this.state.product.id}` },
          ]}
        />
        {this.state.product.images && <Gallery>
          <MainImageWrapper>
            <MainImage src={this.state.product.images[this.state.activeImageIndex]} />
          </MainImageWrapper>
          <Thumbs>
            {this.state.product.images.map((image, index) => (
              <Thumb onClick={() => this.handleClickToThumb(index)} src={image} />
            ))}
          </Thumbs>
        </Gallery>}
        <Details>
          <Name>
            {this.state.product.name}
          </Name>
          <Description>
            {this.state.product.description}
          </Description>
          {this.state.isSent ?
            <SentState handleClick={this.newOrder} /> :
            <ProductForm
              handleSend={this.handleSend}
              invalidNumber={this.state.invalidNumber}
            />
          }
        </Details>
        <Footer />
      </Wrapper>
    );
  }
}
