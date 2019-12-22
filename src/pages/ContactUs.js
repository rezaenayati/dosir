import React from 'react';

import Header from '../components/Header';
import { Card, Paper, CardMedia, CardContent, Link, Button } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';
import { primaryColor } from '../assets/colors/color';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import { connect } from 'react-redux';


const mapStateToProps = state => ({ 
    ...state, 
    isMobile: state.device.isMobile
});

const mapDispatchToProps = dispatch => ({
});


class ContactUs extends React.Component{

    static defaultProps = {
        center: {
          lat: 35.740669,
          lng: 51.448253
        },
        zoom: 16
      };
    

    render(){
        return(
            <div>
                <header>
                    <Header />
                </header>
                <div>
                    <div dir='rtl' style={{margin: 25 }}>
                        <div>
                            <h2 style={styles.text}>تماس با ما</h2>
                        </div>
                        <Paper style={this.props.isMobile ? styles.mobileContainer : styles.container}>
                            <div>
                                <p style={styles.text}><RoomIcon />آدرس :خیابان شریعتی نرسیده به پل سیدخندان دانشکده برق و کامپیوتر دانشگاه خواجه نصیر</p>
                                <p style={styles.text}><PhoneIcon />شماره تماس : 88218821</p>
                                <p style={styles.text}>شبکه های اجتماعی :</p>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Link dir='ltr' style={styles.text}><EmailIcon />: ashrafimostafa@gmail.com </Link>
                                    <Link dir='ltr' href='https://telegram.me/ashrafimostafa' style={styles.text}><TelegramIcon />: @ashrafimostafa</Link>
                                    <Link dir='ltr' href='https://www.instagram.com/mostafa.irann/' style={styles.text}><InstagramIcon />: @mostafa.irann</Link>
                                    <Link dir='ltr' style={styles.text}><FacebookIcon />: @felanNadare</Link>
                                    <Link dir='ltr' href='https://twitter.com/rezam_6/' style={styles.text}><TwitterIcon />: @mostafaashrafi</Link>
                                </div>
                            </div>
                            <div style={this.props.isMobile ? styles.mobileMapContainer : styles.mapContainer}>
                                <GoogleMapReact
                                // bootstrapURLKeys={{key: 'AIzaSyD9cET7qfg1GEhEZy_tdUNwnfGihocQjVo'}}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                >
                                <LocationOnIcon
                                    lat={35.740669}
                                    lng={51.448253}
                                    fontSize='large'
                                    style={{color: primaryColor}}                                                
                                />
                                </GoogleMapReact>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ContactUs);

const styles = {
    container: {
        display:'flex', 
        flexDirection:'row', 
        justifyContent: 'space-around'
    },
    mobileContainer: {
        display:'flex', 
        flexDirection:'column', 
        justifyContent: 'space-around'
    },
    textContainer: {
        marginRight: 10
    },
    mobileMapContainer: {
        marginRight: 'auto',
        marginLeft: 'auto',
        height: window.innerHeight/2, 
        width: window.innerWidth* 5/6
    },
    mapContainer: {
        height: window.innerHeight/2, 
        width: window.innerWidth* 1/2
    },
    text: {
        fontFamily: 'Vazir'
    },
    paperContainer: {
        margin: 25
    },
    teamContainer: {
        margin: 25,
        display: 'flex',
        flexDirection: 'row'
    }
}
