import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import MainPage from './components/MainPage/index';
import Catalog from './components/Catalog/index';

export default () => (
  <Switch>
    <Route exact path="/" component={MainPage} />
    <Route path="/catalog" component={Catalog} />
  </Switch>
);
