import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import './index.css';

export default () => (
  <Switch>
    {routes.map(route => <Route key={route.id} {...route} />)}
  </Switch>
);
