import React from 'react';
import { 
    Checkbox, TextField, Button, FormControlLabel, Avatar    
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import '../App.css';
import ProgressBar from '../components/ProgressBar';
import { logInDoctor } from '../logics/api';
import '../assets/colors/color.js';
import { secondarylight, primaryDark, primarylight } from '../assets/colors/color.js';
import { timeout } from 'q';

const theme = createMuiTheme({
    direction: 'rtl', 
});

const mapStateToProps = state => ({ ...state});

const mapDispatchToProps = dispatch => ({
    onSubmit: (tokens) => {
        dispatch({type: 'SIGNIN' , tokens});
    }
});


class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            phone: '',
            password: '',

            loading: false,
            error: false,
            emptyFiels: false,
        }
        this.changePhone = ev => this.setState({phone: ev.target.value});
        this.changePassword = ev => this.setState({password: ev.target.value});
        this.submit = ev => {
            ev.preventDefault();
            this.setState({loading: true , error: false, emptyFiels: false} , async () => {
                try {
                    console.log(this.state.phone);
                    console.log(this.state.password);
                    if(this.state.phone === '' || this.state.password === ''){
                        this.setState({passError: false, loading: false, error: false, emptyFiels: true});
                        return null;
                    }        
                    setTimeout(() => {
                        const tokens = logInDoctor(this.state.phone, this.state.password);
                        if(tokens.access === undefined){
                            this.setState({error: true});
                            console.log("true");
                        }        
                        else{
                            this.props.onSubmit(tokens);
                            console.log("false");      
                        }
                        this.setState({loading: false});
                    }, 2000);
                          
                } catch (error) {
                    
                }
            });
        };
    }


    render(){
        return(
            <form dir="rtl" style={styles.container}>
            <div dir="rtl">
                <Avatar src="https://i.ibb.co/r799ZMz/logo-2sir-mehdi.png" />
                <h1 style={styles.title}>ورود</h1>
            </div>
            <ThemeProvider theme={theme}>
            <TextField
                placeholder='شماره موبایل'
                style={styles.textField}
                fullWidth
                variant="outlined"
                autoComplete='phone'
                onChange={this.changePhone}
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
            </ThemeProvider>
            {this.state.emptyFiels&&<p style={styles.title}>فیلد های خالی را پر کنید</p>}
            {this.state.error&&<p style={styles.title}>خطا در برقراری ارتباط</p>}
            {!this.state.loading&&<Button
                onClick={this.submit}  
                fullWidth 
                style={styles.button}
                >
                ورود
            </Button>}
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
        marginTop: 5
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