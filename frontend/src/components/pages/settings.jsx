import React, { Component } from 'react';
import MakeUser from '../component/makeUser';
import DeleteUser from '../component/deleteUser';
import ViewUser from './viewUser';

class Setting extends Component {
    
  render() {
    return (
      <div>
        <MakeUser/>
        <DeleteUser/>
        <ViewUser/>
      </div>
    );
  }
}

export default Setting;