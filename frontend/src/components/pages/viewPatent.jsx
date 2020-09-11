import React, { Component } from "react";
import PatView from '../component/patView';

//const regex = /(<([^>]+)>)/ig;


class viewPatent extends Component {

  constructor() {
    super();

    this.state = {
      auth: '',
      role: '',
      pat: '',
      post: '',
      responseToPost: '',
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ pat: res }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/get-pat-data');
    const body = await response.json();  

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return this.state.pat && (
      <PatView pat={this.state.pat}/>
    );
  }
}

export default viewPatent;
