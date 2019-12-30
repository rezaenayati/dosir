import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import { Paper, List, ListItem, Avatar } from '@material-ui/core';

import { primarylight , primaryDark, primaryColor, secondarylight, secondaryDark } from '../assets/colors/color';
import MyPatientListItem from '../components/MyPatientListItem.js';
import { fakeFetchPatinetsList } from "../logics/fakeApi";
import WaitingProgressBar from '../components/WaitingProgressBar';
import { timeout } from 'q';

class MyPatients extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            progressShow: true,
            patients: [

            ]
        }
    }
    
    async componentWillMount() {
        await fakeFetchPatinetsList().then(res => {
            console.log(res[0]);
            for(var i = 0; i < res.length; i++){
                this.state.patients.push(res[i])
            }
            console.log(this.state.patients);
            this.setState({loading: false})
        });
            setTimeout(async () => {
                this.setState({progressShow: false})
            } , 2000)
        }

    render(){
        const renderItemList = this.state.patients.map((patient) =>
            <MyPatientListItem first_name={patient.first_name} last_name={patient.last_name} phone_num={patient.phone_num} next_date="1398/12/2" last_date="1398/2/1" />
        );
        if(this.state.loading)
            return <WaitingProgressBar />
        else
            return(
                <div>
                <header>
                    <Header />
                </header>
                    <div>
                        <div style={{backgroundColor: primarylight, marginRight: '10vh', marginLeft: '10vh', marginTop: '5vh'}}>
                        <Paper  dir="rtl" style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={styles.title}>لیست بیمار های من :</p>
                            {!this.state.progressShow&&<List>
                                <div dir="rtl">{renderItemList}</div>
                            </List>}
                            <WaitingProgressBar wait={this.state.progressShow} />
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