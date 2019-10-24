import React from 'react';
import {connect} from 'react-redux';
import { store } from '../store';

const mapStateToProps = state => ({ email: store.user });

const mapDispatchToProps = dispatch => ({
    onSubmit: (email , password) => {
        //reguest from server and save it in payload
        const payload = {email: email};
        dispatch({type: 'REGISTER' , payload});
    }
});



class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: null
        }
    }

    componentDidMount(){
        mapDispatchToProps();
    }

    render(){
        return(
            <p>Developers are working!</p>
        );
    }

}

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);