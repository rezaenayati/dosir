import React from 'react';
import {connect} from 'react-redux';
import { TextField, Paper, Fab, CircularProgress, Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

import Header from '../components/Header';
import { primaryColor , secondarylight, primarylight, secondaryDark } from '../assets/colors/color';
import ProgressBar from '../components/ProgressBar';
import UserInfoBox from '../components/UserInfoBox';

const mapStateToProps = state => ({ ...state});

const mapDispatchToProps = dispatch => ({
    
});

class CreateReport extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: null,
            success: false,
            loading: false,
            prescription: [],
        }

        this.handleButtonClick = () => {
            if (!this.state.loading) {
                this.setState({success: false, loading: true})
            }
            setTimeout(() => {this.setState({success: true, loading: false})} , 2000);
        }

        this.addDrug = () => {
            this.state.prescription.push(0);
            this.setState({loading: true})
            this.setState({loading: false})
        }
    }

    componentDidMount(){

    }
    

    


    render(){
        const renderDrugNameField = this.state.prescription.map((number) =>
            <TextField style={styles.drugName} dir='rtl' fullWidth variant="outlined" />
        );
        const renderDrugDose = this.state.prescription.map((number) =>
            <TextField dir='rtl' style={styles.drugDose} fullWidth variant="outlined" />
        );
        return(
            <div>
                <header>
                    <Header />
                </header>
                <div>
                    <div style={{display: 'flex', flexDirection: 'column', backgroundColor: primarylight , marginBottom: 100}}>

                        <UserInfoBox />

                        <Paper dir='rtl' style={styles.paperContainer}>
                                <p style={styles.textStyle}>یافته های بالینی(‬ ‫علائم‬ ‫سير‬ ‫‪،‬‬ ‫معاينه‬ ‫‪،‬‬ ‫حال‬ ‫شرح‬ ‫)‬:</p>
                                <TextField multiline fullWidth rows='5' variant="outlined" />
                        </Paper> 
                        <Paper dir='rtl' style={styles.paperContainer}>
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
                        <Paper dir='rtl' style={styles.paperContainer}>
                                <p style={styles.textStyle}>اقدامات درمانی (غیردارویی) : </p>
                                <TextField multiline fullWidth rows='3' variant="outlined" />
                                <p style={styles.textStyle}>تشخیص نهایی :</p>
                                <TextField multiline fullWidth rows='2' variant="outlined" />
                                <p style={styles.textStyle}>تاریخ مراجعه بعدی :</p>
                                <TextField fullWidth  variant="outlined" />
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
        width: 250,
    },
    drugDose: {
        width: 150,
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
        width: 450,
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
        marginLeft: 5,
        marginRight: 40, 
        fontFamily:'Vazir',
    },
    textDoseStyle: {
        marginLeft: 100,
        marginRight: 240, 
        fontFamily:'Vazir',
    },
    profileButton: {
        marginLeft: 10,
        marginRight: 10, 
        fontFamily:'Vazir',
        backgroundColor: primarylight,
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    userIdentity: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        // backgroundColor: primaryColor
    },
    checkNumberContainer: {
        marginTop: 'auto', 
        marginBottom: 'auto', 
        height: 100 ,
        width: 500
    },
    userInfoContainer: {
        marginTop: 10, 
        height: 300 ,
        width: 600
    },
}