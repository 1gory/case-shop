import React, {Component} from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import Header from '../Header';
import Footer from '../Footer';
import Card from '../Card';
import { Link } from 'react-router-dom';
import SelfDelivery from '../Footer/SelfDelivery'
import Map from '../Footer/Map'

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 32px;
  text-align: left;
  margin: 15px;
`;

const BreadCrumbs = styled.div`
  text-align: left;
  margin: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4a4a4a;
  font-family: 'Lato-Regular';
  font-size: 16px;
  margin :6px;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  color: #4a4a4a;
  text-align: center;
`;

const RowWrapper = styled.div`
  margin: 15px;
`;

const PagWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 38px;
  font-family: 'Lato-Regular';
  margin: 50px 0 0 50px;
`;

const PagLink = styled.span`
  width: 38px;
  height: 38px;
  margin: 5px;
  border: solid 1px #222222;
  border-radius: 20px;
`;

const NextPage = styled.span`
  width: 138px;
  margin: 5px;
  border: solid 1px #222222;
  border-radius: 20px;
`;

export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
          <BreadCrumbs>
            <StyledLink to='/'>Главная</StyledLink>
            /
            <StyledLink to='/'>Каталог</StyledLink>
          </BreadCrumbs>
          <H2>Гравированные чехлы</H2>
          <RowWrapper>
            <Row>
              {[...Array(4)].map((x, i) =>
                <Col xs={6} sm={6} md={4} lg={3}>
                  <Card />
                </Col>)}
            </Row>
          </RowWrapper>
          <PagWrapper>
            <PagLink>1</PagLink>
            <PagLink>2</PagLink>
            <PagLink>3</PagLink>
              ...
            <PagLink>9</PagLink>
            <NextPage>Следующая</NextPage>
          </PagWrapper>
        <SelfDelivery/>
        <Map/>
        <Footer />
      </Wrapper>
    );
  }
}
