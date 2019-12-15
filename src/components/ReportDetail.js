import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Divider, Button, Paper } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { withRouter } from 'react-router-dom';

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
                <div dir="rtl">
                    <Paper style={{margin: 20}}>
                            <Button style={styles.text} dir='ltr' onClick={this.props.onBack}>بازگشت</Button>
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
                </div>
        );
    }
}

const styles = {
    text: {
        fontFamily: 'Vazir',
        margin: 10,
    },
    largeText: {
        fontFamily: 'Vazir',
        fontSize: 35
    },
}