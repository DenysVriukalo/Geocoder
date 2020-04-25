import React from 'react';
import './custom-button.css';

const CustomButton = ({ large, text, ...otherProps }) => (
  <button
    className={`btn ${large ? "btn-lg" : ""}`}
    {...otherProps}
  >
    {text}
  </button>
);

export default CustomButton;