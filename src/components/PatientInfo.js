import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Divider, Button } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { withRouter } from 'react-router-dom';

import '../assets/colors/color.js';
import { primaryDark, secondaryDark, primaryColor, secondarylight, primarylight } from '../assets/colors/color.js';
import PatientProfile from '../pages/PatientProfile.js';


class PatientInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
        this.editProfile = () => {
            this.props.history.push('/editprofile');
        }
    }

    render(){
        return(
                <div style={styles.container} >
                    <div dir='rtl' style={styles.topContainer}>
                                <Avatar style={styles.avatarStyles}
                                            src='https://playerswiki.com/uploads/thumb/mehdi-torabi-300-300.jpeg'
                                            /> 
                                <div style={styles.nameContainer}>
                                    <h4 style={styles.largeText}> {this.props.name +"    "+ this.props.family}</h4>
                                </div>        
                    </div> 
                        <div dir='rtl' style={styles.infoContainer}>
                            <Divider variant='middle' />
                            <div>
                            <p style={styles.text}> جنسیت: {this.props.gender}</p>
                            <p style={styles.text}> وضعیت تاهل: {this.props.marriageStatus} </p>
                            </div>
                            <Divider variant='middle' />
                            <div>
                            <p style={styles.text}> تاریخ تولد: {this.props.birthdate}</p>
                            <p style={styles.text}> محل تولد: {this.props.birthTown}</p>
                            </div>
                            <Divider variant='middle' />
                            <p style={styles.text}> قد: {this.props.height}</p>
                            <p style={styles.text}> وزن: {this.props.weight}</p>
                            <Divider variant='middle' />
                            <p style={styles.text}> شماره همراه: {this.props.phone}</p>
                            <p style={styles.text}> ایمیل: {this.props.email}</p>
                        </div>                                                        
                </div>
        );
    }
}

export default withRouter(PatientInfo);

const styles = {
    container: {
        display: 'flex' , 
        flexDirection: 'column'
    },
    topContainer: {
        marginTop: 15, 
        display: 'flex', 
        flexDirection: 'row'
    },
    avatarStyles: {   
        marginTop: 'auto', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        width: 134, 
        height: 134
    },
    nameContainer: { 
        marginTop: 'auto', 
        marginBottom: 'auto',
        marginLeft: 'auto', 
        marginRight: 'auto',
    },
    infoContainer: { 
        marginTop: 10,
    },
    leftContainer: {
      backgroundColor: secondarylight  
    },
    rightContainer: {
        backgroundColor: primarylight
    },
    text: {
        fontFamily: 'Vazir',
        textAlign: 'center'
    },
    largeText: {
        fontFamily: 'Vazir',
        fontSize: 30
    }
}