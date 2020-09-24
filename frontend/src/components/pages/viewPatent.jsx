import React, { Component } from "react";
import PatView from '../component/patView';
import Button from '../component/Button';

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

  postLabel = () => { console.log("submit") };
  nextPost = () => { console.log("next") };

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
      <div>
        <PatView pat={this.state.pat}/>
        <Button handleClick={this.postLabel} label="submit"/>
        <Button handleClick={this.nextPost} label="next"/>
      </div>
    );
  }
}

export default viewPatent;
