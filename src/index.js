import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'normalize.css';

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
  document.getElementById('root')
);

registerServiceWorker();
