import React, { Component } from "react";
import PatView from '../component/patView';
import Button from '../component/Button';

//const regex = /(<([^>]+)>)/ig;


class PassReset extends Component {

  constructor() {
    super();

    this.state = {
      responseToPost: '',
    };
  }

  authToken = async e => {
    e.preventDefault();

    const en = {
      encryption: new URLSearchParams(this.props.location.search).get("en")
    }

    const response = await fetch('/auth/verify-pass-reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: en }),
    });
    const body = await response.text(); 

    this.setState({responseToPost: body})
  }


  typeRender(){
  }

  render() {
    return (
      <div>
        {console.log("in pass-reset")}
        {this.typeRender()}
      </div>
    );
  }
}

export default PassReset;
