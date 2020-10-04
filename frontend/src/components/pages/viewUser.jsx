import React, { Component } from 'react';
import Profile from './profile';
import UpdateUser from '../component/updateUser';



class ViewUser extends Component {

  constructor() {
    super();
    
    this.state = {
      gotu: '',
      email: ''
    };
  }

  getUser = async e => {
    e.preventDefault();
    
    const response = await fetch('/api/view-usr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.email }),
    });
    const body = await response.text();
    
    this.setState({gotu:JSON.parse(body)});
    console.log(body);
  };

  handleEChange = e => {
    this.setState({email: e.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.getUser}>
          <label>
            Email:
            <input type="text" onChange={this.handleEChange} />
          </label>
          <input type="submit" value="View" />
        </form>
        <UpdateUser auth={this.state.gotu}/>
      </div>
    );
  }
}

export default ViewUser;