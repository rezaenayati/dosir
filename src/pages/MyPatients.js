import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import { Paper, List, ListItem, Avatar } from '@material-ui/core';

class MyPatients extends React.Component {
    render(){
        return(
            <div>
            <header>
                <Header />
            </header>
                <div>
                    <div style={{marginRight: '10vh', marginLeft: '10vh', marginTop: '5vh'}}>
                    <Paper  dir="rtl" style={{display: 'flex', flexDirection: 'column'}}>
                        <p style={styles.title}>لیست بیمار های من :</p>
                        <List>
                            <ListItem button>
                                <div style={styles.rowContainer}>
                                    <Avatar style={styles.avatar} /> 
                                    <p style={styles.nameText}>مصطفی اشرفی</p>
                                    <div style={styles.row}>
                                        <p style={styles.nameText}>شماره همراه : 09122222222</p>
                                        <p style={styles.nameText}>تاریخ آخرین ویزیت: ۱۳۹۸/۱۲/۱</p>
                                        <p style={styles.nameText}>نوبت ویزیت بعدی: ۱۳۹۹/۱/۱</p>
                                    </div>
             
                                </div>
                            </ListItem>
                            <ListItem button>
                                <div style={styles.rowContainer}>
                                    <Avatar style={styles.avatar} /> 
                                    <p style={styles.nameText}>مصطفی اشرفی</p>
                                    <div style={styles.row}>
                                        <p style={styles.nameText}>شماره همراه : 09122222222</p>
                                        <p style={styles.nameText}>تاریخ آخرین ویزیت: ۱۳۹۸/۱۲/۱</p>
                                        <p style={styles.nameText}>نوبت ویزیت بعدی: ۱۳۹۹/۱/۱</p>
                                    </div>
                                </div>
                            </ListItem>
                            <ListItem button>
                                <div style={styles.rowContainer}>
                                    <Avatar style={styles.avatar} /> 
                                    <p style={styles.nameText}>مصطفی اشرفی</p>
                                    <div style={styles.row}>

                                        <p style={styles.nameText}>شماره همراه : 09122222222</p>
                                        <p style={styles.nameText}>تاریخ آخرین ویزیت: ۱۳۹۸/۱۲/۱</p>
                                        <p style={styles.nameText}>نوبت ویزیت بعدی: ۱۳۹۹/۱/۱</p>
                                    </div>
                                </div>
                            </ListItem>
                        </List>
                    </Paper>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    title: {
        fontFamily: 'Vazir',
        margin: '3vh'
    },
    avatar: {
        width: '10vh',
        height: '10vh',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    nameText: {
        fontFamily: 'Vazir',
        marginRight: '3vh',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    }
}
export default withRouter(MyPatients);