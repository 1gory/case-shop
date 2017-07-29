import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';
import Delivery from './components/Delivery';
import Product from './components/Product';

export default () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/catalog" component={Catalog} />
    <Route path="/delivery" component={Delivery} />
    <Route path="/product/:id" component={Product} />
  </Switch>
);
