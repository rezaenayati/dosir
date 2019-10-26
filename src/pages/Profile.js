import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({ ...state});

const mapDispatchToProps = dispatch => ({
    
});

class Profile extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: null,
        }
    }

    componentDidMount(){
        var url = window.location.href;
        var usrname = url.substring(28);
        this.setState({username: usrname});
    }

    render(){
        return(
            <div style={{margin: 100}}>
                <p>Profile Page</p>
                <p>Developers are working!</p>
                <p>{this.state.username}</p>
            </div>
        );
    }

}

export default connect(mapStateToProps , mapDispatchToProps)(Profile);