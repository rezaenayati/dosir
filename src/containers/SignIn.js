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



export default class SignIn extends React.Component{

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
                autoFocus                            
            />
            <TextField
                placeholder='رمز عبور'
                style={{fontFamily: "Vazir", marginTop: 10}}
                fullWidth
                variant="outlined"
                autoComplete='password'
                autoFocus
            />
            </ThemeProvider>
            <FormControlLabel
                style={{fontFamily: "Vazir"}}
                control={<Checkbox value="remember" color="primary" />}
                label="مرا به خاطر داشته باش"
            />
            <Button fullWidth style={{fontFamily: "Vazir", color: 'white', marginTop: 10, backgroundColor: 'blue'}}>
                ورود
            </Button>
        </form>

        );
    }
}

