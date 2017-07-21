import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Header from '../Header/index';
import Footer from '../Footer/index';
import Card from '../Card/index';
import SelfDelivery from '../Footer/SelfDelivery/index';
import Map from '../Footer/Map/index';

const H2 = styled.h2`
  font-family: 'Lato-SemiBold';
  font-size: 24px;
  margin: 15px;
`;

const BreadCrumbs = styled.div`
  color: #7e7e7e;
  margin-left: 10px;
  padding-top: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #7e7e7e;
  padding: 5px;
`;

const Wrapper = styled.div`
  background-color: #f9f9f9;
`;

const RowWrapper = styled.div`
  margin: 15px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Lato-Regular';
  padding: 50px;
`;

const PaginationLink = styled.span`
  padding: 10px 15px;
  margin: 5px;
  border: solid 1px #222222;
  border-radius: 20px;
`;

const NextPage = styled.span`
  padding: 10px 20px;
  margin: 5px;
  border: solid 1px #222222;
  border-radius: 20px;
`;

export default () => (
  <Wrapper>
    <Header />
    <BreadCrumbs>
      <StyledLink to="/">Главная</StyledLink>
      /
      <StyledLink to="/catalog">Каталог</StyledLink>
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
    <PaginationWrapper>
      <PaginationLink>1</PaginationLink>
      <PaginationLink>2</PaginationLink>
      <PaginationLink>3</PaginationLink>
      ...
      <PaginationLink>9</PaginationLink>
      <NextPage>Следующая</NextPage>
    </PaginationWrapper>
    <SelfDelivery />
    <Map />
    <Footer />
  </Wrapper>
);
