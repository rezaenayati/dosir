import React from 'react';
import {connect} from 'react-redux';
import { Grid } from '@material-ui/core';
import DoctorProfile from '../components/DoctorProfile';
import DashboardDetails from '../components/DashboardDetails';
import { withRouter } from 'react-router-dom';

import { fetchDoctor } from '../logics/api';
import Header from '../components/Header';
import '../assets/colors/color.js';
import { primarylight, secondarylight } from '../assets/colors/color.js';

const mapStateToProps = state => ({ 
                            ...state, 
                            email: state.auth.email,
                            authenticated: state.auth.authenticated,
                            doctor: state.currentUser.doctor
                        });

const mapDispatchToProps = dispatch => ({
    storeDoctorInfo: (doctor) => dispatch({type: 'LOAD_DOCTOR_INFO' , doctor}),
    setNotAuthenticated: () => dispatch({type: 'LOGOUT'}),
});

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            auth: false,
            loading: false,
            doctor:{

            }
        }
    }

    componentDidMount(){
        this.setState({loading: true} , async () => {
            const dU = await fetchDoctor(this.props.email);
            this.setState({doctor: dU, loading: false});
            this.props.storeDoctorInfo(dU);
            console.log(dU);
                        
        });
        if(!this.props.authenticated) 
            this.props.history.push('/');    

    }

    render(){
        const doctor = this.state.doctor;
        if(!doctor){
            return null;
        }
        return(
            <div>
            <header>
                <Header />
            </header>
            <Grid item={true} container component="main" style={{height: '100vh'}}>
                        <Grid item={true}  xs={false} sm={4} md={9} style={{backgroundSize: 'cover' , backgroundColor: primarylight}}>
                            <DashboardDetails  />
                        </Grid>
                        <Grid item={true} xs={12} sm={8} md={3} style={{backgroundColor: secondarylight}} component="div" elevation={6} square>
                            <DoctorProfile 
                                email={this.props.email}
                                name={this.state.doctor.name + "    " + this.state.doctor.family}
                                phone={this.state.doctor.phone}
                                title={this.state.doctor.title}
                                address={this.state.doctor.address}
                                about={this.state.doctor.about}
                                avatarUrl={this.state.doctor.image}
                                city={this.state.doctor.city}
                                />
                        </Grid>
            </Grid>
            </div>
        
        );
    }

}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Dashboard));