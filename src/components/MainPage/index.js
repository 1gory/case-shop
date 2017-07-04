import React, {Component} from 'react';
import Header from '../header';
import Menu from '../menu';
import Banner from './banner'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu />
                <Banner />
            </div>
        );
    }
}

export default App;
