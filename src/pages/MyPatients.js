import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import { Paper, List, ListItem, Avatar } from '@material-ui/core';

import { primarylight , primaryDark, primaryColor, secondarylight, secondaryDark } from '../assets/colors/color';
import MyPatientListItem from '../components/MyPatientListItem.js'
class MyPatients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            patients: [

            ]
        }

    }

    componentDidMount() {

    }

    render(){
        return(
            <div>
            <header>
                <Header />
            </header>
                <div>
                    <div style={{backgroundColor: primarylight, marginRight: '10vh', marginLeft: '10vh', marginTop: '5vh'}}>
                    <Paper  dir="rtl" style={{display: 'flex', flexDirection: 'column'}}>
                        <p style={styles.title}>لیست بیمار های من :</p>
                        <List>
                            <MyPatientListItem first_name="مصطفی" last_name="اشرفی" phone_num="0912222222" next_date="1398/12/2" last_date="1398/2/1" />
                            <MyPatientListItem />
                            <MyPatientListItem />
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