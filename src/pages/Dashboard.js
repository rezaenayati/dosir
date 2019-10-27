import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({ ...state, email: state.auth.email});

const mapDispatchToProps = dispatch => ({
    onSubmit: (email , password) => {

    }
});

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <p>Developers are working!</p>
                <p>{this.props.email}</p>
            </div>
        );
    }

}

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);