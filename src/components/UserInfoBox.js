import React from 'react';
import { TextField, Paper, Fab, CircularProgress, Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

import { primaryColor , secondarylight, primarylight, secondaryDark } from '../assets/colors/color';


export default class UserInfoBox extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            success: false,
            loading: false,
        }

        this.handleButtonClick = () => {
            if (!this.state.loading) {
                this.setState({success: false, loading: true})
            }
            setTimeout(() => {this.setState({success: true, loading: false})} , 2000);
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
                                    <TextField variant="outlined"/>
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
                                    <p style={styles.textStyle}>نام :  {this.state.success&&"مهدی ترابی"} </p>
                                    <p style={styles.textStyle}>تاریخ تولد: {this.state.success&&"۱۳۷۸/۱۲/۱۹"}  </p>
                                </div>
                                <div style={styles.infoContainer}>
                                    <p style={styles.textStyle}>تاریخ ویزیت : ۱۳۹۸/۲/۲۳</p>
                                    <p style={styles.textStyle}>جنسیت:  {this.state.success&&"مرد"} </p>
                                </div>
                            </div>
                        </div>

                        {this.state.success&&<Button style={styles.profileButton}>مشاهده پروفایل بیمار</Button>}     
                        
                    </div>

                </Paper>
            </div>
        
        );
    }
}


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
}