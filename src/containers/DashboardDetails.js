import React from 'react';
import { Paper, Avatar, Card, CardActionArea, Button } from '@material-ui/core';
import {Bar} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import DashboardButton from '../components/DashboardButton';

const mapStateToProps = state => ({ 
    ...state, 
    isMobile: state.device.isMobile
});

const mapDispatchToProps = dispatch => ({
});


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
            <div style={this.props.style}>
                <div dir='rtl' style={this.props.isMobile ? Styles.mobileRowContainer : Styles.rowContainer}> 
                    {this.props.isMobile&&<DashboardButton 
                        style={this.props.isMobile ? Styles.button : {}}
                        imageUrl='http://uupload.ir/files/qhf1_undraw_profile_6l1l.png'
                        title='پروفایل من'
                        onClick={this.props.onClick}
                    />}
                    <DashboardButton
                        style={this.props.isMobile ? Styles.button : {}}
                        imageUrl='http://uupload.ir/files/9qsz_undraw_doctor_kw5l.png'
                        title='بیمار های من'
                        onClick={() => {this.props.history.push('/mypatients')}}
                    />
                    <DashboardButton
                        style={this.props.isMobile ? Styles.button : {}}
                        imageUrl='http://uupload.ir/files/o1yi_undraw_search_1px8.png'
                        title='جست و جوی بیمار جدید'
                        onClick={() => {this.props.history.push('/search')}}
                    />
                    <DashboardButton
                        style={this.props.isMobile ? Styles.button : {}}
                        imageUrl='http://uupload.ir/files/l8zw_undraw_files1_9ool.png'
                        title='افزودن گزارش معاینه'
                        onClick={() => {this.props.history.push('/createreport')}}
                        
                    />
                </div>
                {!this.props.isMobile&&<div style={Styles.chartContainer}>
                    <Bar style={Styles.chart}  data={data} />    
                </div>}
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardDetails));

const Styles = {
    button: {
        marginTop: 10,
        marginBottom: 25
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        marginRight: 20,
        marginBottom: 10,
        marginLeft: 20,
        justifyContent: 'space-between'
    },
    mobileRowContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30,
        marginRight: 20,
        marginBottom: 10,
        marginLeft: 20,
    },
    chartContainer: {
        marginRight: '20vh',
        marginLeft: '20vh',
        marginTop: '5vh'
    },
    chart: {

    }
}