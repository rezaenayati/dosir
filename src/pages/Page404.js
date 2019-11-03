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
                        backgroundImage:'url(http://i.hmp.me/m/76092442a3fa33d63158abd6933510df.png)',
                        backgroundSize:'cover',
                    }}>
                </div>
            </div>
        );
    }
}
