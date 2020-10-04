import React, { Component } from 'react';

class Profile extends Component {

    
    render() {
        

        return (

            <div className="mt-3 ml-3">
                <div>Name: {this.props.auth.name}</div>
                <div>Role: {this.props.auth.role}</div>
                <div>Email: {this.props.auth.email}</div>     
            </div>
          
  
        );
    }
}

export default Profile;
