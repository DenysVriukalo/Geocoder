import React, { useEffect, useState, useRef } from 'react';
import './google-map.css';

export default function GoogleMap({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();
  
  useEffect(() => {
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options])

  if (map && typeof onMount === `function`) onMount(map, onMountProps)

  return (
    <div className="map-container">
      <div 
        style={{ height: `100%`, borderRadius: `20px`, overflow: `hidden`, border: `1px solid var(--yellow)`}}
        {...{ ref, className }}
      />
    </div>
  )
}

GoogleMap.defaultProps = {
  options: {
    center: { lat: 48.3794, lng: 31.1656 },
    zoom: 6,
  },
};