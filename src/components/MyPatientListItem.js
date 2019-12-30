import React from 'react';
import { Avatar , ListItem, List } from '@material-ui/core'


import { primarylight , primaryDark, primaryColor, secondarylight, secondaryDark } from '../assets/colors/color';


export default class TimelineElement extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }

    }
    render(){
        return(
            <ListItem button>
                <div style={styles.rowContainer}>
                    <Avatar style={styles.avatar} /> 
                    <p style={styles.nameText}>{this.props.first_name + "   " + this.props.last_name}</p>
                    <div style={styles.row}>
                        <p style={styles.nameText}>شماره همراه : {this.props.phone_num}</p>
                        <p style={styles.nameText}>تاریخ آخرین ویزیت: {this.props.last_date}</p>
                        <p style={styles.nameText}>نوبت ویزیت بعدی: {this.props.next_date}</p>
                    </div>
                </div>
            </ListItem>
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