import React, {Component} from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';

class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <Switch>
                  <Route exact path="/" component={MainPage}/>
                  <Route path="/catalog" component={Catalog}/>
                </Switch>
              </div>
            </Router>
        );
    }
}

export default App;
