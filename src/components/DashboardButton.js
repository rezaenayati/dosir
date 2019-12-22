import React from 'react';
import animationData from '../1459-heart-rate.json';
import Lottie from 'react-lottie';
import { Paper, Avatar, Card, CardActionArea } from '@material-ui/core';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

export default class DashboardButtons extends React.Component{
    render(){
        return(
            <div style={this.props.style}>
                <Card style={Styles.cardContainer}>
                        <CardActionArea onClick={this.props.onClick} style={Styles.cardActionContainer}>
                            <p style={Styles.title}>{this.props.title}</p>
                            <img style={Styles.iconImage} src={this.props.imageUrl} />
                        </CardActionArea>
                </Card>
            </div>
        );
    }
}

const Styles = {
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        // marginRight: 15,
        borderRadios: 13,
        width: 330,
        height: 150
    },
    cardActionContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'Vazir',
        fontSize: 18,
        marginRight: 5
    },
    iconImage: {
        width: 145
    }
}
