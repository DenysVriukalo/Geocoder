import React from 'react';
import './google-map.css';

const GoogleMap = props => (
  <div className="map-container">
    <iframe className="map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15075.856517643759!2d34.48635579031671!3d48.94325255723831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1587678852479!5m2!1sen!2sua"
      style={{ height: '100%', width: '100%' }}></iframe>
  </div>
);

export default GoogleMap;