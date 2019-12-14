import React from 'react';
import { TextField, Paper, Fab, CircularProgress, Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { primaryColor , secondarylight, primarylight, secondaryDark } from '../assets/colors/color';

const mapStateToProps = state => ({ ...state});

const mapDispatchToProps = dispatch => ({
    submitPatientInfo: (info) => {
        dispatch({type: 'SUBMIT_PATIENT_INFO' , info});
    }
});

class UserInfoBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            phone: '',
            name: '',
            birthdate: '',
            gender: '',

            success: false,
            loading: false,
        }

        this.changePhone = ev => this.setState({phone: ev.target.value});

        this.handlePatientProfileButton = () => {
            this.props.history.push('/patientprofile');
        }

        this.handleButtonClick = () => {

            //this is sample patient
            const patient = {
                "phone_num": "+989123555555",
                "first_name": "مهدی",
                "last_name": "همتی",
                "profile_pic": "",
                "birth_date": "1398/2/1",
                "gender": "مرد",
                "disease_history_duration": "درد بیدرمان",
                "education": "بی سواد",
                "job": "بیکار",
                "cause_of_siblings_death": "خیلی",
                "particular_disease": "زیاد",
                "allergies": "فراوان",
                "current_disease": "مرگ",
                "accident_experience": false,
                "blood_transition": false,
                "drug_consumption": false,
                "alcohol_consumption": false,
                "is_married": false,
                "PPD": false,
                "BIS": false,
                "pop_smear": false,
                "other_tests": false
            }


            if (!this.state.loading) {
                this.setState({success: false, loading: true})
            }
            setTimeout(() => {
                //request phone to the server and get response()
                //save response in the redux
                this.props.submitPatientInfo(patient)
                this.setState({
                    name: patient.first_name+" "+patient.last_name,
                    birthdate: patient.birth_date,
                    gender: patient.gender,
                    success: true, 
                    loading: false
                })
            } , 2000);
        }

    }


    render(){
        return(
            
            <div style={styles.userIdentity}>
                <Paper dir="rtl" style={styles.userInfoContainer}>

                    <div style={styles.rowContainer}>
                        <div>
                            

                            <div dir='rtl' style={styles.checkNumberContainer}>
                                <div style={styles.rowMargeTopContainer}>
                                    <p style={styles.textStyle}>شماره همراه بیمار:</p>
                                    <TextField onChange={this.changePhone} variant="outlined"/>
                                    <div style={styles.fabContainer}>
                                        <Fab aria-label="save" color="primary" onClick={this.handleButtonClick} style={styles.fab}>
                                        {this.state.success ? <CheckIcon /> : <p style={styles.text}>بررسی</p>}
                                        </Fab>
                                        {this.state.loading && <CircularProgress size={68} style={styles.circularProgress} />}
                                    </div>
                                </div>
                            </div>


                            <div>   
                                <p style={styles.textStyle}>اطلاعات بیمار</p>
                                <div style={styles.infoContainer}>
                                    <p style={styles.textStyle}>نام :  {this.state.success&&this.state.name} </p>
                                    <p style={styles.textStyle}>تاریخ تولد: {this.state.success&&this.state.birthdate}  </p>
                                </div>
                                <div style={styles.infoContainer}>
                                    <p style={styles.textStyle}>تاریخ ویزیت : ۱۳۹۸/۲/۲۳</p>
                                    <p style={styles.textStyle}>جنسیت:  {this.state.success&&this.state.gender} </p>
                                </div>
                            </div>
                        </div>

                        {this.state.success&&<Button onClick={this.handlePatientProfileButton} style={styles.profileButton}>مشاهده پروفایل بیمار</Button>}     
                        
                    </div>

                </Paper>
            </div>
        
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInfoBox));


const styles = {
    fabContainer: {
        marginRight: 10, 
        position: 'relative'
    },
    fab: {
        backgroundColor: primaryColor
    },
    text: {
        fontFamily:'Vazir'
    },
    circularProgress: {
        position: 'absolute',
        color: primaryColor,
        top: -6,
        left: -6,
        zIndex: 1,                                    
    },
    textStyle: {
        marginLeft: 5,
        marginRight: 5, 
        fontFamily:'Vazir',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowMargeTopContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    userIdentity: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    checkNumberContainer: {
        marginTop: 'auto', 
        marginBottom: 'auto', 
        height: 100 ,
        width: 500
    },
    userInfoContainer: {
        marginTop: 10, 
        height: 300 ,
        width: 600
    },
    profileButton: {
        marginLeft: 10,
        marginRight: 10, 
        fontFamily:'Vazir',
        backgroundColor: primarylight,
    },
}