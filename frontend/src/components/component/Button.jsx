import React, { Component } from "react";

class Button extends Component {

  render(){
    return (
      <button 
      className="btn btn-default"
      onClick={this.props.handleClick}>
        {this.props.label}
      </button>
    );
  }
};

export default Button;