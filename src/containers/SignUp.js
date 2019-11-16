import React from 'react';
import { 
    Checkbox, TextField, Button, FormControlLabel, Avatar
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import validator from 'validator';

import ProgressBar from '../components/ProgressBar';
import '../App.css';
import { secondarylight, primaryDark, primarylight } from '../assets/colors/color.js';
import { postNewDoctor } from '../logics/api';

const theme = createMuiTheme({
    direction: 'rtl',
});


const mapStateToProps = state => ({ ...state, email: state.auth.email});

const mapDispatchToProps = dispatch => ({
    onSubmit: (email) => {
        dispatch({type: 'REGISTER' , email});
    },
    storeDoctorInfo: (doctor) => {
        dispatch({type: 'LOADDOCTORINFO' , doctor});
    }
});


class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            passError: false,
            emailError: false,
            email: null,
            password: null,
            password2: null,
            loading: false,
        }
        this.changeEmail = ev => this.setState({email: ev.target.value});
        this.changePassword = ev => this.setState({password: ev.target.value});
        this.changePassword2 = ev => this.setState({password2: ev.target.value});       
        this.submit = ev => {
            ev.preventDefault();
            this.setState({emailError: false, passError: false, loading: true});
            setTimeout(() => {    

            if(this.state.email == null){
                this.setState({emailError: true});
                return null;   
            }

            if(this.state.password === this.state.password2){
                if(validator.isEmail(this.state.email)){
                    console.log(this.state.email);
                    this.props.onSubmit(this.state.email , this.state.password);
                    const tempDoctor = {
                        "name": "",
                        "family": "",
                        "title": "",
                        "password": this.state.password,
                        "city": "",
                        "email": this.state.email,
                        "phone": "",
                        "image": "",
                        "address": "",
                        "about": "",
                        "province": ""
                    };
                    // add tempDoctor to the json-server
                    postNewDoctor(tempDoctor);
                    this.props.storeDoctorInfo(tempDoctor);
                    this.props.history.push('/editprofile');
                }
                else {
                    console.log("Incorecct email");
                    this.setState({emailError: true});
                }
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
            <TextField
                placeholder='ایمیل'
                style={styles.textField}
                fullWidth
                variant="outlined"
                autoComplete='email'
                onChange={this.changeEmail}
            />
            {this.state.emailError&&<p style={styles.errorMessage} visibilty="false">*** ایمیل نامعتبر</p>}
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
            <FormControlLabel
                control={<Checkbox value="remember" color={primaryDark} />}
                label="مرا به خاطر داشته باش"
            />
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
        color: primaryDark
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
    }
}