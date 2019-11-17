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
            password: '',

            passNotMatch: false,
            showPassword: true,
            loading: false,
            emptyFiels: false,
            doctor: {

            }
        }
        this.changeEmail = ev => this.setState({email: ev.target.value});
        this.changePassword = ev => this.setState({password: ev.target.value});

        this.submit = ev => {
            console.log(this.state.email);
            console.log(this.state.password);
            
            
            ev.preventDefault();
            this.setState({loading: true, error: false , emptyFiels: false, passNotMatch: false});
            console.log(this.state.password);
            
            if(this.state.email === '' || this.state.password === ''){
                console.log("ajkgfjahydkas,");
                this.setState({loading: false, error: false, emptyFiels: true, passNotMatch: false});
                return null;
            }
            this.setState({loading: true} , async () => {
                try {
                    const dU = await fetchDoctor(this.state.email);
                    console.log(dU);
                    if(dU === undefined){
                        this.setState({passNotMatch: true, loading: false})
                        return null;
                    }
                    console.log(dU);
                    setTimeout(() => {
                        console.log(dU);
                        this.setState({doctor: dU , loading: false});
                        if(this.state.password === this.state.doctor.password){
                            this.props.onSubmit(this.state.email);
                            this.props.history.push('/dashboard');
                        }
                        else
                            this.setState({passNotMatch: true, loading: false});    
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
            </ThemeProvider>
            {!this.state.loading&&<Button
                onClick={this.submit}  
                fullWidth 
                style={styles.button}
                >
                ورود
            </Button>}
            {this.state.passNotMatch&&<p style={styles.title}>رمز عبور یا ایمیل اشتباه است</p>}
            {this.state.error&&<p style={styles.title}>خطا در برقراری ارتباط</p>}
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