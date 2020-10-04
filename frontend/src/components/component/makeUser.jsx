import React, { Component } from 'react';

class MakeUser extends Component {

  constructor() {
    super();
    
    this.state = {
      name: '',
      email: '',
      pass: '',
      role: ''
    };
  }

  makeUser = async e => {
    e.preventDefault();
    
    const usrAuth = {
      name: this.state.name,
      email: this.state.email,
      pass: this.state.pass,
      role: this.state.role
    }
    
    const response = await fetch('/api/make-usr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: usrAuth }),
    });
    const body = await response.text();
        
    console.log(body);
  };

  handleNChange = e => {
    this.setState({name: e.target.value});
  }

  handleRChange = e => {
    this.setState({role: e.target.value});
  }

  handleEChange = e => {
    this.setState({email: e.target.value});
  }

  handlePChange = e => {
    this.setState({pass: e.target.value});
  }
    
  render() {
    return (
      <form onSubmit={this.makeUser}>
        <label>
          Name:
          <input type="text" onChange={this.handleNChange} />
        </label>
        <label>
          Email:
          <input type="text" onChange={this.handleEChange} />
        </label>
        <label>
          Password:
          <input type="password" onChange={this.handlePChange} />
        </label>
        <label>
          Role:
          <input type="text" onChange={this.handleRChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MakeUser;