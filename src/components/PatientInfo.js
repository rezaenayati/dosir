import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Divider, Button } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import '../assets/colors/color.js';
import { primaryDark, secondaryDark, primaryColor, secondarylight, primarylight } from '../assets/colors/color.js';
import PatientProfile from '../pages/PatientProfile.js';
import color from '@material-ui/core/colors/purple';
  

class PatientInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            value: 0  
        }
        this.editProfile = () => {
            this.props.history.push('/editprofile');
        }
        this.handleChangeTab = (event , newValue) => {
            this.setState({value: newValue})
            console.log(this.state.value);
            
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

                                    <AppBar position="static">
                                        <Tabs 
                                            value={this.state.value} 
                                            onChange={this.handleChangeTab}
                                            style={styles.tabStyle} 
                                            aria-label="simple tabs example">

                                            <Tab style={styles.tabStyle} label="اطلاعات شخصی"  />
                                            <Tab style={styles.tabStyle} label="تاریخچه پزشکی "  />
                                            <Tab style={styles.tabStyle} label="تاریخچه فامیلی"  />

                                        </Tabs>
                                    </AppBar>



                                    {this.state.value===0&&
                                        <div>
                                            <p style={styles.text}> بیماری فعلی: {this.props.current_disease}</p>
                                            <Divider variant='middle' />
                                            <div>
                                            <p style={styles.text}> جنسیت: {this.props.gender}</p>
                                            <p style={styles.text}> وضعیت تاهل: {this.props.is_married&&"متاهل"}{!this.props.is_married&&"مجرد"} </p>
                                            </div>
                                            <Divider variant='middle' />
                                            <div>
                                            <p style={styles.text}> تاریخ تولد: {this.props.birthdate}</p>
                                            <p style={styles.text}> شماره همراه: {this.props.phone}</p>
                                            </div>
                                            <Divider variant='middle' />
                                            <p style={styles.text}> شغل: {this.props.job}</p>
                                            <p style={styles.text}> میزان سواد: {this.props.education}</p>
                                        </div>
                                    }





                                    {this.state.value===1&&
                                        <div>
                                            <p style={styles.text}> سابقه بیماری (کودکی یا بزرگ سالی): آنفولانزای خوکی</p>
                                            <p style={styles.text}> سابقه بستری در بیمارستان: ندارد</p>
                                            <p style={styles.text}> سابقه جراحی: ندارد</p>
                                            <p style={styles.text}> سابقه تصادف: {this.props.accident_experience&&"دارد"}{!this.props.accident_experience&&"ندارد"}</p>
                                            <Divider variant='middle' />
                                            <div>
                                            <div style={styles.rowContainer}>
                                                <p style={styles.text}> آلرژی ها: {this.props.allergies} </p>
                                                <p style={styles.text}> انتقال خون: {this.props.blood_transition&&"داشته"}{!this.props.blood_transition&&"نداشته"}</p>
                                            </div>
                                            </div>
                                            <Divider variant='middle' />
                                            <div>
                                            <div style={styles.rowContainer}>
                                                <p style={styles.text}> مصرف دخانیات: {this.props.drug_consumption&&"داشته"}{!this.props.drug_consumption&&"نداشته"}</p>
                                                <p style={styles.text}> مصرف الکل: {this.props.alcohol_consumption&&"داشته"}{!this.props.alcohol_consumption&&"نداشته"}</p>
                                            </div>
                                            </div>
                                            <Divider variant='middle' />
                                            <p style={styles.text}> آزمون های غربالگری:</p>
                                            <div style={styles.rowContainer}>
                                                <p style={styles.text}> PPD: {this.props.PPD&&"انجام داده"}{!this.props.PPD&&"انجام نداده"}</p>
                                                <p style={styles.text}> پاپ اسمیر: {this.props.pop_smear&&"انجام داده"}{!this.props.pop_smear&&"انجام نداده"}</p>
                                            </div>
                                            <div style={styles.rowContainer}>
                                                <p style={styles.text}> خون در مدفوع: {this.props.BIS&&"انجام داده"}{!this.props.BIS&&"انجام نداده"}</p>
                                                <p style={styles.text}> سایر: {this.props.other_tests&&"انجام داده"}{!this.props.other_tests&&"انجام نداده"}</p>
                                            </div>
                                        </div>
                                    }                    


                                    
                                                    
                                    {this.state.value===2&&
                                         <div>
                                         <p style={styles.text}> سابقه بیماری خاص در آشنایان: {this.props.particular_disease} </p>
                                         <Divider variant='middle' />
                                         <p style={styles.text}> علت مرگ بستگان درجه یک: {this.props.cause_of_siblings_death} </p>    
                                     </div>
                                    }


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
        textAlign: 'center',
    },
    tabStyle: {
        fontFamily: 'Vazir',
        textAlign: 'center',
        backgroundColor: primarylight,
        color: primaryDark
    },
    largeText: {
        fontFamily: 'Vazir',
        fontSize: 30
    },
    rowContainer: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}