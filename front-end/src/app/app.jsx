import React from 'react';

import { Header, FormLayout, MapLayout } from '../layouts'

import './app.css';

function App() {
  return (
    <div className="wrapper">
      <div className="content-outer">

        <Header />
        <MapLayout />
        <FormLayout />

      </div>
    </div>
  );
}

export default App;
