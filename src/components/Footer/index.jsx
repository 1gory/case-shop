import React from 'react';
import SelfDelivery from './SelfDelivery';
import Map from './Map';
import MapPreloader from './Map/MapPreloader';
import Contacts from './Contacts';
import Menu from './Menu';

export default ({ mapPreloader }) => (
  <div>
    <SelfDelivery />
    {mapPreloader ? <MapPreloader /> : <Map /> }
    <Contacts />
    <Menu />
  </div>
);
