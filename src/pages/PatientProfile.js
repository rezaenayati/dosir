import React from 'react';
import { 
    Link, Grid , Paper, Avatar, Divider, Button, Tooltip, Fab    
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
                        <Grid item={true}  xs={false} sm={4} md={8} style={styles.leftContainer} >
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
                        <Tooltip placement="top" title="اضافه کردن ریپورت جدید" aria-label="add">
                            <Fab style={styles.fabStyle}>
                            <AddIcon />
                            </Fab>
                        </Tooltip>

                        </Grid>
                        <Grid item={true} style={styles.rightContainer} component={Paper} xs={12} sm={8} md={4} elevation={1} square>
                            <PatientInfo 


                                name={this.props.patientInfo.first_name} 
                                family={this.props.patientInfo.last_name}
                                gender={this.props.patientInfo.gender}
                                marriageStatus={this.props.patientInfo.is_married}
                                birthdate={this.props.patientInfo.birth_date}
                                phone={this.props.patientInfo.phone_num}
                                job={this.props.patientInfo.job}
                                education={this.props.patientInfo.education}
                                current_disease={this.props.patientInfo.current_disease}


                                accident_experience={this.props.patientInfo.accident_experience}
                                blood_transition={this.props.patientInfo.blood_transition}
                                allergies={this.props.patientInfo.allergies}
                                drug_consumption={this.props.patientInfo.drug_consumption}
                                alcohol_consumption={this.props.patientInfo.alcohol_consumption}
                                PPD={this.props.patientInfo.PPD}
                                pop_smear={this.props.patientInfo.pop_smear}
                                BIS={this.props.patientInfo.BIS}
                                other_tests={this.props.patientInfo.other_tests}

                                particular_disease={this.props.patientInfo.particular_disease}
                                cause_of_siblings_death={this.props.patientInfo.cause_of_siblings_death}

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
    },
    fabStyle: {
        color: primaryDark,
        backgroundColor: primarylight,
        position: 'fixed',
        bottom: 16,
        left: 24,
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(PatientProfile));