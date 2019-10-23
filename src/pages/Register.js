import React from 'react';
import { 
    AppBar, Tab, Tabs, Container, Link, Checkbox, Grid , Paper, TextField, Avatar, Button, FormControlLabel    
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '../App.css';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signUp: true,
        }
    }
    render(){
        const reverseSignUp = !this.state.signUp;
        return( 
            <Grid container component="main" style={{height: '100vh'}}>
                <Grid item xs={false} sm={4} md={7} style={{backgroundSize: 'cover', backgroundImage: 'url(https://wallpaperplay.com/walls/full/9/5/e/13971.jpg)'}} />
                <Grid xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <form>
                    </form>
                    {this.state.signUp&&<SignUp />}
                    {!this.state.signUp&&<SignIn />}
                    <div dir="rtl" style={{marginTop: 10}}>
                        <Link
                            style={{fontFamily: "Vazir", color: 'blue', marginTop: 10 , marginRight: 100}}
                            onClick={() => {this.setState({signUp: reverseSignUp})}}>
                                {!reverseSignUp&&"ورود به حساب"}
                                {reverseSignUp&&"ایجاد حساب جدید"}
                        </Link>
                    </div>
                </Grid>
            </Grid>
        );
    }
}