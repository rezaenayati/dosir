import React from 'react';

import Header from '../components/Header';

export default class Page404 extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <Header />
                </header>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <img style={{
                            maxHeight: window.innerHeight,
                            maxWidth: (window.innerHeight <= window.innerWidth) ? window.innerWidth* 3/5 : window.innerWidth,
                            marginRight: 'auto',
                            marginLeft: 'auto'
                        }} 
                        src='http://uupload.ir/files/vbfe_undraw_page_not_found_su7k.png' />
                    <p style={{marginRight: 'auto', marginLeft: 'auto', fontFamily: 'Vazir'}}> صفحه مورد نظر یافت نشد </p>    
                </div>
            </div>
        );
    }
}
