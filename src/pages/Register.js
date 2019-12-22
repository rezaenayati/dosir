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
import Responsive from 'react-responsive-decorator';

const mapStateToProps = state => ({ 
    ...state, 
    authenticated: state.auth.authenticated,
    isMobile: state.device.isMobile
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
                {!this.props.isMobile&&<Grid item={true}  xs={false} sm={4} md={7} style={styles.leftContainer} />}
                <Grid item={true} style={styles.rightContainer} xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <form>
                    </form>
                    {this.state.forgetPass&&<ForgetPass />}
                    {!this.state.forgetPass&&!this.state.signUp&&<SignUp />}
                    {!this.state.forgetPass&&this.state.signUp&&<SignIn />}
                    <div dir="rtl" style={{marginTop: 10}}>
                        <div style={this.props.isMobile ? styles.MobilelinkContainer : styles.linkContainer}>     
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
    linkContainer: {
        display: 'flex',
    },
    MobilelinkContainer: {
        display: 'flex',
        flexDirection: 'Column'
    },
    link: {
        fontFamily: "Vazir", 
        // fontSize: (isMobile ? 16 : 10),
        color: primaryDark, 
        marginTop: 10 , 
        marginRight: 100
    }
}

export default Responsive(withRouter(connect(mapStateToProps , mapDispatchToProps)(Register)));
