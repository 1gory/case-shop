import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export default props => (
  <BreadCrumbs>
    <StyledLink to="/">Главная</StyledLink>
    {props.breadcrumbs.map(crumb => (
      <span>/
        <StyledLink to={crumb.link}>{crumb.name}</StyledLink>
      </span>
    ))
    }
  </BreadCrumbs>
);
