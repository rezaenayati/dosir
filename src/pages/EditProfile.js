import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Paper, Button, TextField, Input, RaisedButton } from '@material-ui/core';
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
            file: '',
            imagePreviewUrl: ''
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
        this.handleDeleteImage = () =>  {
            this.props.onUpdateField('image' , '');
            console.log('dasda');
            
            this.setState({imagePreviewUrl: null});
        } 
    }

    componentDidMount(){
        this.startEdit();
        this.setState({imagePreviewUrl: this.props.doctor.image})
        if(!this.props.authenticated) {            
            this.props.history.push('/');    
        }
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }
    
    _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
    }
  

    render(){
        const doctor = this.props.doctor;
        if(!doctor) return null;
        return(
            <div>
                <header>
                    <Header />
                </header>
                <div style={styles.container}>
                    <Paper style={styles.paperContainer}>
                        <p dir='rtl' style={styles.editProfileName}>ویرایش پروفایل</p>
                        <Paper style={styles.avatarContainer}>
                            <Avatar align='center' src={this.state.imagePreviewUrl} style={styles.avatar} />
                            <Button onClick={this.handleDeleteImage} style={styles.buttonDelete}>حذف</Button> 
                                    <div style={styles.uploadContainer} dir='rtl'>
                                        <p style={{fontFamily: 'Vazir'}}>عکس جدید:</p>
                                        <Input  
                                            type="file"
                                            onChange={(e)=>this._handleImageChange(e)} ></Input>
                                        <Button  
                                            type="submit" 
                                            style={styles.uploadButton}
                                            onClick={(e)=>this._handleSubmit(e)}>
                                                بارگزاری
                                        </Button>
                                    </div>
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
    buttonDelete: {
        height: 33,
        backgroundColor: primaryColor,
        margin: 'auto',
        fontFamily: 'Vazir',
        fontSize: 13,
        color: primarylight,
        marginLeft: 10, 
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
    uploadButton: {
        height: 40,
        fontFamily: 'Vazir',
        marginTop: 3,
        backgroundColor: primaryDark,
        color: primarylight,
        alignItem: 'center',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
      
    },
    uploadContainer: {
        marginRight: 10,
        marginLeft: 10
    },
    avatarContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        width: 450,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: primarylight
    },
    avatar: {
        marginTop: 20, 
        marginLeft: 10, 
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