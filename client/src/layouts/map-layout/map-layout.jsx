import React from 'react';
import { GoogleMap } from '../../components';
import './map-layout.css';

const MapLayout = p => (
  <div class="side left-side">
    <div class="side__inner">
      <GoogleMap />
    </div>
  </div>
);

export default MapLayout;