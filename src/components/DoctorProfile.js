import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Divider, Button } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';


export default class DoctorProfile extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
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
                </div>
                <Button fullWidth style={styles.buttonStyle} >ویرایش پروفایل</Button>
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
    },
    nameStyle: {
        fontFamily: 'Vazir', 
        textAlign:'center',
        fontSize:22
    },
    titleStyle: {
        fontFamily: 'Vazir', 
        textAlign:'center',
        fontSize:17
    },
    locationStyle: {
        textAlign:'center', 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonStyle: {
        fontFamily: 'Vazir', 
        color: '#056B2C', 
        marginBottom: 5
    }
}