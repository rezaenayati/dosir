import React from 'react';
import {connect} from 'react-redux';
import { Grid, Modal, Paper, Card, IconButton } from '@material-ui/core';
import DoctorProfile from '../components/DoctorProfile';
import DashboardDetails from '../containers/DashboardDetails';
import { withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

import { fetchDoctorInfo } from '../logics/api';
import Header from '../components/Header';
import '../assets/colors/color.js';
import { primarylight, secondarylight } from '../assets/colors/color.js';
import WaitingProgressBar from '../components/WaitingProgressBar';
import DashboardButtons from '../components/DashboardButton';

const mapStateToProps = state => ({ 
                            ...state, 
                            tokens: state.auth.tokens,
                            authenticated: state.auth.authenticated,
                            doctor: state.currentUser.doctor,
                            isMobile: state.device.isMobile
                        });

const mapDispatchToProps = dispatch => ({
    storeDoctorInfo: (doctor) => dispatch({type: 'LOAD_DOCTOR_INFO' , doctor}),
    setNotAuthenticated: () => dispatch({type: 'LOGOUT'}),
});

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            doctor:{

            },
            profile: false
        }

        this.toProfile = () => {
            this.setState({profile: true})
        }
        this.back = () => {
            this.setState({profile: false})
        }
    }

    componentDidMount(){
        this.setState({loading: true} , async () => {
            await fetchDoctorInfo(this.props.tokens.access)
                .then(response => {
                    console.log(response);
                    this.setState({doctor: response, loading: false});
                    this.props.storeDoctorInfo(response);
                })
                        
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
            <WaitingProgressBar wait={this.state.loading} />


            {this.props.isMobile&&<div>
                                {!this.state.profile&&<DashboardDetails onClick={this.toProfile} style={Styles.mobileContainer}   />}
                                {this.state.profile&&
                                <div>
                                    <IconButton onClick={this.back}><CloseIcon /></IconButton>
                                    <DoctorProfile 
                                        email={this.state.doctor.email}
                                        name={this.state.doctor.first_name + "    " + this.state.doctor.last_name}
                                        phone={this.state.doctor.phone_num}
                                        title={this.state.doctor.title}
                                        address={this.state.doctor.address}
                                        about={this.state.doctor.about}
                                        avatarUrl={this.state.doctor.image}
                                        city={this.state.doctor.city}
                                    />
                                </div>}
                            </div>}


            {!this.props.isMobile&&<Grid item={true} container component="main" style={{height: '100vh'}}>
                        <Grid item={true}  xs={false} sm={4} md={9} style={{backgroundSize: 'cover' , backgroundColor: primarylight}}>
                            <div>
                                <DashboardDetails  />
                            </div>
                        </Grid>
                        <Grid item={true} xs={12} sm={8} md={3} style={{backgroundColor: secondarylight}} component="div" elevation={6} square>
                            <DoctorProfile 
                                    email={this.state.doctor.email}
                                    name={this.state.doctor.first_name + "    " + this.state.doctor.last_name}
                                    phone={this.state.doctor.phone_num}
                                    title={this.state.doctor.title}
                                    address={this.state.doctor.address}
                                    about={this.state.doctor.about}
                                    avatarUrl={this.state.doctor.image}
                                    city={this.state.doctor.city}
                                />
                        </Grid>
            </Grid>}
            </div>
        
        );
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Dashboard));

const Styles = {
    mobileContainer: {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
}