import React from 'react';
import { GoogleMap } from '../../components';
import './map-layout.css';
//import GoogleMap from '../../components/google-map/google-map'

const MapLayout = p => (
  <div className="side left-side">
    <div className="side__inner">
      <GoogleMap />
    </div>
  </div>
);

export default MapLayout;