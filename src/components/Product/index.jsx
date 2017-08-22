import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import BreadCrumbs from '../generic/BreadCrumbs';
import { Model, Material, Messenger, PhoneNumber } from '../generic/ProductDetails';
import Form from '../MainPage/Form/State/Empty';
import getProducts from '../../functions/getProduct';

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

const From = styled.form`
  width: 80%;
  padding-top: 45px;
`;

const IndividualCaseFromWrapper = styled.div`
  margin: 35px 0;
`;

const IndividualCaseFrom = styled.div`
  padding: 60px 18px;
  text-align: center;
  background-color: #f3f3f3;
`;

const Message = styled.div`
  font-family: 'Lato-Regular';
  color: #222222;
  margin-bottom: 25px;
`;

const OrderButtonWrapper = styled.div`
  padding-top: 25px;
  text-align: center;
`;

const OrderButton = styled.button`
  border-radius: 20px;
  background-color: #7f5152;
  border: none;
  font-size: 16px;
  color: #ffffff;
  font-family: 'Lato-Light';
  padding: 10px 30px;
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

export default class extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentWillMount() {
    const id = this.props.match.url.split('/').pop();

    const products = await getProducts(`products/${id}`);
    const product = products[0];

    this.setState({
      id: product.id,
      name: product.name,
      images: product.images,
      description: product.description,
      price: product.price,
    });
  }

  handleChangeForm(e) {
    const state = {};
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      individualCase: true,
    });
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <BreadCrumbs
          breadcrumbs={[
            { name: 'Каталог', link: '/catalog' },
            { name: this.state.name, link: `/product/${this.state.id}` },
          ]}
        />
        {this.state.images && <Gallery>
          <MainImageWrapper>
            <MainImage src={this.state.images.pop()} />
          </MainImageWrapper>
          <Thumbs>
            {this.state.images.map(image => (
              <Thumb src={image} />
            ))}
          </Thumbs>
        </Gallery>}
        <Details>
          <Name>
            {this.state.name}
          </Name>
          <Description>
            {this.state.description}
          </Description>
          <From>
            <Model handleChangeForm={this.handleChangeForm} />
            <Material handleChangeForm={this.handleChangeForm} />
            {/* <Messenger handleChangeForm={this.handleChangeForm} />*/}
            <PhoneNumber handleChangeForm={this.handleChangeForm} />
          </From>
          <OrderButtonWrapper>
            <OrderButton>Заказать</OrderButton>
          </OrderButtonWrapper>
          <IndividualCaseFromWrapper>
            {this.state.individualCase &&
            <Form />
            }
            {!this.state.individualCase &&
            <IndividualCaseFrom>
              <Message>
                Если вы хотите создать свою<br /> гравировку, воспользуйтесь<br /> специальной формой:
              </Message>
              <Button onClick={this.handleClick}>
                Создать свою гравировку
              </Button>
            </IndividualCaseFrom>
            }
          </IndividualCaseFromWrapper>
        </Details>
        <Footer />
      </Wrapper>
    );
  }
}
