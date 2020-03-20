import React, { FC } from 'react';
import { GoogleApiWrapper, Map, MapProps, Marker } from 'google-maps-react';

interface Location {
  lat: number;
  lng: number;
}

interface OwnProps {
  initLocation: Location;
  currentLocation: Location;
}

type Props = MapProps & OwnProps;

const MapContainer: FC<Props> = ({ google, initLocation, currentLocation }) => {
  return (
    <Map
      google={google}
      zoom={3}
      initialCenter={initLocation}
      center={currentLocation}
    >
      <Marker position={currentLocation} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBzNLo0m5oNd-ooQPAVap0XE3QkMDagYpM',
})(MapContainer);
