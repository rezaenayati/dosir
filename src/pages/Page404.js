import React from 'react';

import Header from '../components/Header';

export default class Page404 extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <Header />
                </header>
                <div 
                    style={{
                        height: "90vh",
                        width: '190vh',
                        backgroundImage:'url(http://uupload.ir/files/vbfe_undraw_page_not_found_su7k.png)',
                        backgroundSize:'cover',
                    }}>
                </div>
            </div>
        );
    }
}
