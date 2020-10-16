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
/*
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
*/
  typeRender(){
    var enPar = new URLSearchParams(this.props.location.search).get("en");
    console.log(enPar);
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
