import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class navBar extends Component {

  render(){
    return (      
      <Navbar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand href="#">
          Patent App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="active" href="/home">Home</Nav.Link>
          <Nav.Link href="/Patents">Patents</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          {roleSpecific(this.props.loginStat)}
          {inOrOut(this.props.loginStat)}
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
function inOrOut(login) {
  //console.log(this.props.loginStat)
  if (login){
    return (<Nav.Link href="/Logout">Logout</Nav.Link>);
  }else{
    return (<Nav.Link href="/Log">Login</Nav.Link>);
  }
}

function roleSpecific(auth) {
  if (!auth['auth']){
    return;
  }
  if (auth['role'] === "annotator"){
    return (<Nav.Link href="/Profile">Profile</Nav.Link>);
  }else if (auth['role'] === "admin"){
    return (
      <Nav.Link href="/Settings">App Settings</Nav.Link>
    );
  }
}

export default navBar;
