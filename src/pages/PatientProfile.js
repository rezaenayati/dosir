import React from 'react';
import { 
    Link, Grid , Paper, Avatar, Divider, Button    
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

const mapStateToProps = state => ({ 
    ...state, 
});

const mapDispatchToProps = dispatch => ({
});


class PatientProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
    }

    render(){
        const reverseSignUp = !this.state.signUp;
        return( 
            <div>
                <header>
                    <Header />
                </header>
                    <Grid item={true} container component="main" style={{height: '100vh'}}>
                        <Grid item={true}  xs={false} sm={4} md={9} style={styles.leftContainer} >
                        <VerticalTimeline>
                            <TimelineElement diagnosis='سرماخوردگی' doctorName='احمد جلالی' doctorTitle='اعصاب و  روان' date='۱۳۹۸/۲/۲۱' />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />
                            <TimelineElement />

                        </VerticalTimeline>

                        </Grid>
                        <Grid item={true} style={styles.rightContainer} component={Paper} xs={12} sm={8} md={3} elevation={1} square>
                            <div style={{display: 'flex' , flexDirection: 'column'}} >
                                <div dir='rtl' style={{marginTop: 15, display: 'flex', flexDirection: 'row'}}>
                                            <Avatar style={{   
                                                        marginTop: 'auto', 
                                                        marginLeft: 'auto', 
                                                        marginRight: 'auto', 
                                                        width: 134, 
                                                        height: 134}}
                                                        src='https://playerswiki.com/uploads/thumb/mehdi-torabi-300-300.jpeg'
                                                        /> 
                                            <div style={{ 
                                                        marginTop: 'auto', 
                                                        marginBottom: 'auto',
                                                        marginLeft: 'auto', 
                                                        marginRight: 'auto',}}>
                                                <p style={styles.largeText}> مهدی ترابی</p>
                                            </div>        
                                </div> 
                                    <div dir='rtl' style={{ 
                                                marginTop: 10,
                                                marginLeft: 'auto', 
                                                        marginRight: 'auto',}}>
                                        <Divider variant='middle' />                                                            
                                        <p style={styles.text}> جنسیت: مرد</p>
                                        <p style={styles.text}> وضعیت تاهل: این رل ویت ع خ</p>
                                        <Divider variant='middle' />
                                        <p style={styles.text}> تاریخ تولد: ۱۳۷۴/۱۲/۲</p>
                                        <p style={styles.text}> محل تولد: ملارد</p>
                                        <Divider variant='middle' />
                                        <p style={styles.text}> قد: ۱۸۵</p>
                                        <p style={styles.text}> وزن: ۸۵</p>
                                        <Divider variant='middle' />
                                        <p style={styles.text}> شماره همراه: 09122222222</p>
                                        <p style={styles.text}> ایمیل: mehditorabi@gmail.com</p>
                                    </div>                                                        
                            </div>
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

const styles = {
    leftContainer: {
      backgroundColor: secondarylight  
    },
    rightContainer: {
        backgroundColor: primarylight
    },
    text: {
        fontFamily: 'Vazir'
    },
    largeText: {
        fontFamily: 'Vazir',
        fontSize: 35
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(PatientProfile));