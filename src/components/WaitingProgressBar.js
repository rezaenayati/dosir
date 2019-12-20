import React from 'react';
import { Grid, Modal, Paper, Card } from '@material-ui/core';

import ProgressBar from './ProgressBar';
import { primarylight, secondarylight } from '../assets/colors/color.js';

export default class WaitingProgressBar extends React.Component{
    render(){
        return(
            <Modal 
                style={styles.modal} 
                open={this.props.wait} dir="rtl">
                <Card style={styles.container}>                     
                    <ProgressBar style={styles.progressBar} message="لطفا شکیبا باشید" />
                </Card>    
            </Modal>
        );
    }
}

const styles = {
    modal: {
        position: 'absolute',
        top: '50%',
    },
    progressBar: {
        margin: 10
    },
    container: {
        backgroundColor: primarylight,
        width:200,
        outline: 'none',
        margin: 'auto'
    }
}