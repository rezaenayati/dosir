import React from 'react';
import { TextField, Paper, Fab, CircularProgress, Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPatientInfo , fetchPatientInfo2 } from '../logics/api';
import {fakeFetchPatientInfo } from '../logics/fakeApi';
import { primaryColor , secondarylight, primarylight, secondaryDark } from '../assets/colors/color';

const mapStateToProps = state => ({ 
        ...state, 
        patient: state.currentPatient.info, 
        tokens: state.auth.tokens,
        isMobile: state.device.isMobile,
    });

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

            errorEmpty: false,
            errorNotFound: false,
            success: false,
            loading: false,
        }

        this.changePhone = ev => this.setState({phone: ev.target.value});

        this.handlePatientProfileButton = () => {
            this.props.history.push('/patientprofile');
        }

        this.handleButtonClick = () => {
            this.setState({
                errorEmpty: false,
                errorNotFound: false,
                success: false,
                loading: false,
            })
            if (!this.state.loading) {
                this.setState({success: false, loading: true})
            }
            if(this.state.phone === ''){                
                this.setState({loading: false, errorNotFound: false, errorEmpty: true, success: false})
                return 
            }
                console.log("else");
                setTimeout(async () => {
                    //request phone to the server and get response()
                    const patient = await fakeFetchPatientInfo(this.state.phone);
                    //save response in the redux
                    this.props.submitPatientInfo(patient)
                    if(patient !== null)
                        this.setState({
                            name: patient.first_name+" "+patient.last_name,
                            birthdate: patient.birth_date,
                            gender: patient.gender,
                            success: true, 
                            loading: false,
                            errorEmpty: false,
                            errorNotFound: false
                        })
                    else
                        this.setState({
                            loading: false,
                            success: false,
                            errorNotFound: true,
                            errorEmpty: false,
                        })
                } , 2000);
            // }
            console.log(this.state.loading);
            
        }

    }

    async componentDidMount() {
        // await fetchPatientInfo2(this.props.tokens.access)
        // await fetchPatientInfo(this.props.tokens.access).then(response => console.log(response))
        if(this.props.patient !== undefined) {
            this.handleButtonClick();
        };
    }

    render(){
        let phone = '';
        if(this.props.patient === undefined || this.props.patient === null) ;
        else{
            phone = this.props.patient.phone_num;
            // this.handleButtonClick();
        };
        return(
            <div style={styles.userIdentity}>
                <Paper dir="rtl" style={this.props.isMobile ? styles.mobileUserInfoContainer : styles.userInfoContainer}>

                    <div style={styles.rowContainer}>
                        <div>
                            

                            <div dir='rtl' style={this.props.isMobile ? styles.mobileCheckNumberContainer : styles.checkNumberContainer}>
                                <div style={styles.rowMargeTopContainer}>
                                    <p style={styles.textStyle}>شماره همراه بیمار:</p>
                                    <TextField defaultValue={phone} onChange={this.changePhone} variant="outlined"/>
                                    <div style={styles.fabContainer}>
                                        <Fab aria-label="save" color="primary" onClick={this.handleButtonClick} style={styles.fab}>
                                        {this.state.success ? <CheckIcon /> : <p style={styles.text}>بررسی</p>}
                                        </Fab>
                                        {this.state.loading && <CircularProgress size={68} style={styles.circularProgress} />}
                                    </div>
                                </div>
                            </div>


                            <div>
                                {this.state.errorNotFound&&<p style={styles.textStyle}>*** بیماری با این شماره یافت نشد</p>}
                                {this.state.errorEmpty&&<p style={styles.textStyle}> ***فیلد خالی را پر کنید</p>}
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
    mobileCheckNumberContainer: {
        marginTop: 'auto', 
        marginBottom: 'auto', 
        width: window.innerWidth * 2/3
    },
    checkNumberContainer: {
        marginTop: 'auto', 
        marginBottom: 'auto', 
    },
    mobileUserInfoContainer: {
        marginTop: 10, 
        width: window.innerWidth
    },
    userInfoContainer: {
        marginTop: 10, 
        width: 600
    },
    profileButton: {
        marginLeft: 10,
        marginRight: 10, 
        fontFamily:'Vazir',
        backgroundColor: primarylight,
    },
}