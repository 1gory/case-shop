import React, {Component} from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-flexbox-grid';
import Header from '../Header';
import Footer from '../Footer';
import Card from '../Card';
import { Link } from 'react-router-dom';

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
  padding-bottom: 60px;
`;

const RowWrapper = styled.div`
  margin: 15px;
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
          <RowWrapper>
            <Row>
              {[...Array(4)].map((x, i) =>
                <Col xs={6} sm={6} md={4} lg={3}>
                  <Card />
                </Col>)}
            </Row>
          </RowWrapper>
        <Footer />
      </Wrapper>
    );
  }
}
