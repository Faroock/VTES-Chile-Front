import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FindVeknid } from './screens/FindVeknId';
import { Home } from './screens/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-veknid" element={<FindVeknid />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
