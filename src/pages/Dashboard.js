import React from 'react';
import {connect} from 'react-redux';
import { Grid, Divider } from '@material-ui/core';
import DoctorProfile from '../components/DoctorProfile';

const mapStateToProps = state => ({ ...state, email: state.auth.email});

const mapDispatchToProps = dispatch => ({
    onSubmit: (email , password) => {

    }
});

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
            <header>
            </header>
            <Grid item={true} container component="main" style={{height: '100vh'}}>
                        <Grid item={true}  xs={false} sm={4} md={9} style={{backgroundSize: 'cover'}}>
                        </Grid>
                        <Grid item={true} xs={12} sm={8} md={3} style={{backgroundColor: '#f2fdff'}} component="div" elevation={6} square>
                            <DoctorProfile 
                                email={this.props.email}
                                name='همایون بهزادی'
                                phone='09121234334'
                                title='متخصص اعصاب و روان'
                                address='تهران بزگراه عبدلله ویسی میدان اکبر میثاقیان خیابان میرزاعلی کرمانی کوچه پلدختر پلاک ۸ طبقه ۲ زنگآیفون خراب اسا'
                                about='وی در خانواده ی مذهبی در جنوب سیستان چشم به جهان گشود. کودکی خود را در سواحل زیبای بوشهر گذراند و با سهمیه پدر جانبازش موفق به حضور در دانشگاه شهید مطهری هرمزگان شد '
                                avatarUrl='https://www.mianfolio.com/kosimedic/v1.3.1/wide/img/doctor-profile.jpg'
                                />
                        </Grid>
            </Grid>
            </div>
        
        );
    }

}

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);