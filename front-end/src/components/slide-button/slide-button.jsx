import React from 'react';
import './slide-button.css';

const SlideButton = ({ hidden, ...otherProps }) => (
  <div className={`btn-slide ${hidden ? 'btn__active' : ''}`} {...otherProps} />
);

export default SlideButton;