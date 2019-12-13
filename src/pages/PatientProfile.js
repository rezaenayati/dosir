import React from 'react';
import { 
    Link, Grid , Paper, Avatar, Divider, Button    
} from "@material-ui/core";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import 'react-vertical-timeline-component/style.min.css';


import Header from '../components/Header';
import TimelineElement from '../components/TimelineElement';
import { primarylight , primaryDark, primaryColor, secondarylight, secondaryDark } from '../assets/colors/color';
import PatientInfo from '../components/PatientInfo';

const mapStateToProps = state => ({ 
    ...state, 
    patientInfo: state.currentPatient.info
});

const mapDispatchToProps = dispatch => ({
});


class PatientProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        
    }

    render(){
        const reverseSignUp = !this.state.signUp;
        return( 
            <div>
                <header>
                    <Header />
                </header>
                    <Grid item={true} container component="main" style={{height: '100vh'}}>
                        <Grid item={true}  xs={false} sm={4} md={9} style={styles.leftContainer} >
                        <VerticalTimeline>
                            <TimelineElement diagnosis='سرماخوردگی' doctorName='احمد جلالی' doctorTitle='اعصاب و  روان' date='۱۳۹۸/۲/۲۱' />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />

                        </VerticalTimeline>

                        </Grid>
                        <Grid item={true} style={styles.rightContainer} component={Paper} xs={12} sm={8} md={3} elevation={1} square>
                            <PatientInfo 
                                name={this.props.patientInfo.name} 
                                family={this.props.patientInfo.family}
                                height={this.props.patientInfo.height}
                                weight={this.props.patientInfo.weight}
                                gender={this.props.patientInfo.gender}
                                marriageStatus={this.props.patientInfo.marriageStatus}
                                birthdate={this.props.patientInfo.birthdate}
                                birthTown={this.props.patientInfo.birthTown}
                                email={this.props.patientInfo.email}
                                phone={this.props.patientInfo.phone}
                                />
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

const styles = {
    leftContainer: {
      backgroundColor: secondarylight  
    },
    rightContainer: {
        backgroundColor: primarylight
    },
    text: {
        fontFamily: 'Vazir'
    },
    largeText: {
        fontFamily: 'Vazir',
        fontSize: 35
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(PatientProfile));