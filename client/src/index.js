import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import App from './app';
import './index.css';

require('dotenv').config()


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
