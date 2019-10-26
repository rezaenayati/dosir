import React from 'react';
import { 
    Link, Grid , Paper    
} from "@material-ui/core";

import '../App.css';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';

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
            <Grid item={true} container component="main" style={{height: '100vh'}}>
                <Grid item={true}  xs={false} sm={4} md={7} style={{backgroundSize: 'cover', backgroundImage: 'url(https://wallpaperplay.com/walls/full/9/5/e/13971.jpg)'}} />
                <Grid item={true} xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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