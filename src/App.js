import React, {Component} from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';
import FeedbackFail from './components/MainPage/FeedbackForm/FeedbackFail';
import FeedbackSucces from './components/MainPage/FeedbackForm/FeedbackSucces';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={ScrollToTop} />
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/catalog" component={Catalog}/>
            <Route path="/feedbackfail" component={FeedbackFail}/>
            <Route path="/feedbacksucces" component={FeedbackSucces}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
