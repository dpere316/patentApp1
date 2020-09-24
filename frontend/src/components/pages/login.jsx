import React, { Component } from "react";

class Login extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      pass: ''
    };
    this.handleEChange = this.handleEChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEChange = e => {
    this.setState({email: e.target.value});
  }

  handlePChange = e => {
    this.setState({pass: e.target.value});
  }

  authUser = async e => {
    e.preventDefault();

    const usrAuth = {
      email: this.state.email,
      pass: this.state.pass
    }

    const response = await fetch('/auth/auth-usr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: usrAuth }),
    });
    const body = await response.text();
    
    if (body === "true"){
      this.props.history.push('/');
      window.location.reload(false);
    }
  }

  render() {
    return (
      <form onSubmit={this.authUser}>
        <label>
          Email:
          <input type="text" onChange={this.handleEChange} />
        </label>
        <label>
          Password:
          <input type="password" onChange={this.handlePChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
