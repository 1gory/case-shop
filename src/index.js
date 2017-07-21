/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

ReactDOM.render(
  <Router>
    <div>
      <Route component={ScrollToTop} />
      <App />
    </div>
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
