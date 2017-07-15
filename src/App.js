import React, {Component} from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';

class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <Switch>
                  <Route exact path="/" component={MainPage}/>
                  {/* Нужно написать и импортировать Catalog */}
                  <Route path="/catalog" component={Catalog}/>
                </Switch>
              </div>
            </Router>
        );
    }
}

export default App;
