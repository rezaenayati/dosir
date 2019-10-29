import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ 
    ...state, 
    email: state.auth.email,
    authenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
// addDoctor: ({}) => {}
});

class EditProfile extends React.Component{
    render(){
        return(
            <div style={{}}>
                <p dir='rtl' style={styles.editProfileName}>ویرایش پروفایل</p>
            </div>
        );
    }
}

const styles = {
    editProfileName:{
        fontFamily: 'Vazir',
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(EditProfile);