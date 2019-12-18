import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Divider, Button, Paper, Modal } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

import '../assets/colors/color.js';
import { primaryDark, secondaryDark, primaryColor } from '../assets/colors/color.js';
import { StylesContext } from '@material-ui/styles/StylesProvider';


export default class ReportDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
                <Modal  
                    open={this.props.open} onClose={this.props.onClose} dir="rtl">
                    <Paper style={styles.container}>
                            <Button style={styles.text} onClick={this.props.onClose}><CloseIcon /></Button>
                            <p style={styles.text}>تاریخ ویزیت: ۱۳۹۸/۲/۱۲</p>
                            <p style={styles.text}>نام پزشک :‌ احمد جلالی</p>
                            <p style={styles.text}>تخصص پزشک : اعصاب و روان</p>
                            <Divider variant='middle' />
                            <p style={styles.text}> یافته های بالینی: نیافتیم نگرد</p>
                            <Divider variant='middle' />
                            <p style={styles.text}>نسخه تجویز شده: </p>
                            <p style={styles.text}>۱. آسپرین روزی سه بار</p>
                            <p style={styles.text}>۲. قرص ضد بارداری: پس از انجام</p>
                            <Divider variant='middle' />
                            <p style={styles.text}>اقدامات درمانی : هر چی کرمشون بود دیگه</p>
                            <Divider variant='middle' />
                            <p style={styles.text}>تشخیص نهایی: مرگ</p>
                            <Divider variant='middle' />
                            <p style={styles.text}>تاریخ بعدی ویزیت: ۱۳۹۸/۱۲/۱</p>
                    </Paper>
                </Modal>
        );
    }
}

const styles = {
    container: {
        width: 400,
        margin: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        outline: 'none'
    },
    text: {
        fontFamily: 'Vazir',
        margin: 10,
    },
    largeText: {
        fontFamily: 'Vazir',
        fontSize: 35
    },
}