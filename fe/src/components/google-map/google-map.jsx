import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import { array, func } from 'prop-types';
import { functions, isEqual, omit } from 'lodash'

import API_KEY from '../../utils/api-key';
import './google-map.css';

function GoogleMap({ options, onMount, places }) {
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        ? `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        : `https://maps.googleapis.com/maps/api/js?key=${API_KEY.REACT_APP_GOOGLE_MAPS_API_KEY}`
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options])

  if (map && typeof onMount === `function`) onMount(map, places)

  return (
    <div className="map-container">
      <div
        style={{ height: `100%`, borderRadius: `20px`, overflow: `hidden`, border: `1px solid var(--yellow)` }}
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

const mapStateToProps = store => ({
  places: store.placesToShow
});

export default connect(mapStateToProps)(React.memo(GoogleMap, shouldNotUpdate))

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