

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './altcomponents/Home';
import Users from './altcomponents/Users';
import About from './altcomponents/About';
import ErrorPage from './altcomponents/Error';
import NestedRoute from './altcomponents/NestedRout';

function AltApp() {
  return (
    <section className="navbar">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/user" element={<Users />} />
        <Route path="/nested" element={<NestedRoute />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </section>
  );
}

export default AltApp;
