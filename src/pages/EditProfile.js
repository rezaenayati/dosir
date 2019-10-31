import React from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({ 
    ...state, 
    email: state.auth.email,
    authenticated: state.auth.authenticated,
    doctor: state.currentUser.doctor
});

const mapDispatchToProps = dispatch => ({
});

class EditProfile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            doctor: {

            }
        }
    }

    componentDidMount(){
        this.setState({doctor: this.props.doctor});
        if(!this.props.authenticated) 
            this.props.history.push('/');    

    }

    render(){
        return(
            <div style={{}}>
                <p dir='rtl' style={styles.editProfileName}>ویرایش پروفایل</p>
                <Avatar align='center'
                        src={this.state.doctor.image} 
                        style={styles.avatar}  
                                />
            </div>
        );
    }
}

const styles = {
    avatar: {
        marginTop: 20, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        width: 100, 
        height:100
    },
    editProfileName:{
        fontFamily: 'Vazir',
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(EditProfile));