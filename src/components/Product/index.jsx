/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';
import ym from 'react-yandex-metrika';
import Helmet from 'react-helmet';
import moment from 'moment';
import Header from '../Header';
import Footer from '../Footer';
import BreadCrumbs from '../generic/BreadCrumbs';
import getProducts from '../../functions/getProduct';
import ProductForm from './FormState/Form';
import getGalleryImage from '../../functions/getGalleryImage';
import ImageForm from '../generic/UploadFileForm';
import RubleSign from '../generic/RubleSign';

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

const ResponsiveWrapper = styled.div`
  max-width: 970px;
  margin: 0 auto;
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
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 970px) {
    width: 450px;
  }
`;

const MainImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const Thumbs = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
  
  @media (min-width: 970px) {
    width: 450px;
  }
`;

const Thumb = styled.img`
  height: 120px;
  background-color: #fff;
  margin: 8px 8px 0 0;
  padding: 5px;
  cursor: pointer;
`;

const Details = styled.div`
  padding: 0 15px;
`;

const Name = styled.h1`
   font-family: 'Lato-Regular';
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

const ProductCard = styled.div`
  @media (min-width: 970px) {
    display: flex;
  }
`;

const IndividualCaseFormWrapper = styled.div`
  margin: 35px 0;
  
  @media (min-width: 768px) {
    margin: 90px 0;
  }
`;

const IndividualCaseForm = styled.div`
  padding: 60px 18px;
  text-align: center;
  background-color: #f3f3f3;
`;

const Message = styled.div`
  font-family: 'Lato-Regular';
  color: #222222;
  margin-bottom: 25px;
`;

const Button = styled.button`
  border-radius: 20px;
  border: solid 1px #222222;
  background: none;
  padding: 8px 30px;
  display: inline-block;
  font-family: 'Lato-Regular';
  font-size: 16px;
  text-decoration: none;
  color: #222222;
`;

const ImageFormWrapper = styled.div`
  @media (min-width: 970px) {
    margin: 0 auto;
    width: 425px;
  }
`;

const Price = styled.div`
  font-family: Lato-Regular;
  font-size: 24px;
  text-align: center;
`;

const Delimiter = styled.hr`
  border: 0.5px solid #ccc;
  margin: 20px 0;
`;

const formatGalleryImage = (images, category, printCode) => (
  images.map(image =>
    getGalleryImage(
      category,
      printCode,
      'compressed',
      image,
    ),
  )
);

const getProductImagesUrls = images => (
  images.map(image => `/product/${image.name}`)
);

const getProduct = (productData) => {
  const product = JSON.parse(JSON.stringify(productData));
  product.images = formatGalleryImage(
    product.images,
    product.category,
    product.printCode,
  );

  // remove-it
  const productImages = getProductImagesUrls(product.productImages);
  let counter = product.images.length;
  for (let i = 0; i < productImages.length; i++) {
    product.activeImagesKeys.push(counter++);
  }
  product.images = product.images.concat(productImages);

  return product;
};

class Product extends Component {

  static async requestInitialData(url, host) {
    const id = url.split('/').pop();
    const products = await getProducts(`${host || ''}/api/products/id/${id}`);
    const status = products[0] ? 200 : 404;
    let header;
    if (products[0]) {
      header = {
        title: products[0].title,
        metaDescription: products[0].metaDescription,
      };
    }

    return { products, status, header };
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

    if (initialData && initialData.products) {
      const product = getProduct(initialData.products[0]);
      this.state = {
        product,
        activeImageIndex: product.activeImagesKeys[0],
      };
    } else {
      this.state = {
        product: {},
      };
    }

    this.handleSendForm = this.handleSendForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.cookies = new Cookies();
    if (!this.state.product.name) {
      Product.requestInitialData(this.props.match.url).then(({ products }) => {
        if (products[0]) {
          const product = getProduct(products[0]);
          this.setState({
            product,
            activeImageIndex: product.activeImagesKeys[0],
          });
        } else {
          this.setState({
            notFound: true,
          });
        }
      });
    }
  }

  handleClickToThumb(index) {
    this.setState({
      activeImageIndex: index,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      individualCase: true,
    });
  }

  // TODO move sending to separated method
  handleSendForm(formData) {
    ReactPixel.trackCustom('trackOrder');
    ReactPixel.track('Lead');
    ym('reachGoal', 'order');
    ReactGA.event({ category: 'order_category', action: 'order' });
    formData.image = this.cookies.get('imageUrl');
    formData.timezoneOffset = moment().utcOffset();
    fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    }).then(async (data) => {
      const response = await data.json();
      if (response.status) {
        window.location = '/checkout';
      }
    }).catch((e) => {
      console.log(e);
    });
  }

  render() {
    if (this.state.notFound) {
      return <Redirect to="/404" />;
    }
    return (
      <Wrapper>
        <Helmet>
          <title>{this.state.product.title ? this.state.product.title : 'Деревянные чехлы Casewood'}</title>
          <meta
            name="description"
            content={this.state.product.metaDescription}
          />
        </Helmet>
        <Header />
        <ResponsiveWrapper>
          <BreadCrumbs
            breadcrumbs={[
              { name: 'Каталог', link: '/catalog' },
              {
                name: this.state.product.name,
                link: `/product/${this.state.product.url ? this.state.product.url : this.state.product.id}`,
              },
            ]}
          />
          <ProductCard>
            {this.state.product.images && <Gallery>
              <MainImageWrapper>
                <MainImage
                  src={this.state.product.images[this.state.activeImageIndex]}
                />
              </MainImageWrapper>
              <Thumbs>
                {this.state.product.images.map((image, index) => {
                  if (this.state.product.activeImagesKeys.indexOf(index) !== -1) {
                    return (
                      <Thumb
                        onClick={() => this.handleClickToThumb(index)}
                        src={image}
                      />
                    );
                  }
                  return null;
                })}
              </Thumbs>
            </Gallery>}
            <Details>
              <Name>
                {this.state.product.name}
              </Name>
              <Description>
                {this.state.product.description}
              </Description>
              <Delimiter />
              <Price>
                {this.state.product.price}<RubleSign />
              </Price>
              <ProductForm handleSendForm={this.handleSendForm} />
            </Details>
          </ProductCard>

          <IndividualCaseFormWrapper>
            { this.state.individualCase &&
            <ImageFormWrapper>
              <ImageForm />
            </ImageFormWrapper>}
            {!this.state.individualCase &&
            <IndividualCaseForm>
              <Message>
                Если вы хотите создать свою<br />
                гравировку, воспользуйтесь<br />
                специальной формой:
              </Message>
              <Button onClick={this.handleClick}>
                Создать свою гравировку
              </Button>
            </IndividualCaseForm>
            }
          </IndividualCaseFormWrapper>
        </ResponsiveWrapper>
        <Footer />
      </Wrapper>
    );
  }
}

export default Product;
