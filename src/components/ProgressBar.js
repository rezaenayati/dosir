import React from 'react';
import { Paper } from '@material-ui/core'
import animationData from '../1459-heart-rate.json';
import Lottie from 'react-lottie';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

export default class DashboardDetails extends React.Component{
    render(){
        return(
            <div style={this.props.style}>
                <Lottie options={defaultOptions}
                    height={30}
                    width={121}
                />
                <p dir='rtl' style={{textAlign: 'center', fontFamily: 'Vazir'}}>{this.props.message}</p>
            </div>
        );
    }
}


 