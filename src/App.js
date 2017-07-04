import React, {Component} from 'react';
import './App.css';
import './index.css';
// import Header from './components/header';
// import Menu from './components/menu';
import {BrowserRouter as Router} from 'react-router-dom';
import MainPage from './components/MainPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <MainPage />
                    {/*<Switch>*/}
                        {/*<Route exact path="/" component={MainPage}/>*/}
                        {/*/!*<Route path="/products/:group/:type/:id" component={Show}/>*!/*/}
                        {/*/!*<Redirect from="/" to="/products/football/cleats"/>*!/*/}
                    {/*</Switch>*/}
                </div>
            </Router>
        );
    }
}

export default App;
