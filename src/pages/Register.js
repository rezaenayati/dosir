import React from 'react';
import { 
    Container, Link, Checkbox, Grid , Paper, TextField, Avatar, Button, FormControlLabel    
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import '../App.css';

export default class Register extends React.Component{
    render(){
        return( 
            <Grid container component="main" style={{height: '100vh'}}>
                <Grid item xs={false} sm={4} md={7} style={{backgroundSize: 'cover', backgroundImage: 'url(https://wallpaperplay.com/walls/full/9/5/e/13971.jpg)'}} />
                <Grid xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <form style={{margin: 100}}>
                        <div>
                            <LockOutlinedIcon style={{color: 'red'}} />
                            <h1>ثبت نام</h1>
                        </div>
                        <TextField
                            label='شماره موبایل'
                            style={{marginTop: 10}}
                            fullWidth
                            variant="outlined"
                            autoComplete='PhoneNumber'
                            autoFocus
                        />
                        <TextField
                            label='ایمیل'
                            style={{marginTop: 10}}
                            fullWidth
                            variant="outlined"
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField
                            label='رمز عبور'
                            style={{marginTop: 10}}
                            fullWidth
                            variant="outlined"
                            autoFocus
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="مرا به خاطر داشته باش"
                        />
                        <Button fullWidth style={{color: 'white', marginTop: 10, backgroundColor: 'blue'}}>
                            ثبت نام
                        </Button>
                        <Link style={{marginTop: 10}} href="#" variant="body2">
                        ورود به حساب
                        </Link>
                    </form>
                </Grid>
            </Grid>
        );
    }
}