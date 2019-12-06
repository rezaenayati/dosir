import React from 'react';
import { Paper, Avatar, Card, CardActionArea } from '@material-ui/core';
import {Bar} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom'

import DashboardButton from '../components/DashboardButton';

const data = {
    labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
    datasets: [{
    label: "تعداد ویزیت ها در روز",
    backgroundColor: '#6bafb1',
    borderColor: '#025468',
    data: [4, 10, 5, 2, 7, 6, 0],
    }]
}


class DashboardDetails extends React.Component{
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
                        onClick={() => {this.props.history.push('/createreport')}}
                        
                    />
                </div>
                <div style={Styles.chartContainer}>
                    <Bar style={Styles.chart}  data={data} />    
                </div>
            </div>
        );
    }
}

export default withRouter(DashboardDetails);

const Styles = {
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        marginRight: 20,
        marginBottom: 10,
        marginLeft: 20,
        justifyContent: 'space-between'
    },
    chartContainer: {
        height: 750,
        width: 750,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 50
    },
    chart: {

    }
}