import React from 'react';
import styled from 'styled-components';
import GoogleMap from 'google-map-react';
import MapStyle from './MapStyle.json';
import locationIcon from './location.svg';

const Wrapper = styled.div`
  height: 370px;
`;

const Marker = styled.img`
  width: 40px;
`;

const LocationIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const LocationWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 15px;
`;

const Location = styled.div`
  background: #fff;
  margin: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

const Label = styled.div`
  font-family: 'Lato-Bold';
  color: rgba(59, 59, 59, 0.5);
  font-size: 12px;
  background: #fff;
  padding-bottom: 5px;
`;

const Address = styled.div`
  font-family: 'Lato-Regular';
  font-size: 16px;
  color: #3b3b3b;
`;

export default () => (
  <Wrapper>
    <LocationWrapper>
      <Location>
        <LocationIcon src={locationIcon} />
        <div>
          <Label>Адресс:</Label>
          <Address>4-й Лихачевский переулок, 13 стр.1</Address>
        </div>
      </Location>
    </LocationWrapper>
    <GoogleMap
      bootstrapURLKeys={{
        key: 'AIzaSyDtghT2dehFPUOPIn1JECSjwLBY0qW8-bk',
        language: 'ru',
      }}
      defaultCenter={{ lat: 55.856689, lng: 37.530180 }}
      defaultZoom={12}
      options={{
        styles: MapStyle,
        scrollwheel: false,
        zoom: 13,
      }}
    >
      <div lat={55.856689} lng={37.530180}>
        <Marker src={locationIcon} />
      </div>
    </GoogleMap>
  </Wrapper>
);
