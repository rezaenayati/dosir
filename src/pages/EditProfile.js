import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Paper, Button, TextField } from '@material-ui/core';
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
            <div style={styles.container}>
                <Paper style={styles.paperContainer}>
                    <p dir='rtl' style={styles.editProfileName}>ویرایش پروفایل</p>
                    <Paper style={styles.avatarContainer}>
                        <Avatar align='center' src={this.state.doctor.image} style={styles.avatar} />
                        <Button style={styles.buttonUpoad}>عکس جدید</Button>
                        <Button style={styles.buttonDelete}>حذف</Button>
                    </Paper>
                    <Paper dir='rtl' style={styles.fieldContainer}>
                        <TextField 
                            label='نام'
                            style={styles.textField}
                            variant="outlined" 
                            defaultValue='همایون' />
                        <TextField 
                            label='نام خانوادگی'
                            style={styles.textField}
                            variant="outlined" 
                            defaultValue='بهزادی' />
                    </Paper>
                    <Paper style={styles.fieldContainer}>
                        <TextField 
                            label='ایمیل'
                            style={styles.textField}
                            variant="outlined" 
                            defaultValue='enayatii@yahoo.com' />
                        <TextField 
                            label='شماره'
                            style={styles.textField}
                            variant="outlined" 
                            defaultValue='+989123232123' />
                    </Paper>
                    <Paper dir='rtl' style={styles.fieldContainer}>
                        <TextField 
                            multiline
                            rows="4"                        
                            label='آدرس'
                            fullWidth
                            style={styles.textField}
                            variant="outlined" 
                            defaultValue='تهران' />
                    </Paper>
                    <Paper dir='rtl' style={styles.fieldContainer}>
                        <TextField 
                            multiline
                            rows="4"                        
                            label='درباره ی'
                            fullWidth
                            style={styles.textField}
                            variant="outlined" 
                            defaultValue='من هستم' />
                    </Paper>
                    <div style={styles.fieldContainer}>
                        <Button style={styles.buttonSave}>ذخیره تغییرات</Button>
                    </div>
                </Paper>
            </div>    
        );
    }
}

const styles = {
    container: {
        position: 'absolute',
        top: 0, right: 0, bottom: 0, left: 0,
        height: 850,
        backgroundColor: '#66ffa1'
       
    },
    paperContainer: {
        felx: 1,
        width: 600,
        height: 750,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 40,

    },
    textField: {
        margin: 5,
    },
    fieldContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 450,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    buttonUpoad: {
        margin: 10,
        height: 40,
        margin: 'auto',
        fontFamily: 'Vazir',
        backgroundColor: 'blue',
        color: 'white',
        marginLeft: 'auto', 
        marginRight: 'auto', 
    },
    buttonDelete: {
        margin: 10,
        height: 33,
        backgroundColor: '#A7AEAC',
        margin: 'auto',
        fontFamily: 'Vazir',
        fontSize: 13,
        color: 'white',
        marginLeft: 'auto', 
        marginRight: 'auto', 
    },
    buttonSave: {
        margin: 10,
        height: 33,
        backgroundColor: '#056B2C',
        margin: 'auto',
        fontFamily: 'Vazir',
        fontSize: 13,
        color: 'white',
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
        flexDirection: 'row'
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
        textAlign: 'center'
    }
}

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(EditProfile));