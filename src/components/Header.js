import React from 'react';
import { Avatar, AppBar, Typography, Link, Menu, Toolbar, MenuItem, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

import '../assets/colors/color.js';
import { secondaryDark, primarylight } from '../assets/colors/color.js';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
        this.handleClick = event => {
            this.setState({anchorEl: event.currentTarget});
        };
        
        this.handleClose = () => {
            this.setState({anchorEl: null});
        };

        this.toDashboard = () => {
            this.props.history.push('/dashboard');
        };
    
    }

    

    render(){
        return(
            <AppBar position="static" color="default" elevation={0} style={styles.appBar}>
                    <nav style={styles.links}>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={this.handleClick}>
                                <MenuIcon style={styles.menuIcon} />
                        </IconButton>
                        <Menu
                            id="menu"
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem style={styles.menuItem} onClick={this.handleClose}>خروج</MenuItem>
                        </Menu>

                        
                        <Button variant="button" href="#" style={styles.link}>
                            درباره ما
                        </Button>
                        <Button variant="button" href="#" style={styles.link}>
                            تماس با ما
                        </Button>
                        <Button variant="button" onClick={this.toDashboard} style={styles.link}>
                            داشبورد
                        </Button>
                    </nav>
                    <div style={styles.logo}>
                        <Typography variant="h6"  style={styles.toolbarTitle}>
                                دو سیر
                        </Typography>
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
        backgroundColor: secondaryDark
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

export default withRouter(Header);