import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import Button from '../../generic/Form/Buttons/PrimaryButton';
import TransparentButton from '../../generic/Form/Buttons/TransparentButton';
import OrderPopUp from './OrderPopUp';
import Gallery from '../../generic/Gallery';
import RubleSign from '../../generic/RubleSign';
import getImage from '../../../functions/getImage';

const CatalogAnchor = Scroll.Element;

const ToGalleryButton = TransparentButton.withComponent(Link);

const H2 = styled.h2`
  margin-top: 0;
  padding-top: 30px;
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #4a4a4a;
`;

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

const ImgExample = styled.img`
  width: 140px;
  padding-bottom: 40px;
`;

const ExampleWrapper = styled(Link)`
  padding-top: 40px;
  display: block;
  text-decoration: none;
  color: #000;
`;

const RowWrapper = styled.div`
  margin: 15px;
  font-family: 'Lato-Regular';
  font-weight: bold;
  
  @media (min-width: 768px) {
    max-width: 970px;
    margin: 0 auto;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

const CategoryName = styled.div`
  height: 36px;
  padding-bottom: 10px;
`;

const Price = styled.div`
  font-family: 'Lato-Regular';
  font-size: 18px;
  color: #222222;
`;

const GalleryWrapper = styled.div`
  background: #fff;
  padding: 10px 0 60px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const images =
  [
    {
      src: '/gallery/1.jpg',
      thumbnail: '/gallery/1.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/2.jpg',
      thumbnail: '/gallery/2.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/3.jpg',
      thumbnail: '/gallery/3.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/5.jpg',
      thumbnail: '/gallery/5.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/6.jpg',
      thumbnail: '/gallery/6.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/4.jpg',
      thumbnail: '/gallery/4.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/7.jpg',
      thumbnail: '/gallery/7.jpg',
      thumbnailWidth: 333,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/9.jpg',
      thumbnail: '/gallery/9.jpg',
      thumbnailWidth: 188,
      thumbnailHeight: 250,
    },
    {
      src: '/gallery/8.jpg',
      thumbnail: '/gallery/8.jpg',
      thumbnailWidth: 373,
      thumbnailHeight: 250,
    },
  ];

export default class extends Component {
  constructor() {
    super();

    this.state = {
      isOpened: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  render() {
    return (
      (
        <Wrapper>
          <OrderPopUp isOpened={this.state.isOpened} handleClose={this.handleClose} />
          <CatalogAnchor name="CatalogAnchor" />

          <GalleryWrapper>
            <H2>Примеры работы</H2>

            <Gallery images={images} />

            <ButtonWrapper>
              <ToGalleryButton to="/gallery">
                Еще примеры
              </ToGalleryButton>
            </ButtonWrapper>
          </GalleryWrapper>

          <H2>Тематики</H2>

          <RowWrapper>
            {this.props.collection ?
              <Row>
                {this.props.collection.map(product =>
                  (<Col xs={6} sm={6} md={4} lg={3}>
                    <ExampleWrapper to={`/product/${product._id}`}>
                      <ImgExample
                        src={getImage(product.print_code, 'reduced', 'turn', product.main_image_wood_type, 'gray', product.category)}
                        alt=""
                      />
                      <div>{product.name}</div>
                    </ExampleWrapper>
                  </Col>))}
              </Row> :
              <Row>
                <Col xs={6} sm={6} md={4} lg={3}>
                  <ExampleWrapper to="/catalog/russia">
                    <ImgExample src="/case-examples/gray/russia.jpg" alt="" />
                    <CategoryName>Россия</CategoryName>
                    <Price>1290<RubleSign /></Price>
                  </ExampleWrapper>
                </Col>
                <Col xs={6} sm={6} md={4} lg={3}>
                  <ExampleWrapper to="/catalog/fk">
                    <ImgExample src="/case-examples/gray/2_barcelona_turn_red_gray.jpg" alt="" />
                    <CategoryName>С логотипом команды</CategoryName>
                    <Price>1290<RubleSign /></Price>
                  </ExampleWrapper>
                </Col>
                <Col xs={6} sm={6} md={4} lg={3}>
                  <ExampleWrapper to="/catalog/names">
                    <ImgExample src="/case-examples/gray/elena.jpg" alt="" />
                    <CategoryName>С вашим именем</CategoryName>
                    <Price>1290<RubleSign /></Price>
                  </ExampleWrapper>
                </Col>
                <Col xs={6} sm={6} md={4} lg={3}>
                  <ExampleWrapper to="/catalog/zodiac">
                    <ImgExample
                      src="/case-examples/gray/4_aries_zodiac_turn_bamb_gray.jpg" alt=""
                    />
                    <CategoryName>С вашим гороскопом</CategoryName>
                    <Price>1290<RubleSign /></Price>
                  </ExampleWrapper>
                </Col>
              </Row>
            }

            <Row>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/marvel">
                  <ImgExample src="/case-examples/gray/10_marvel_turn_bamb_white.jpg" alt="" />
                  <CategoryName>Marvel</CategoryName>
                  <Price>1290<RubleSign /></Price>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/auto">
                  <ImgExample src="/case-examples/gray/lexus.jpg" alt="" />
                  <CategoryName>Ваше авто</CategoryName>
                  <Price>1290<RubleSign /></Price>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/ufc">
                  <ImgExample
                    src="/case-examples/gray/11_wanderlei_silva_turn_red_gray.jpg" alt=""
                  />
                  <CategoryName>UFC</CategoryName>
                  <Price>1290<RubleSign /></Price>
                </ExampleWrapper>
              </Col>
              <Col xs={6} sm={6} md={4} lg={3}>
                <ExampleWrapper to="/catalog/prints">
                  <ImgExample src="/case-examples/gray/12_skull_turn_red_gray.jpg" alt="" />
                  <CategoryName>С вашей картинкой или логотипом</CategoryName>
                  <Price>1290<RubleSign /></Price>
                </ExampleWrapper>
              </Col>
            </Row>
          </RowWrapper>
          <StyledButton onClick={this.handleOpen}>
            Заказать
          </StyledButton>
        </Wrapper>
      )
    );
  }
}
