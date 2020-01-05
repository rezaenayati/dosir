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
import WaitingProgressBar from '../components/WaitingProgressBar';
import { fakeFetchReportList , fakeDoctorInfoForReportElement} from '../logics/fakeApi';

const mapStateToProps = state => ({ 
    ...state, 
    patientInfo: state.currentPatient.info
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (report) => dispatch({type: 'SUBMIT_REPORT_DETAIL' , report}),
});


class PatientProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openReportDetail: false,
            reports: [

            ],
            loading: false,
            loadingReportDetail: false,
            reportDetail: {}
        }

        this.toCreateReport = () => {
            this.props.history.push('/createreport');    
        }
        this.toReportDetail = (element) => () => {
            this.setState({loadingReportDetail: true} , () => {
                this.saveElement(element);
                this.setState({loadingReportDetail: false})                
            })
            this.props.onSubmit(element)
            this.setState({loadingReportDetail: false})
            console.log(this.reportDetail);
            this.open();
        }

        this.saveElement = (element) => () => {
            this.setState({reportDetail: element} , async () => {
                this.reportDetail = element
            }) 
        }
        this.open = () => {
            this.setState({openReportDetail: true})
        }
        this.back = () => {
            this.setState({openReportDetail: false})
        }
        this.reportDetail = {};
    }
    componentWillMount(){
        if(this.props.patientInfo === undefined)
            this.props.history.push('/dashboard'); 
        else {
            this.setState({loading: true} , async () => {
                const list = await fakeFetchReportList(this.props.patientInfo.phone_num);
                for(var i = 0; i < list.length; i++){
                    this.state.reports.push(list[i])
                }
                this.setState({loading: false})
            })
        }   
    }

    render(){
        const renderElements = this.state.reports.map((element) =>
            <TimelineElement 
                onClick={this.toReportDetail(element)} 
                diagnosis={element.final_diagnosis} 
                doctorName={element.doctor_first_name + " " + element.doctor_last_name} 
                doctorTitle={element.doctor_title} 
                date={element.date} />
        );

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
                        
                        
                        
                            {this.state.openReportDetail&&<ReportDetail
                                    // value={this.reportDetail}
                                    onClose={this.back}
                                    open={this.state.openReportDetail}
                                    />}

                            <WaitingProgressBar open={this.state.loading} />
                            <VerticalTimeline>
                                {renderElements}
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