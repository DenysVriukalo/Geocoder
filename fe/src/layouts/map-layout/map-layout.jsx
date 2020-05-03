import React from 'react';
import { GoogleMap } from '../../components';
import './map-layout.css';

const MapLayout = () => {

  const addMarkers = (map, places) => {
    places.forEach((place, index) => {
      const marker = new window.google.maps.Marker({
        map,
        position: place.coords,
        label: `${index + 1}`,
        title: place.title,
      })
      marker.addListener(`click`, () => {
        window.location.href = place.url
      })
    })
  };
 
  const places = [{
    coords: { lat: 49.9935, lng: 36.2304 }, // required: latitude & longitude at which to display the marker
    title: `Mashrooms here`, // optional
    url: `https://en.wikipedia.org/wiki/Amanita`, // optional
  }]

  return (
  <div className="side left-side">
    <div className="side__inner">
      <GoogleMap onMount={addMarkers} places={places} />
    </div>
  </div>
  )
};
export default MapLayout;