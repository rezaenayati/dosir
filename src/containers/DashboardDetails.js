import React from 'react';
import { Paper, Avatar, Card, CardActionArea } from '@material-ui/core';

import DashboardButton from '../components/DashboardButton';

export default class DashboardDetails extends React.Component{
    render(){
        return(
            <div>
                {/* <p style={{fontFamily: 'Vazir', margin: 100}}>این بخش در حال تکمیل است سید جان</p> */}
                <div dir='rtl' style={Styles.rowContainer}> 
                    <DashboardButton
                        imageUrl='http://uupload.ir/files/9qsz_undraw_doctor_kw5l.png'
                        title='بیمار های من'
                    />
                    <DashboardButton
                        imageUrl='http://uupload.ir/files/o1yi_undraw_search_1px8.png'
                        title='جست و جوی بیمار جدید'
                    />
                    <DashboardButton
                        imageUrl='http://uupload.ir/files/l8zw_undraw_files1_9ool.png'
                        title='افزودن گزارش معاینه'
                    />
                </div>    
            </div>
        );
    }
}

const Styles = {
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        // marginRight: 15,
        borderRadios: 13,
        width: 330,
        height: 150
    },
    cardActionContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'Vazir',
        fontSize: 18,
        marginRight: 5
    },
    iconImage: {
        width: 145
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        marginRight: 20,
        marginBottom: 10,
        marginLeft: 20,
        justifyContent: 'space-between'
    }
}