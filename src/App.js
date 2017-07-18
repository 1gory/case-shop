import React, { Component } from 'react';
import './App.css';
import './index.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';

export default class extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/catalog" component={Catalog} />
      </Switch>
    );
  }
}
