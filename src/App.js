import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header></header>
        <Switch>
            <Route path="/dashboard"> <Dashboard /> </Route>
            <Route path="/"> <Register /> </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
