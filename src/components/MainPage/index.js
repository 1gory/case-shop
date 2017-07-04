import React, {Component} from 'react';
import Header from '../header';
import Menu from '../menu';
import Banner from './banner'
import Offer from './offer';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu />
                <Banner />
                <Offer />
            </div>
        );
    }
}

export default App;
