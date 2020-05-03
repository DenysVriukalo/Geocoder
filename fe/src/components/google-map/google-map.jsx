import React, { useEffect, useState, useRef } from 'react';
import { array, func } from 'prop-types';
import './google-map.css';
import { functions, isEqual, omit } from 'lodash'

function GoogleMap({ options, onMount, places }) {
  const ref = useRef();
  const [map, setMap] = useState();
  // const [places, setPlaces] = useState();
  // console.log("places", places)


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

  /**  Example
    const place = {
      coords: { lat: 42, lng: 42 }, // required: latitude & longitude at which to display the marker
      title: `Mashrooms here`, // optional
      url: `https://en.wikipedia.org/wiki/Amanita`, // optional
    }
  */


  useEffect(() => {
    if (places !== undefined) {
      if (map && typeof onMount === `function`) onMount(map, places)
    }
  }, [onMount, map, places]);
  
  return (
    <div className="map-container">
      <div 
        style={{ height: `100%`, borderRadius: `20px`, overflow: `hidden`, border: `1px solid var(--yellow)`}}
        {...{ ref }}
      />
    </div>
  )
}

function shouldNotUpdate(props, nextProps) {
  const [funcs, nextFuncs] = [functions(props), functions(nextProps)]
  const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs))
  const noFuncChange =
    funcs.length === nextFuncs.length &&
    funcs.every(fn => props[fn].toString() === nextProps[fn].toString())
  return noPropChange && noFuncChange
}

export default React.memo(GoogleMap, shouldNotUpdate)

GoogleMap.propTypes = {
  onMount: func,
  places: array,
};

GoogleMap.defaultProps = {
  options: {
    center: { lat: 48.3794, lng: 31.1656 },
    zoom: 6,
  }  
};