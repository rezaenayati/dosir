import React from 'react';
import { 
    Checkbox, TextField, Button, FormControlLabel    
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import '../App.css';

const theme = createMuiTheme({
    direction: 'rtl',
});



export default class SignUp extends React.Component{

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
                autoFocus                            
            />
            <TextField
                placeholder='رمز عبور'
                style={{marginTop: 10}}
                fullWidth
                variant="outlined"
                autoComplete='password'
                autoFocus
            />
            <TextField
                placeholder='تایید رمز عبور'
                style={{marginTop: 10}}
                fullWidth
                variant="outlined"
                autoFocus
            />
            </ThemeProvider>
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="مرا به خاطر داشته باش"
            />
            <Button fullWidth style={{fontFamily: "Vazir", color: 'white', marginTop: 10, backgroundColor: 'blue'}}>
                ثبت نام
            </Button>
        </form>

        );
    }

}