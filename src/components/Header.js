import React from 'react';
import { Avatar, Popper, AppBar, Paper, Typography, Link, Menu, Toolbar, MenuItem, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

import '../assets/colors/color.js';
import { secondaryDark, primarylight, primaryDark } from '../assets/colors/color.js';
import { connect } from 'react-redux';
import { fontSize, width } from '@material-ui/system';

const mapStateToProps = state => ({ ...state, 
    email: state.auth.email, 
    auth: state.auth.authenticated,
    isMobile: state.device.isMobile
});

const mapDispatchToProps = dispatch => ({
    deleteCurrentUserData: () => dispatch({type: 'REMOVE_DOCTOR_INFO'}),
    setNotAuthenticated: () => dispatch({type: 'LOGOUT'})
});

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            anchorElPop: null,
        }
        this.handleClick = event => {
            this.setState({anchorEl: event.currentTarget});
        };
        
        this.handleClose = () => {
            this.setState({anchorEl: null});
        };

        this.handleClickPop = event => {
            if(this.state.anchorElPop === null)
                this.setState({anchorElPop: event.currentTarget});
            else 
                this.setState({anchorElPop: null});
        };
        
        this.handleClosePop = () => {
            this.setState({anchorElPop: null});
            this.handleLogOut();            
        };

        this.toDashboard = () => {
            this.props.history.push('/dashboard');
        };

        this.toAboutUsPage = () => {
            this.props.history.push('aboutus');
        };

        this.handleLogOut = () => {
            console.log("log out"); 
            this.props.deleteCurrentUserData();
            this.props.setNotAuthenticated();
            this.props.history.push('/');
        }
    
    }

    

    render(){
        const open = Boolean(this.state.anchorElPop);
        const id = open ? 'simple-popper' : undefined;
      
        return(
            <AppBar position="static" color="default" elevation={0} style={this.props.isMobile ? styles.mobileAppBar : styles.appBar}>
                    <nav style={styles.links}>
                        {this.props.auth&&<IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={this.handleClick}>
                                <MenuIcon style={styles.menuIcon} />
                        </IconButton>}
                        {this.props.auth&&<Menu
                            id="menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem style={styles.menuItem} onClick={this.handleLogOut}>خروج</MenuItem>
                        </Menu>}

                        
                        <Button variant="button" onClick={this.toAboutUsPage} style={(this.props.isMobile ? styles.Mobilelink : styles.link)}>
                            درباره ما
                        </Button>
                        <Popper id={id} open={open} anchorEl={this.state.anchorElPop}>
                            <Paper style={styles.popup}>این بخش برای اسپرینت بعدی است عجله نکن</Paper>
                        </Popper>

                        <Button variant="button" onClick={this.handleClickPop} style={(this.props.isMobile ? styles.Mobilelink : styles.link)}>
                            تماس با ما
                        </Button>
                        <Button variant="button" onClick={this.toDashboard} style={(this.props.isMobile ? styles.Mobilelink : styles.link)}>
                            داشبورد
                        </Button>
                    </nav>
                    <div style={styles.logo}>
                        {!this.props.isMobile&&<Typography variant="h6"  style={styles.toolbarTitle}>
                                دو سیر
                        </Typography>}
                        <Avatar style={styles.avatar} src="https://i.ibb.co/r799ZMz/logo-2sir-mehdi.png" />
                    </div>
            </AppBar>
        );
    }
}

const styles = {
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        height: 60,
        backgroundColor: primaryDark
    },
    mobileAppBar: {
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        height: 60,
        backgroundColor: primaryDark,
        width: window.innerWidth
    },
    popup: {
        backgroundColor: 'white',
    },
    toolbarTitle: {
        margin: "auto",
        alignItem: 'flex-start',
        marginRight: 8,
        fontFamily: 'Vazir',
        color: primarylight
    },
    logo: {
        position: 'absolute',
        right: 0,
        top: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    link: {
        fontFamily: 'Vazir',
        color: primarylight
    },
    Mobilelink: {
        fontFamily: 'Vazir',
        color: primarylight,
        fontSize: 10,
    },
    links: {
        position: 'absolute',
        left: 0,
        top: 6,
    },
    menuItem: {
        fontFamily: 'Vazir',
    },
    menuIcon: {
        margin: "auto",
        color: primarylight
    },
    avatar: {
        margin: "auto",
        marginRight: 10
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));