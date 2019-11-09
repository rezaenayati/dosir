import React from 'react';
import { 
    Checkbox, TextField, Button, FormControlLabel, Avatar
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

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
            email: null,
            password: null,
            password2: null,
        }
        this.changeEmail = ev => this.setState({email: ev.target.value});
        this.changePassword = ev => this.setState({password: ev.target.value});
        this.changePassword2 = ev => this.setState({password2: ev.target.value});       
        this.submit = ev => {
            ev.preventDefault();
            if(this.state.password === this.state.password2){
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
                this.props.history.push('/dashboard');
            }
            else
            console.log("Password unmatch!");            
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
            </ThemeProvider>
            <FormControlLabel
                control={<Checkbox value="remember" color={primaryDark} />}
                label="مرا به خاطر داشته باش"
            />
            <Button
                onClick={this.submit} 
                fullWidth 
                style={styles.button}>
                ثبت نام
            </Button>
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