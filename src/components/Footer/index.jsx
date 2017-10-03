import React, { Component } from 'react';
import SelfDelivery from './SelfDelivery';
import Map from './Map';
import MapPreloader from './Map/MapPreloader';
import Contacts from './Contacts';
import Menu from './Menu';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      isMapRendered: false,
    };
  }

  componentDidMount() {
    setTimeout(() => (
      this.setState({ isMapRendered: true })
    ), 4000);
  }

  render() {
    return (<div>
      <SelfDelivery />
      {this.state.isMapRendered ? <Map /> : <MapPreloader />}
      <Contacts />
      <Menu />
    </div>);
  }
}
