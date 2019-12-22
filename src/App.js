import React from 'react';
import {BrowserRouter , Router, Route, Switch , HashRouter } from 'react-router-dom';
import Responsive from 'react-responsive-decorator';
import { connect } from 'react-redux';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';
import EditProfile from './pages/EditProfile';
import CreateReport from './pages/CreateReport';
import PatientProfile from './pages/PatientProfile';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import './App.css';

const mapStateToProps = state => ({ 
    ...state, 
    isMobile: state.device.isMobile
});

const mapDispatchToProps = dispatch => ({
    setDeviceMobile: () => dispatch({ type: 'SET_DEVICE_MOBILE'}), 
    setDeviceDesktop: () => dispatch({ type: 'SET_DEVICE_DESKTOP'}),
});

class App extends React.Component {


  componentDidMount(){
    this.props.media({ minWidth: 768 }, () => {
        this.props.setDeviceDesktop();
    });

    this.props.media({ maxWidth: 768 }, () => {    
        this.props.setDeviceMobile();
    });

}


  render(){
    return (
      <HashRouter basename='/'>
        <div>
          <header></header>
          <Switch>
              <Route exact path={publicPath}> <Register /> </Route>
              <Route path="/user/@:username"> <Profile /> </Route>
              <Route path={routeCodes.PatientProfile}> <PatientProfile /> </Route>
              <Route path={routeCodes.Dashboard}> <Dashboard /> </Route>
              <Route path={routeCodes.EditProfile}> <EditProfile /> </Route>
              <Route path={routeCodes.CreateReport}> <CreateReport /> </Route>
              <Route path={routeCodes.AboutUs}> <AboutUs /> </Route>
              <Route path={routeCodes.ContactUs}> <ContactUs /> </Route>
              <Route component={Page404} />
          </Switch>
        </div>
      </HashRouter>

    );
  }
}

export default Responsive(connect(mapStateToProps , mapDispatchToProps)(App));

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  Dashboard: `${ publicPath }dashboard`,
  EditProfile: `${ publicPath }editprofile`,
  CreateReport: `${ publicPath }createreport`,
  PatientProfile: `${ publicPath }patientprofile`,
  AboutUs: `${ publicPath }aboutus`,
  ContactUs: `${ publicPath }contactus`
};
