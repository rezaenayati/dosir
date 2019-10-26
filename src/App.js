import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Page404 from './pages/Page404';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header></header>
        <Switch>
            <Route exact path="/"> <Register /> </Route>
            <Route exact path="/dashboard"> <Dashboard /> </Route>
            <Route component={Page404} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
