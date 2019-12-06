import React from 'react';
import {BrowserRouter , Router, Route, Switch , HashRouter } from 'react-router-dom';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';
import EditProfile from './pages/EditProfile';
import CreateReport from './pages/CreateReport';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <header></header>
        <Switch>
            <Route exact path={publicPath}> <Register /> </Route>
            <Route path="/user/@:username"> <Profile /> </Route>
            <Route path={routeCodes.Dashboard}> <Dashboard /> </Route>
            <Route path={routeCodes.EditProfile}> <EditProfile /> </Route>
            <Route path={routeCodes.CreateReport}> <CreateReport /> </Route>
            <Route component={Page404} />
        </Switch>
      </div>
    </HashRouter>

  );
}

export default App;

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  Dashboard: `${ publicPath }dashboard`,
  EditProfile: `${ publicPath }editprofile`,
  CreateReport: `${ publicPath }createreport`,
};
