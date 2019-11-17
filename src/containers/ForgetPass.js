import React from 'react';
import { 
    Checkbox, TextField, Button, FormControlLabel, Avatar, Link    
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import '../App.css';
import ProgressBar from '../components/ProgressBar';
import {fetchDoctor} from '../logics/api';
import '../assets/colors/color.js';
import { secondarylight, primaryDark, primarylight } from '../assets/colors/color.js';
import { timeout } from 'q';

const theme = createMuiTheme({
    direction: 'rtl', 
});

const mapStateToProps = state => ({ ...state, email: state.auth.email});

const mapDispatchToProps = dispatch => ({
    onSubmit: (email) => {
        dispatch({type: 'REGISTER' , email});
    }
});


class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',

            loading: false,
            emptyFiedls: false,
            error: false
        }
        this.changeEmail = ev => this.setState({email: ev.target.value});

        this.submit = ev => {
            console.log(this.state.email);
            ev.preventDefault();
            this.setState({loading: true, error: false , emptyFiedls: false});            
            if(this.state.email === ''){
                console.log(":sdkljadsn");
                this.setState({loading: false, error: false, emptyFiedls: true});
                return null;
            }
                    setTimeout(() => {
                        this.setState({loading: false, error: true})
                    }, 2000);    
        };
    }


    render(){
        return(
            <form dir="rtl" style={styles.container}>
            <div dir="rtl">
                <Avatar src="https://i.ibb.co/r799ZMz/logo-2sir-mehdi.png" />
                <h1 style={styles.title}>فراموشی رمز</h1>
            </div>
            <ThemeProvider theme={theme}>
            <p style={styles.title}>ایمیل خود را وارد کنید:</p>
            <TextField
                placeholder='ایمیل'
                style={styles.textField}
                fullWidth
                variant="outlined"
                autoComplete='email'
                onChange={this.changeEmail}
            />
            </ThemeProvider>
            {!this.state.loading&&<Button
                onClick={this.submit}  
                fullWidth 
                style={styles.button}
                >
                ارسال کد تایید
            </Button>}
            {this.state.error&&<p style={styles.title}>خطا در برقراری ارتباط</p>}
            {this.state.emptyFiedls&&<p style={styles.title}>فیلد های خالی را پر کنید</p>}
            {this.state.loading&&<ProgressBar message='شکیبا باشید ...' style={styles.progressBar} />}

        </form>

        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));

const styles = {
    container: {
        fontFamily: "Vazir", 
        marginTop: 100, 
        marginLeft: 100, 
        marginRight: 100
    },
    progressBar: {
    },
    link: {
        fontFamily: "Vazir", 
        color: primaryDark, 
        marginTop: 10 , 
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