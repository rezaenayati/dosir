import React from 'react';
import { TextField, Paper, Fab, CircularProgress, Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import DescriptionIcon from '@material-ui/icons/Description';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { primarylight , primaryDark, primaryColor, secondarylight, secondaryDark } from '../assets/colors/color';


export default class TimelineElement extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }

    }
    render(){
        return(
            <VerticalTimelineElement
                contentStyle={styles.contentStyle}
                contentArrowStyle={styles.contentArrowStyle}
                date={this.props.date}
                iconStyle={styles.iconStyle}
                icon={<DescriptionIcon />}
                >
                    <div dir='rtl' style={styles.container}>
                        <div dir="rtl">
                            <h3  style={styles.text} className="vertical-timeline-element-title">نام دکتر: {this.props.doctorName}</h3>
                            <h4  style={styles.text} className="vertical-timeline-element-subtitle">تخصص: {this.props.doctorTitle}</h4>
                            <p  style={styles.text}>
                                تشخیص نهایی: {this.props.diagnosis}
                            </p>
                        </div>
                        <Button style={styles.buttonStyle}>مشاهده جزئیات</Button>
                    </div>
            </VerticalTimelineElement>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentStyle: {
        fontFamily: 'Vazir', 
        background: primarylight, 
        color: primaryDark 
    },
    contentArrowStyle: { 
        borderRight: `7px solid ${primarylight}`   
    },
    iconStyle: { 
        background: primarylight, 
        color: primaryDark 
    },
    buttonStyle: {
        fontFamily: 'Vazir', 
        marginRight: 15,
        color: primaryDark
    },
    text: {
        fontFamily: 'Vazir'
    },
    largeText: {
        fontFamily: 'Vazir',
        fontSize: 35
    }
}
