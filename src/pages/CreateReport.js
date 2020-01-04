import React from 'react';
import {connect} from 'react-redux';
import { TextField, Paper, Fab, CircularProgress, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import DatePicker from "react-modern-calendar-datepicker";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from "react-modern-calendar-datepicker";


import Header from '../components/Header';
import { primaryColor , secondarylight, primarylight, secondaryDark } from '../assets/colors/color';
import ProgressBar from '../components/ProgressBar';
import UserInfoBox from '../containers/UserInfoBox';
import { fakePostReport } from '../logics/fakeApi';

const mapStateToProps = state => ({ 
    ...state, 
    isMobile: state.device.isMobile, 
    doctor: state.currentUser.doctor,
    patient: state.currentPatient.info
});

const mapDispatchToProps = dispatch => ({
    
});

class CreateReport extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: null,

            selectedDay: null,
            clinicalFindings: '',
            actions: '',
            finalDiag: '',
            nextDate: '',

            prescription: [],
            drugNumber: 0,

            success: false,
            loading: false,


        }

        this.changeclinicalFindings = ev => this.setState({clinicalFindings: ev.target.value});
        this.changeactions = ev => this.setState({actions: ev.target.value});
        this.changefinalDiag = ev => this.setState({finalDiag: ev.target.value});
        this.changenextDate = ev => this.setState({nextDate: ev.target.value});

        this.changeDrugName = number => ev => {
            const temp = {
                name: ev.target.value
            }
            Object.assign(this.state.prescription[number-1] , temp);
        };
        this.changeDrugDose = number => ev => {
            const temp = {
                dose: ev.target.value
            }
            Object.assign(this.state.prescription[number-1] , temp);
        }

        this.correctNum = (phone) => {
            let newPhone = phone.substring(3)
            phone = "0" + newPhone;
            return phone;
        }

        this.submit = async () => {
            console.log()
            
            const response =  await fakePostReport(
                this.correctNum(this.props.doctor.phone_num),
                this.props.doctor.first_name,
                this.props.doctor.last_name,
                this.props.doctor.title,
                this.props.patient.phone_num,
                "1398/10/15",
                this.state.selectedDay.year + "/" + this.state.selectedDay.month + "/" + this.state.selectedDay.day,
                this.state.clinicalFindings,
                this.state.prescription,
                this.state.actions,
                this.state.finalDiag
            )

            console.log(response);
            
        }

        this.addDrug = () => {
            this.setState({drugNumber: ++this.state.drugNumber})
            this.state.prescription.push({number: this.state.drugNumber, name: '', dose: ''});
        }
    }

    componentDidMount(){

    }
    

    


    render(){
        const renderDrugNameField = this.state.prescription.map((drug) =>
            <div style={styles.rowContainer}>
                <p style={styles.textStyle}>{drug.number + ". "}</p>
                <TextField onChange={this.changeDrugName(drug.number)} style={this.props.isMobile ? styles.mobileDrugName : styles.drugName} dir='rtl'  variant="outlined" />
            </div>
        );
        const renderDrugDose = this.state.prescription.map((drug) =>
            <TextField dir='rtl' onChange={this.changeDrugDose(drug.number)} style={this.props.isMobile ? styles.mobileDrugDose :styles.drugDose}  variant="outlined" />
        );
        return(
            <div>
                <header>
                    <Header />
                </header>
                <div>
                    <div style={{display: 'flex', flexDirection: 'column', backgroundColor: primarylight , marginBottom: 100}}>

                        <UserInfoBox />

                        <Paper dir='rtl' style={this.props.isMobile ? styles.mobilePaperContainer : styles.paperContainer}>
                                <p style={styles.textStyle}>یافته های بالینی(‬ ‫علائم‬ ‫سير‬ ‫‪،‬‬ ‫معاينه‬ ‫‪،‬‬ ‫حال‬ ‫شرح‬ ‫)‬:</p>
                                <TextField 
                                    onChange={this.changeclinicalFindings}
                                    multiline
                                    fullWidth
                                    rows='5' 
                                    variant="outlined" />
                        </Paper> 
                        <Paper dir='rtl' style={this.props.isMobile ? styles.mobilePaperContainer : styles.paperContainer}>
                                <p style={styles.textStyle}>نسخه دارویی:</p>
                                <div style={styles.rowContainer}>
                                    <p style={styles.textDrugStyle}>نام دارو</p>
                                    <p style={styles.textDoseStyle}>دوز مصرفی</p>
                                    <Fab color="primary" style={{backgroundColor: '#6BAFB1'}} onClick={this.addDrug}> <AddIcon /> </Fab>
                                </div>
                                <div style={styles.rowContainer}>
                                    <ul dir="rtl">{renderDrugNameField}</ul>
                                    <ul dir="rtl">{renderDrugDose}</ul>
                                </div>
                        </Paper> 
                        <Paper dir='rtl' style={this.props.isMobile ? styles.mobilePaperContainer : styles.paperContainer}>
                                <p style={styles.textStyle}>اقدامات درمانی (غیردارویی) : </p>
                                <TextField 
                                    multiline
                                    onChange={this.changeactions} 
                                    fullWidth 
                                    rows='3' 
                                    variant="outlined" />
                                <p style={styles.textStyle}>تشخیص نهایی :</p>
                                <TextField 
                                    multiline 
                                    fullWidth 
                                    rows='2' 
                                    onChange={this.changefinalDiag}
                                    variant="outlined" />
                                <p style={styles.textStyle}>تاریخ مراجعه بعدی :</p>
                                <div style={styles.datePicker}>
                                    <DatePicker
                                        value={this.state.selectedDay}
                                        onChange={(input) => this.setState({selectedDay: input})}
                                        inputPlaceholder="انتخاب تاریخ"
                                        colorPrimary={primaryColor}
                                        colorPrimaryLight={primarylight}
                                        shouldHighlightWeekends
                                        locale="fa" // add this
                                    />
                                </div>
                                <div style={styles.buttonContainer}>
                                    {!this.state.loading&&<Button style={styles.buttonSave} onClick={this.submit}>ثبت</Button>}
                                    {this.state.loading&&<ProgressBar message='در حال ذخیره ...' style={styles.progressBar} />}
                                </div>
                        </Paper> 

                    </div>
                </div>
            </div>

        );
    }

}

export default connect(mapStateToProps , mapDispatchToProps)(CreateReport);

const styles = {
    drugName: {
        width: window.innerWidth * 1/6,
    },
    drugDose: {
        // width: window.innerWidth * 1/9,
    },
    mobileDrugName: {
        width: window.innerWidth * 2/5,
    },
    mobileDrugDose: {
        width: window.innerWidth * 1/5,
    },
    mobilePaperContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        width: window.innerWidth,
    },
    paperContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        width: 600,
    },
    buttonSave: {
        height: 33,
        backgroundColor: secondaryDark,
        margin: 'auto',
        fontFamily: 'Vazir',
        fontSize: 13,
        color: primarylight,
        marginLeft: 'auto', 
        marginRight: 'auto', 
    },
    buttonContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    textStyle: {
        marginLeft: 5,
        marginRight: 5, 
        fontFamily:'Vazir',
    },
    textDrugStyle: {
        fontFamily:'Vazir',
    },
    textDoseStyle: {
        fontFamily:'Vazir',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    userIdentity: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        // backgroundColor: primaryColor
    },
    datePicker: {
        marginTop: 'auto', 
        marginBottom: 'auto', 
    }
}