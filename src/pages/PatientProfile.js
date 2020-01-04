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
import ReportDetail from '../components/ReportDetail';
import { width } from '@material-ui/system';

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
            reportDetail: false
        }

        this.toCreateReport = () => {
            this.props.history.push('/createreport');    
        }
        this.toReportDetail = () => {
            this.setState({reportDetail: true})
        }
        this.back = () => {
            this.setState({reportDetail: false})
        }
    }

    componentWillMount(){
        if(this.props.patientInfo === undefined)
            this.props.history.push('/dashboard');    
    }

    render(){
        if(this.props.patientInfo === undefined)
            return null;   
        const reverseSignUp = !this.state.signUp;
        return( 
            <div>
                <header>
                    <Header />
                </header>
               
                   
                    <Grid item={true} container component="main" style={{height: '100vh'}}>
                        
                        
                        <Grid item={true} style={styles.rightContainer} component={Paper} xs={12} sm={8} md={4} elevation={1} square>
                            <PatientInfo 

                                profile_pic={this.props.patientInfo.profile_pic}
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
                         
                        <Grid item={true}  xs={false} sm={4} md={8} style={styles.leftContainer} >
                        
                        
                        
                            <ReportDetail
                                    onClose={this.back}
                                    open={this.state.reportDetail}
                                    />

                            <VerticalTimeline>
                                <TimelineElement onClick={this.toReportDetail} diagnosis='شیزوفرنی' doctorName='احمد جلالی' doctorTitle='اعصاب و  روان' date='۱۳۹۸/۸/۱۰' />
                                <TimelineElement onClick={this.toReportDetail} diagnosis='سر درد' doctorName='مجید سمیعی' doctorTitle='مغز و اعصاب' date='۱۳۹۸/۷/۲۱' />
                                <TimelineElement onClick={this.toReportDetail} diagnosis='شیزوفرنی' doctorName='احمد جلالی' doctorTitle='اعصاب و  روان' date='۱۳۹۸/۴/۲' />
                                <TimelineElement onClick={this.toReportDetail} diagnosis='سرماخوردگی' doctorName='محمد پورتکلو' doctorTitle='عمومی' date='۱۳۹۷/۱۲/۲۱' />
                                <TimelineElement onClick={this.toReportDetail} diagnosis='شیزوفرنی' doctorName='احمد جلالی' doctorTitle='اعصاب و  روان' date='۱۳۹۷/۱۱/۲۹' />

                            </VerticalTimeline>

                            <Tooltip title="اضافه کردن ریپورت جدید" aria-label="add">
                                    <Fab onClick={this.toCreateReport} style={styles.fabStyle}>
                                    <AddIcon />
                                    </Fab>
                            </Tooltip>
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

const styles = {
    leftContainer: {
      backgroundColor: secondarylight,
      width : window.innerWidth 
    },
    rightContainer: {
        backgroundColor: primarylight,
        width : window.innerWidth 
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
        right: 24,
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(PatientProfile));