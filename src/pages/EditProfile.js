import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Paper, Button, TextField, Input, RaisedButton } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import '../assets/colors/color.js';
import { primarylight, secondarylight, secondaryDark, primaryColor, primaryDark } from '../assets/colors/color.js';
import { editDoctorInfo } from '../logics/api'; 

const mapStateToProps = state => ({ 
    ...state, 
    tokens: state.auth.tokens,
    authenticated: state.auth.authenticated,
    doctor: state.currentUser.doctor,
    editedDoctor: state.currentUser.editedDoctor,
    isMobile: state.device.isMobile
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
            imagePreviewUrl: '',
            saved: false,
        }
        const updateFieldEvent = key => ev => this.props.onUpdateField(key, ev.target.value);
        this.startEdit = () => this.props.onStartEdit();
        this.changeName = updateFieldEvent('first_name');
        this.changeFamily = updateFieldEvent('last_name');
        this.changeEmail = updateFieldEvent('email');
        this.changePhone = updateFieldEvent('phone_num');
        this.changeProvince = updateFieldEvent('province');
        this.changeCity = updateFieldEvent('city');
        this.changeAddress = updateFieldEvent('address');
        this.changeAbout = updateFieldEvent('about');
        this.changeTitle = updateFieldEvent('title');
        this.submit = ev => {
            this.setState({loading: true , saved: false});  
            setTimeout(() => {  
                editDoctorInfo(this.props.tokens.access , this.props.doctor , this.props.editedDoctor);
                this.props.onSubmit();
                console.log("asdlsjhaj");
                this.setState({loading: false , saved: true});
            }, 2000);
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
                <div style={this.props.isMobile ? styles.mobileContainer : styles.container}>
                    <Paper style={this.props.isMobile ? styles.mobilePaperContainer : styles.paperContainer}>
                        <p dir='rtl' style={styles.editProfileName}>ویرایش پروفایل</p>
                        <Paper style={this.props.isMobile ? styles.mobileAvatarContainer : styles.avatarContainer}>
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
                        <Paper dir='rtl' style={this.props.isMobile ? styles.mobileFieldContainer : styles.fieldContainer}>
                            <TextField 
                                placeholder='نام'
                                style={styles.textField}
                                variant="outlined"
                                onChange={this.changeName} 
                                defaultValue={doctor.first_name} />
                            <TextField 
                                placeholder='نام خانوادگی'
                                style={styles.textField}
                                variant="outlined" 
                                onChange={this.changeFamily}
                                defaultValue={doctor.last_name} />
                        </Paper>
                        <Paper dir='rtl' style={this.props.isMobile ? styles.mobileFieldContainer : styles.fieldContainer}>
                            <TextField 
                                placeholder='تخصص'
                                style={styles.textField}
                                fullWidth
                                variant="outlined"
                                onChange={this.changeTitle} 
                                defaultValue={doctor.title} />
                        </Paper>     
                        <Paper dir='rtl' style={this.props.isMobile ? styles.mobileFieldContainer : styles.fieldContainer}>
                            <TextField 
                                placeholder='ایمیل'
                                style={styles.textField}
                                variant="outlined" 
                                onChange={this.changeEmail}
                                defaultValue={doctor.email} />
                            <TextField 
                                placeholder='شماره'
                                onChange={this.changePhone}
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.phone_num} />
                        </Paper>
                        <Paper dir='rtl' style={this.props.isMobile ? styles.mobileFieldContainer : styles.fieldContainer}>
                            <TextField 
                                placeholder='استان'
                                onChange={this.changeProvince}
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.province} />
                            <TextField 
                                placeholder='شهر'
                                onChange={this.changeCity}
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.city} />
                        </Paper>
                        <Paper dir='rtl' style={this.props.isMobile ? styles.mobileFieldContainer : styles.fieldContainer}>
                            <TextField 
                                multiline
                                rows="4"                        
                                placeholder='آدرس'
                                onChange={this.changeAddress}
                                fullWidth
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.address} />
                        </Paper>
                        <Paper dir='rtl' style={this.props.isMobile ? styles.mobileFieldContainer : styles.fieldContainer}>
                            <TextField 
                                multiline
                                rows="4"                        
                                placeholder='درباره ی'
                                onChange={this.changeAbout}
                                fullWidth
                                style={styles.textField}
                                variant="outlined" 
                                defaultValue={doctor.about} />
                        </Paper>
                        <div style={styles.buttonContainer}>
                            {!this.state.loading&&<Button style={styles.buttonSave} onClick={this.submit}>ذخیره تغییرات</Button>}
                            {this.state.loading&&<ProgressBar message='در حال ذخیره ...' style={styles.progressBar} />}
                        </div>
                            {this.state.saved&&<p style={styles.editProfileName}> ذخیره شد </p>}
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
    mobileContainer: {
        backgroundColor: primarylight,
        width: window.innerWidth
    },
    mobilePaperContainer: {
        felx: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: secondarylight,
        width: window.innerWidth-10
    },
    paperContainer: {
        felx: 1,
        width: 600,
        height: 935,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: secondarylight
    },
    progressBar: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textField: {
        margin: 5,
        color: primaryDark
    },
    mobileFieldContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: window.innerWidth-18,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: primarylight,
    },
    fieldContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 450,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: primarylight,
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
    mobileAvatarContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        width: window.innerWidth-18,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: primarylight
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