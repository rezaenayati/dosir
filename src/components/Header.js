import React from 'react';
import { Avatar, AppBar, Typography, Link, Menu, Toolbar, MenuItem, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
    
    }

    

    render(){
        return(
            <AppBar position="static" color="default" elevation={0} style={styles.appBar}>
                <Toolbar className={styles.toolbar}>
                    <nav style={styles.links}>
                        <IconButton
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={this.handleClick}>
                                <MenuIcon color='#FFF0B3' />
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
                            داشبورد
                        </Button>
                        <Button variant="button" href="#" style={styles.link}>
                            درباره ما
                        </Button>
                        <Button variant="button" href="#" style={styles.link}>
                            تماس با ما
                        </Button>
                    </nav>
                    <Typography variant="h6" noWrap style={styles.toolbarTitle}>
                            دو سیر
                    </Typography>
                    <Avatar src="https://i.ibb.co/r799ZMz/logo-2sir-mehdi.png" />
                </Toolbar>
            </AppBar>
        );
    }
}

const styles = {
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 'auto',
        height: 60,
        backgroundColor: '#055fee'
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
        marginRight: 10,
        fontFamily: 'Vazir',
        color: '#FFF0B3'
    },
    link: {
        marginRight: 10,
        fontFamily: 'Vazir',
        color: '#FFF0B3'
    },
    links: {
        marginRight: 900
    },
    menuItem: {
        fontFamily: 'Vazir',
    }
}

export default (Header);