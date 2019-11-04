import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Divider, Button } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { withRouter } from 'react-router-dom';

import '../assets/colors/color.js';
import { primaryDark, secondaryDark, primaryColor } from '../assets/colors/color.js';


class DoctorProfile extends React.Component {

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
            <div style={{marginTop: 10}}>
                <Avatar align='center'
                        src={this.props.avatarUrl} 
                        style={styles.avatar}  
                                />
                <h1 dir='rtl' style={styles.nameStyle}>{this.props.name}</h1>
                <p dir='rtl' style={styles.titleStyle}>{this.props.title}</p>
                <div style={styles.locationStyle}>
                    <RoomIcon fontSize='small' style={{}} />
                    <p dir='rtl' style={styles.textStyle}>{this.props.city}</p>
                </div>
                <Button fullWidth onClick={this.editProfile} style={styles.buttonStyle} >ویرایش پروفایل</Button>
                <Divider variant='middle' />
                <div style={{height:  150}}>
                    <p dir='rtl' style={styles.textStyle}>درباره ی:</p>
                    <p dir='rtl' style={styles.textStyle}>{this.props.about}</p>
                </div>
                <Divider variant='middle' />
                <p dir='rtl' style={styles.textStyle}>ایمیل: {this.props.email}</p>
                <p dir='rtl' style={styles.textStyle}>شماره موبایل: {this.props.phone}</p>
                <p dir='rtl' style={styles.textStyle}>  آدرس:  {this.props.address}</p>
            </div>
        );
    }
}

const styles = {
    avatar: {
        marginTop: 20, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        width: 100, 
        height:100
    },
    textStyle: {
        textAlign:'right',
        fontSize:12,
        marginRight: 20,
        fontFamily: 'Vazir',
        color: primaryDark
    },
    nameStyle: {
        fontFamily: 'Vazir', 
        textAlign:'center',
        fontSize:22,
        color: primaryDark
    },
    titleStyle: {
        fontFamily: 'Vazir', 
        textAlign:'center',
        fontSize:17,
        color: primaryDark
    },
    locationStyle: {
        textAlign:'center', 
        display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        color: primaryDark
    },
    buttonStyle: {
        fontFamily: 'Vazir', 
        color: primaryColor, 
        marginBottom: 5
    }
}
export default withRouter(DoctorProfile);