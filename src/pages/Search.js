import React from 'react';

import Header from '../components/Header';
import UserInfoBox from '../containers/UserInfoBox';
import { display, fontFamily } from '@material-ui/system';

export default class Search extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <Header />
                </header>
                <div style={{display: 'flex'}}>
                    <div dir="rtl" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <p style={{fontFamily: 'Vazir'}}>جست و جوی بیمار با شماره همراه:</p>
                        <UserInfoBox style={{marginLeft: 'auto', marginRight: 'auto'}} />
                    </div>
                </div>
            </div>
        );
    }
}