import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';
import Delivery from './components/Delivery';
import Cooperation from './components/Cooperation';
import Product from './components/Product';
import Payment from './components/Payment';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Checkout from './components/Checkout';
import SuccessPayment from './components/Payment/SuccessPayment';
import ErrorPayment from './components/Payment/ErrorPayment';
import GenericNotFound from './components/GenericNotFound';

export default () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/catalog/:catalogName?" component={Catalog} />
    <Route path="/delivery" component={Delivery} />
    <Route path="/cooperation" component={Cooperation} />
    <Route path="/product/:id" component={Product} />
    <Route path="/payment" component={Payment} />
    <Route path="/shopSuccessUrl" component={SuccessPayment} />
    <Route path="/shopFailUrl" component={ErrorPayment} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/blog/:articleName?" component={Blog} />
    <Route path="*" component={GenericNotFound} />
  </Switch>
);
