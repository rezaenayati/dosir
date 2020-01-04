import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Divider, Button, Paper, Modal } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import {connect} from 'react-redux';

import '../assets/colors/color.js';
import { primaryDark, secondaryDark, primaryColor } from '../assets/colors/color.js';
import { StylesContext } from '@material-ui/styles/StylesProvider';

const mapStateToProps = state => ({ 
    ...state, 
    value: state.currentPatient.report
});
const mapDispatchToProps = dispatch => ({
    
});


class ReportDetail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            prescription: []
        }
    }

    componentWillMount() {
        // const list = this.props.value.prescription;
        // for(var i = 0; i < list.length; i++){
        //     this.state.prescription.push(this.props.value.prescription[i])
        // }
    }

    render(){
        console.log(this.props.value.prescription);
        
        // const prescription = this.props.value.prescription
        // const renderDrugs = prescription.map((drug) =>
        //     <p>. {drug.name + "  " + drug.dose}</p>
        // );
        return(
                <Modal  
                    open={this.props.open} onClose={this.props.onClose} dir="rtl">
                    <Paper style={styles.container}>
                            <Button style={styles.text} onClick={this.props.onClose}><CloseIcon /></Button>
                            <p style={styles.text}>تاریخ ویزیت: {this.props.value.date}</p>
                            <p style={styles.text}>نام پزشک :‌ {this.props.value.doctor_first_name + " " + this.props.value.doctor_last_name}</p>
                            <p style={styles.text}>تخصص پزشک : {this.props.value.doctor_title}</p>
                            <Divider variant='middle' />
                            <p style={styles.text}> یافته های بالینی: {this.props.value.clinical_findings}</p>
                            <Divider variant='middle' />
                            <p style={styles.text}>نسخه تجویز شده: </p>
                                {/* <li>{renderDrugs}</li> */}
                            <Divider variant='middle' />
                            <p style={styles.text}>اقدامات درمانی : {this.props.value.actions}</p>
                            <Divider variant='middle' />
                            <p style={styles.text}>تشخیص نهایی: {this.props.value.final_diagnosis}</p>
                            <Divider variant='middle' />
                            <p style={styles.text}>تاریخ بعدی ویزیت: {this.props.value.next_date}</p>
                    </Paper>
                </Modal>
        );
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ReportDetail);


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