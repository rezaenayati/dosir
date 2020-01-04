import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import { Card, Paper, CardMedia, CardContent } from '@material-ui/core';


const mapStateToProps = state => ({ 
    ...state, 
    isMobile: state.device.isMobile
});

const mapDispatchToProps = dispatch => ({
});



class AboutUS extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <Header />
                </header>
                <div dir='rtl'>
                    <Paper style={this.props.isMobile ? styles.mobileTeamContainer : styles.teamContainer}>
                        <div style={styles.textContainer}>
                            <h4 style={styles.text}>تاریخچه:</h4>
                            <p style={styles.text}>در سال ۱۳۹۸ جمعی از دانشجویان دانشگاه صنعتی خواجه نصیر طوسی با هدف بهبود سلامت کشور و کمک به جامعه پزشکی شروع به طراحی و تولید این سامانه کردند </p>
                            <p style={styles.text}>هدف اولیه این سامانه کمک به نگهداری بهتر و دسترسی راحت تر  پزشکان و خود بیمار به اطلاعات و سابقه پزشکی بیمار بود که در فاز های بعدی این سامانه گسترش پیدا کرد و با ایده های متنوع اعضای تیم طراحی تبدیل به سامانه موجود شد. </p>
                        </div>
                        <img style={this.props.isMobile ? styles.mobileImage : styles.image} src="http://uupload.ir/files/pfle_undraw_medicine_b1ol_(1).png" />
                    </Paper>
                    <div style={styles.paperContainer}>
                    <h4 style={styles.text}>اعضای تیم:</h4>
                    <div style={this.props.isMobile ? styles.mobileTeamContainer : styles.teamContainer}>
                        <Card style={styles.cardContainer}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="http://uupload.ir/files/3rvm_photo_2019-12-12_23-02-23.jpg"
                            />
                                                    <CardContent>
                            <h2 style={styles.text}>محمدرضا روزگار</h2>
                            <h4 style={styles.text}>توسعه دهنده back-end</h4>
                        </CardContent>

                        </Card>
                        <Card style={styles.cardContainer}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="http://uupload.ir/files/cvbp_photo_2019-12-04_00-23-18.jpg"
                            />
                                                    <CardContent>
                            <h2 style={styles.text}>مصطفی اشرفی</h2>
                            <h4 style={styles.text}>توسعه دهنده اندروید</h4>
                        </CardContent>

                        </Card>
                        <Card style={styles.cardContainer}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="http://uupload.ir/files/0p7l_photo_2018-11-17_03-07-02.jpg"
                            />
                        <CardContent>
                            <h2 style={styles.text}>رضا عنایتی</h2>
                            <h4 style={styles.text}>توسعه دهنده front-end</h4>
                        </CardContent>
                        </Card>
                        <Card style={styles.cardContainer}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="http://uupload.ir/files/8byz_photo_2019-12-22_23-45-29.jpg"
                            />
                                                    <CardContent>
                            <h2 style={styles.text}>مهدی همتی</h2>
                            <h4 style={styles.text}>توسعه دهنده اندروید</h4>
                        </CardContent>

                        </Card>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

const styles = {
    textContainer: {
        marginRight: 10
    },
    image: {
        maxWidth: 1000,
        maxHeight: 350,
    },
    mobileImage: {
        maxWidth: window.innerWidth * 8/9
    },
    text: {
        fontFamily: 'Vazir'
    },
    paperContainer: {
        margin: 25
    },
    cardContainer: {
        maxWidth: 345,
        margin: 15
    },
    teamContainer: {
        margin: 25,
        display: 'flex',
        flexDirection: 'row'
    },
    mobileTeamContainer: {
        margin: 25,
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(AboutUS);