import React from 'react';
import { 
    Link, Grid , Paper    
} from "@material-ui/core";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../App.css';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import ForgetPass from '../containers/ForgetPass';
import '../assets/colors/color.js';
import { primarylight, primaryDark } from '../assets/colors/color.js';

const mapStateToProps = state => ({ 
    ...state, 
    authenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
});


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signUp: true,
            forgetPass: false,
        }
    }

    componentDidMount(){
        if(this.props.authenticated)
            this.props.history.push('/dashboard');    
    }

    render(){
        const reverseSignUp = !this.state.signUp;
        return( 
            <Grid item={true} container component="main" style={{height: '100vh'}}>
                <Grid item={true}  xs={false} sm={4} md={7} style={styles.leftContainer} />
                <Grid item={true} style={styles.rightContainer} xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <form>
                    </form>
                    {this.state.forgetPass&&<ForgetPass />}
                    {!this.state.forgetPass&&!this.state.signUp&&<SignUp />}
                    {!this.state.forgetPass&&this.state.signUp&&<SignIn />}
                    <div dir="rtl" style={{marginTop: 10}}>
                        <Link
                            style={styles.link}
                            onClick={() => {this.setState({forgetPass: false, signUp: reverseSignUp})}}>
                                {reverseSignUp&&"ورود به حساب"}
                                {!reverseSignUp&&"ایجاد حساب جدید"}
                        </Link>
                       {!this.state.forgetPass&&<Link
                                style={styles.link}
                                onClick={() => {this.setState({forgetPass: true, signUp: false})}}>
                                رمز عبور عبور را فراموش کرده اید؟
                        </Link>}
                    </div>
                </Grid>
            </Grid>
        );
    }
}

const styles = {
    leftContainer: {
        backgroundSize: 'cover', 
        backgroundImage: 'url(http://uupload.ir/files/yvki_imageedit_2_9589091819.jpg)'
    },
    rightContainer: {
        backgroundColor: primarylight
    },
    link: {
        fontFamily: "Vazir", 
        color: primaryDark, 
        marginTop: 10 , 
        marginRight: 100
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Register));