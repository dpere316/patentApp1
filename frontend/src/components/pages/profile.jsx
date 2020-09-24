import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.auth.name}</p>
                <p>Role: {this.props.auth.role}</p>
                <p>Email: {this.props.auth.email}</p>
            </div>
        );
    }
}

export default Profile;