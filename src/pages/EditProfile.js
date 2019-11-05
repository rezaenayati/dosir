import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Paper, Button, TextField } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import '../assets/colors/color.js';
import { primarylight, secondarylight, secondaryDark, primaryColor, primaryDark } from '../assets/colors/color.js';
import {editDoctor} from '../logics/api'; 

const mapStateToProps = state => ({ 
    ...state, 
    email: state.auth.email,
    authenticated: state.auth.authenticated,
    doctor: state.currentUser.doctor
});

const mapDispatchToProps = dispatch => ({
    onUpdateField: (key, value) => dispatch({ type: 'UPDATE_FIELD_EDITOR', key, value }),
    onSubmit: () => dispatch({ type: 'SUBMIT_EDIT'}),
    onStartEdit: () => dispatch({type: 'START_EDIT'})
});

class EditProfile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loading: false,
        }
        const updateFieldEvent = key => ev => this.props.onUpdateField(key, ev.target.value);
        this.startEdit = () => this.props.onStartEdit();
        this.changeName = updateFieldEvent('name');
        this.changeFamily = updateFieldEvent('family');
        this.changeEmail = updateFieldEvent('email');
        this.changePhone = updateFieldEvent('phone');
        this.changeProvince = updateFieldEvent('province');
        this.changeCity = updateFieldEvent('city');
        this.changeAddress = updateFieldEvent('address');
        this.changeAbout = updateFieldEvent('about');
        this.changeTitle = updateFieldEvent('title');
        this.submit = ev => {
            this.props.onSubmit();
            editDoctor(this.props.doctor.email , this.props.doctor);
        }; 
    }

    componentDidMount(){
        this.startEdit();
        console.log(this.props.authenticated);
        if(!this.props.authenticated) {            
            this.props.history.push('/');    
        }
    }

    render(){
        const doctor = this.props.doctor;
        return(
            <div>
                <header>
                    <Header />
                </header>
                <div style={styles.container}>
                    <Paper style={styles.paperContainer}>
                        <p dir='rtl' style={styles.editProfileName}>ویرایش پروفایل</p>
                        <Paper style={styles.avatarContainer}>
                            <Avatar align='center' src={doctor.image} style={styles.avatar} />
                            <Button style={styles.buttonUpoad}>عکس جدید</Button>
                            <Button style={styles.buttonDelete}>حذف</Button>
                        </Paper>
                        <Paper dir='rtl' style={styles.fieldContainer}>
                            <TextField 
                                label='نام'
                                style={styles.textField}
                                variant="outlined"
                                onChange={this.changeName} 
                                defaultValue={doctor.name} />
                            <TextField 
                                label='نام خانوادگی'
                                style={styles.textField}
                                variant="outlined" 
                                onChange={this.changeFamily}
                                defaultValue={doctor.family} />
                        </Paper>
                        <Paper dir='rtl' style={styles.fieldContainer}>
                            <TextField 
                                label='تخصص'
                                style={styles.textField}
                                fullWidth
                                variant="outlined"
                                onChange={this.changeTitle} 
                                defaultValue={doctor.title} />
                        </Paper>     
                        <Paper style={styles.fieldContainer}>
                            <TextField 
                                label='ایمیل'
                                style={styles.textField}
                                variant="outlined" 
                                onChange={this.changeEmail}
                                defaultValue={doctor.email} />
                            <TextField 
                                label='شماره'
                                onChange={this.changePhone}
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.phone} />
                        </Paper>
                        <Paper dir='rtl' style={styles.fieldContainer}>
                            <TextField 
                                label='استان'
                                onChange={this.changeProvince}
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.province} />
                            <TextField 
                                label='شهر'
                                onChange={this.changeCity}
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.city} />
                        </Paper>
                        <Paper dir='rtl' style={styles.fieldContainer}>
                            <TextField 
                                multiline
                                rows="4"                        
                                label='آدرس'
                                onChange={this.changeAddress}
                                fullWidth
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.address} />
                        </Paper>
                        <Paper dir='rtl' style={styles.fieldContainer}>
                            <TextField 
                                multiline
                                rows="4"                        
                                label='درباره ی'
                                onChange={this.changeAbout}
                                fullWidth
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.about} />
                        </Paper>
                        <div style={styles.buttonContainer}>
                            <Button style={styles.buttonSave} onClick={this.submit}>ذخیره تغییرات</Button>
                        </div>
                    </Paper>
                </div>    
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'absolute',
        top: 60,
        right: 0, 
        bottom: 0, 
        left: 0,
        height: 1000,
        backgroundColor: primarylight
       
    },
    paperContainer: {
        felx: 1,
        width: 600,
        height: 900,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: secondarylight

    },
    textField: {
        margin: 5,
        color: primaryDark
    },
    fieldContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 450,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: primarylight
    },
    buttonUpoad: {
        height: 40,
        margin: 'auto',
        fontFamily: 'Vazir',
        backgroundColor: primaryDark,
        color: primarylight,
        marginLeft: 'auto', 
        marginRight: 'auto', 
    },
    buttonDelete: {
        height: 33,
        backgroundColor: primaryColor,
        margin: 'auto',
        fontFamily: 'Vazir',
        fontSize: 13,
        color: primarylight,
        marginLeft: 'auto', 
        marginRight: 'auto', 
    },
    buttonSave: {
        height: 33,
        backgroundColor: secondaryDark,
        margin: 'auto',
        fontFamily: 'Vazir',
        fontSize: 13,
        color: primarylight,
        marginLeft: 'auto', 
        marginRight: 'auto', 
    },
    avatarContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        width: 400,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: primarylight
    },
    avatar: {
        marginTop: 20, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        width: 100, 
        height:100
    },
    editProfileName:{
        fontFamily: 'Vazir',
        textAlign: 'center',
        color: primaryDark
    },
    buttonContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 450,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
    },

}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(EditProfile));