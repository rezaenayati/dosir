import React from 'react';
import { 
    TextField, Button, Avatar    
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

import '../App.css';
import ProgressBar from '../components/ProgressBar';
import { logInDoctor } from '../logics/api';
import '../assets/colors/color.js';
import { primaryDark, primarylight } from '../assets/colors/color.js';

const theme = createMuiTheme({
    direction: 'rtl', 
});

const mapStateToProps = state => ({ ...state, tokens: state.auth.tokens});

const mapDispatchToProps = dispatch => ({
    onSubmit: (tokens) => {
        dispatch({type: 'REGISTER' , tokens});
    }
});


class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            phone: '',
            password: '',
            validPhone: '',

            tokens: {},

            fieldsNotMatch: false,
            serverError: false,
            showPassword: true,
            loading: false,
            emptyFiels: false,
        }
        this.changePhone = ev => this.setState({phone: ev.target.value});
        this.changePassword = ev => this.setState({password: ev.target.value});

        this.completePhone = () => {
            let phone = this.state.phone
            let newPhone = phone.substring(1);
            phone = "+98" + newPhone;
            this.setState({validPhone: phone})
        };

        this.submit = ev => {
            ev.preventDefault();
            this.setState({loading: true, serverError: false, error: false , emptyFiels: false, fieldsNotMatch: false});            
            if(this.state.phone === '' || this.state.password === ''){
                this.setState({loading: false, error: false, emptyFiels: true, fieldsNotMatch: false});
                return null;
            }
            this.completePhone();
            this.setState({loading: true} , async () => {
                try {
                    setTimeout(async () => {
                        await logInDoctor(this.state.validPhone , this.state.password)
                        .then(res => {
                            console.log(res);
                            this.props.onSubmit(res);
                            if(res === undefined){
                                this.setState({serverError: true, loading: false})
                                return null;
                            }    
                            this.props.history.push('/dashboard');
                            this.setState({loading: false, error: false, emptyFiels: false});
                        })
                        .catch(err => {
                            console.log(err)
                            this.setState({fieldsNotMatch: true, loading: false})
                        });
                    }, 2000);
                } catch (error) {}
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
                placeholder='شماره همراه'
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
            {!this.state.loading&&<Button
                onClick={this.submit}  
                fullWidth 
                style={styles.button}
                >
                ورود
            </Button>}
            {this.state.fieldsNotMatch&&<p style={styles.title}>رمز عبور یا ایمیل اشتباه است</p>}
            {this.state.serverError&&<p style={styles.title}>خطا در برقراری ارتباط</p>}
            {this.state.emptyFiels&&<p style={styles.title}>فیلد های خالی را پر کنید</p>}
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