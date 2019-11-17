import React from 'react';
import { 
    Checkbox, TextField, Button, FormControlLabel, Avatar
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProgressBar from '../components/ProgressBar';
import '../App.css';
import { secondarylight, primaryDark, primarylight } from '../assets/colors/color.js';
import { postNewDoctor } from '../logics/api';

const theme = createMuiTheme({
    direction: 'rtl',
});


const mapStateToProps = state => ({ ...state});

const mapDispatchToProps = dispatch => ({
    onSubmit: (email) => dispatch({type: 'REGISTER' , email}),
    storeDoctorInfo: (doctor) => dispatch({type: 'LOAD_DOCTOR_INFO' , doctor})
});


class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            passError: false,
            loading: false,
            error: false,
            emptyFiels: false,

            email: '',
            password: '',
            password2: '',
            name: '',
            family: '',
        }
        this.changeEmail = ev => this.setState({email: ev.target.value});
        this.changePassword = ev => this.setState({password: ev.target.value});
        this.changePassword2 = ev => this.setState({password2: ev.target.value});
        this.changeName = ev => this.setState({name: ev.target.value});
        this.changeFamily = ev => this.setState({family: ev.target.value});       
        
        this.submit = ev => {
            ev.preventDefault();
            this.setState({passError: false, loading: true, error: false , emptyFiels: false});
            if(this.state.email === '' || this.state.password === '' || this.state.password2 === '' || this.state.name === '' || this.state.family === '' ){
                this.setState({passError: false, loading: false, error: false, emptyFiels: true});
                return null;
            }
            setTimeout(() => {
                if(this.state.password === this.state.password2){
                        // const tokens = createDoctor(this.state.phone, this.state.password, this.state.name, this.state.family);
                        // console.log(tokens.access);
                        const doctor = {
                            email : this.state.email,
                            name: this.state.name,
                            family: this.state.family,
                            password: this.state.password,
                        }
                        console.log(doctor);
                        const dU = postNewDoctor(doctor)
                        if(doctor !== undefined){
                            this.props.onSubmit(this.state.email);
                            this.props.storeDoctorInfo(doctor);
                            this.props.history.push('/editprofile');    
                        }
                        else
                            this.setState({error: true})
                }
                else{
                    console.log("Password unmatch!");
                    this.setState({passError: true});
                }
                this.setState({loading: false});
        }, 2000);

        };
    }

    render(){
        return(
            <form dir="rtl" style={styles.container}>
            <div dir="rtl">
                <Avatar src="https://i.ibb.co/r799ZMz/logo-2sir-mehdi.png" />
                <h1 style={styles.title}>ثبت نام</h1>
            </div>
            <ThemeProvider theme={theme}>
            <div dir='rtl' style={styles.fieldContainer}>
                            <TextField 
                                placeholder='نام'
                                style={styles.textField}
                                variant="outlined"
                                onChange={this.changeName} 
                                />
                            <TextField 
                                placeholder='نام خانوادگی'
                                style={styles.textField}
                                variant="outlined" 
                                onChange={this.changeFamily}
                                />
            </div>                    
            <TextField
                placeholder='ایمیل'
                style={styles.textField}
                fullWidth
                variant="outlined"
                autoComplete='email'
                onChange={this.changeEmail}
            />
            <TextField
                type='password'
                placeholder='رمز عبور'
                style={styles.textField}
                fullWidth
                variant="outlined"
                autoComplete='password'
                onChange={this.changePassword}        
            />
            <TextField
                type='password'
                placeholder='تایید رمز عبور'
                style={styles.textField}
                fullWidth
                variant="outlined"
                onChange={this.changePassword2}
            />
            {this.state.passError&&<p style={styles.errorMessage} visibilty="false">*** رمز عبور مطابقت ندارد</p>}
            </ThemeProvider>
            {this.state.error&&<p style={styles.title}>خطا در برقراری ارتباط</p>}
            {this.state.emptyFiels&&<p style={styles.title}>فیلد های خالی را پر کنید</p>}
            {!this.state.loading&&<Button
                onClick={this.submit} 
                fullWidth 
                style={styles.button}>
                ثبت نام
            </Button>}
            {this.state.loading&&<ProgressBar message='شکیبا باشید ...' style={styles.progressBar} />}

        </form>

        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));


const styles = {
    container: {
        fontFamily: "Vazir", 
        marginTop: 100, 
        marginLeft: 100, 
        marginRight: 100
    },
    errorMessage: {
        color: 'red'
    },
    title: {
        fontFamily: "Vazir",
        color: primaryDark
    },
    textField: {
        fontFamily: "Vazir", 
        marginTop: 10,
        marginRight: 1,
        marginLeft: 1,
        color: primaryDark
    }, 
    progressBar: {
        marginTop: 5
    },
    label: {
        fontFamily: "Vazir",
        color: primaryDark
    },
    button: {
        fontFamily: "Vazir",
        color: primarylight, 
        marginTop: 10, 
        backgroundColor: primaryDark
    },
    fieldContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: primarylight
    },

}

