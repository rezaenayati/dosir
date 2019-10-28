import React from 'react';
import {connect} from 'react-redux';
import { Grid, Divider } from '@material-ui/core';
import DoctorProfile from '../components/DoctorProfile';
import DashboardDefault from '../components/DashboardDefault';
import {withRouter} from 'react-router-dom';

import {fetchDoctor} from '../logics/api';

const mapStateToProps = state => ({ 
                            ...state, 
                            email: state.auth.email,
                            authenticated: state.auth.authenticated,
                        });

const mapDispatchToProps = dispatch => ({
    // addDoctor: ({}) => {}
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
            // this.props.addDoctor(dU);
        });
        if(!this.props.authenticated) 
            this.props.history.push('/');    

    }

    render(){
        return(
            <div>
            <header>
            </header>
            <Grid item={true} container component="main" style={{height: '100vh'}}>
                        <Grid item={true}  xs={false} sm={4} md={9} style={{backgroundSize: 'cover'}}>
                        </Grid>
                        <Grid item={true} xs={12} sm={8} md={3} style={{backgroundColor: '#f2fdff'}} component="div" elevation={6} square>
                            <DoctorProfile 
                                email={this.props.email}
                                name={this.state.doctor.name + "    " + this.state.doctor.family}
                                phone={this.state.doctor.phone}
                                title={this.state.doctor.title}
                                address={this.state.doctor.address}
                                about={this.state.doctor.about}
                                avatarUrl={this.state.doctor.image}
                                />
                        </Grid>
            </Grid>
            </div>
        
        );
    }

}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Dashboard));