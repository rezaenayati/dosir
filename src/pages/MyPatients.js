import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import { Paper, List, ListItem, Avatar } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import {connect} from 'react-redux';


import { primarylight , primaryDark, primaryColor, secondarylight, secondaryDark } from '../assets/colors/color';
import MyPatientListItem from '../components/MyPatientListItem.js';
import { fakeFetchPatinetsList } from "../logics/fakeApi";
import WaitingProgressBar from '../components/WaitingProgressBar';
import { timeout } from 'q';


const mapStateToProps = state => ({ 
    ...state, 
    patient: state.currentPatient.info, 
    tokens: state.auth.tokens,
    isMobile: state.device.isMobile,
    doctor: state.currentUser.doctor
});

const mapDispatchToProps = dispatch => ({
submitPatientInfo: (info) => {
    dispatch({type: 'SUBMIT_PATIENT_INFO' , info});
}
});

class MyPatients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            progressShow: false,
            patients: [

            ],
            skeletor: [
                {},{},{},{}
            ]
        }
        this.onClick = (patient) => (patients) => {
            this.props.submitPatientInfo(patient)
            this.props.history.push('/patientprofile');
        }
        this.correctNum = (phone) => {
            let newPhone = phone.substring(3)
            phone = "0" + newPhone;
            return phone;
        }
    }
    

    componentWillMount() {
        this.setState({progressShow: true})
        this.setState({loading: true} , async () => {
            const list = await fakeFetchPatinetsList(this.correctNum(this.props.doctor.phone_num))
            this.setState({loading: false})
            console.log(list);
            
            for(var i = 0; i < list.length ; i++){
                this.state.patients.push(list[i])
            }
        })
        setTimeout(async () => {
            this.setState({progressShow: false})
        } , 2000)
    }

    render(){
        const renderItemList = this.state.patients.map((patient) =>
            <MyPatientListItem onClick={this.onClick(patient)} first_name={patient.first_name} last_name={patient.last_name} profile_pic={patient.profile_pic} phone_num={patient.phone_num} next_date="1398/12/2" last_date="1398/2/1" />
        );
        const renderSkeletor = this.state.skeletor.map((patient) =>
            <ListItem button>
                <div style={styles.rowContainer}>
                    <Skeleton width="10vh" height='10vh' variant='circle' />
                    <div style={styles.row}>
                        <Skeleton height={"7vh"} width="10%" style={styles.skeletor} />                                   
                        <Skeleton height={"5vh"} width="18%" style={styles.skeletor} />                                   
                        <Skeleton height={"5vh"} width="18%" style={styles.skeletor} />                                   
                        <Skeleton height={"5vh"} width="18%" style={styles.skeletor} />                                   
                    </div>
                </div>
            </ListItem>
        );
        if(this.state.loading)
            return <WaitingProgressBar />
        else
            return(
                <div>
                <header>
                    <Header />
                </header>
                    <div>
                        <div style={{backgroundColor: primarylight, marginRight: '10vh', marginLeft: '10vh', marginTop: '5vh'}}>
                        <Paper  dir="rtl" style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={styles.title}>لیست بیمار های من :</p>
                            {!this.state.progressShow&&<List>
                                <div dir="rtl">{renderItemList}</div>
                            </List>}
                            {this.state.progressShow&&<List>
                                <div dir="rtl">{renderSkeletor}</div>
                            </List>}
                        </Paper>
                        </div>
                    </div>
                </div>
            );
    }
}

const styles = {
    title: {
        fontFamily: 'Vazir',
        margin: '3vh'
    },
    avatar: {
        width: '10vh',
        height: '10vh',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    nameText: {
        fontFamily: 'Vazir',
        marginRight: '3vh',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: '5vh',
        width: '100%',
    },
    skeletor: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto'
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyPatients));