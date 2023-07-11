import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { FindVeknid } from './screens/FindVeknId';
import { Home } from './screens/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-veknid" element={<FindVeknid />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
