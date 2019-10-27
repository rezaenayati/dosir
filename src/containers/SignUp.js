import React from 'react';
import { 
    Checkbox, TextField, Button, FormControlLabel    
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import '../App.css';

const theme = createMuiTheme({
    direction: 'rtl',
});


const mapStateToProps = state => ({ ...state, email: state.auth.email});

const mapDispatchToProps = dispatch => ({
    onSubmit: (email) => {
        //reguest from server and save it in payload
        // const payload = {email: email};
        dispatch({type: 'REGISTER' , email});
    }
});


class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            password2: null
        }
        this.changeEmail = ev => this.setState({email: ev.target.value});
        this.changePassword = ev => this.setState({password: ev.target.value});
        this.changePassword2 = ev => this.setState({password2: ev.target.value});       
        this.submit = ev => {
            
            ev.preventDefault();
            if(this.state.password === this.state.password2){
                console.log(this.state.email);
                this.props.onSubmit(this.state.email , this.state.password);
                this.props.history.push('/dashboard');
            }
            else
            console.log("Password unmatch!");            
        };
    }

    render(){
        return(
            <form dir="rtl" style={{fontFamily: "Vazir", marginTop: 100, marginLeft: 100, marginRight: 100}}>
            <div dir="rtl">
                <LockOutlinedIcon style={{color: 'red'}} />
                <h1 style={{fontFamily: "Vazir"}}>ثبت نام</h1>
            </div>
            <ThemeProvider theme={theme}>
            <TextField
                placeholder='ایمیل'
                style={{marginTop: 10}}
                fullWidth
                variant="outlined"
                autoComplete='email'
                onChange={this.changeEmail}
            />
            <TextField
                placeholder='رمز عبور'
                style={{marginTop: 10}}
                fullWidth
                variant="outlined"
                autoComplete='password'
                onChange={this.changePassword}
            />
            <TextField
                placeholder='تایید رمز عبور'
                style={{marginTop: 10}}
                fullWidth
                variant="outlined"
                onChange={this.changePassword2}
            />
            </ThemeProvider>
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="مرا به خاطر داشته باش"
            />
            <Button
                onClick={this.submit} 
                fullWidth 
                style={{
                    fontFamily: "Vazir",
                    color: 'white', marginTop: 10, 
                    backgroundColor: 'blue'}}>
                ثبت نام
            </Button>
        </form>

        );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
