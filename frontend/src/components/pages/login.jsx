import React, { Component } from "react";
import { Form, Button} from "react-bootstrap";

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
    console.log(usrAuth)
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
      <Form inline onSubmit={this.authUser} className="mt-3 ml-3" >
      <Form.Group controlId="formBasicEmail" >
          <Form.Control  className="mb-2 mr-sm-2" id="inlineFormInputName2" type="text" placeholder="Email" onChange={this.handleEChange} />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
          <Form.Control className="mb-2 mr-sm-2" type="password" placeholder="Password" onChange={this.handlePChange} />
      </Form.Group>
        <Button  className="mb-2 mr-sm-2" variant ="primary" type="submit"> Submit</Button>
      </Form>
    );
  }
}

export default Login;
