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


class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            showPassword: true,
        }
        this.changeEmail = ev => this.setState({email: ev.target.value});
        this.changePassword = ev => this.setState({password: ev.target.value});
        this.submit = ev => {
            
            ev.preventDefault();
            console.log(this.state.email);
            this.props.onSubmit(this.state.email , this.state.password);
            this.props.history.push('/dashboard');
        };
    }


    render(){
        return(
            <form dir="rtl" style={{fontFamily: "Vazir", marginTop: 100, marginLeft: 100, marginRight: 100}}>
            <div dir="rtl">
                <LockOutlinedIcon style={{color: 'red'}} />
                <h1 style={{fontFamily: "Vazir"}}>ورود</h1>
            </div>
            <ThemeProvider theme={theme}>
            <TextField
                placeholder='ایمیل'
                style={{fontFamily: "Vazir", marginTop: 10}}
                fullWidth
                variant="outlined"
                autoComplete='email'
                onChange={this.changeEmail}
            />
            <TextField
                placeholder='رمز عبور'
                style={{fontFamily: "Vazir", marginTop: 10}}
                fullWidth
                variant="outlined"
                autoComplete='password'
                onChange={this.changePassword}        
            />
            </ThemeProvider>
            <FormControlLabel
                style={{fontFamily: "Vazir"}}
                control={<Checkbox value="remember" color="primary" />}
                label="مرا به خاطر داشته باش"
            />
            <Button
                onClick={this.submit}  
                fullWidth 
                style={{
                    fontFamily: "Vazir",
                    color: 'white', 
                    marginTop: 10, 
                    backgroundColor: 'blue'}}
                >
                ورود
            </Button>
        </form>

        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
