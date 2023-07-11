import React from 'react';
import './App.css';
import { Router, Route } from 'wouter';
import { Home } from './screens/Home';
import { FindVeknid } from './screens/FindVeknId';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/find-veknid" component={FindVeknid} />
    </Router>
  );
}

export default App;
