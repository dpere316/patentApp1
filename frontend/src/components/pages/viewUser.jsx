import React, { Component } from 'react';
import GetUser from '../component/getUser';

class ViewUser extends Component {

  constructor() {
    super();
    
    this.state = {
      gotu:'buffer',
    };
  }


  handleDataUpdate = data => {
    this.setState({gotu:data});
    console.log(data)
  }

  displayUsers = () => {
   return this.state.gotu.express.array.map((user) => {

     return (
       <tr>
         <td>{user.email}</td>
         <td>{user.name}</td>
         <td>{user.role}</td>
         <td><button onClick={() => { this.delUser(user.email) }} id = {user.id} className='close float-left'>&times;</button></td>
       </tr>
 
     )

   })
  }

  delUser = async (email) => {
    console.log(email)
  
    const response = await fetch("/api/del-usr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: email}),
    });
    const body = await response.text();
    console.log(body);
    window.location.reload(false);
  }

  render() {

    return (

this.state.gotu.express ? (

<div className="container-fluid mt-5">

  <div className="row">
    <div className="col">
      <div className="card">
        {/* Card header */}
        <div className="card-header border-0">
          <h3 className="mb-0">Users</h3>
        </div>
        {/* Light table */}
        <div className="table-responsive">
          <table className="table align-items-center table-flush">
            <thead className="thead-light">
              <tr>
                <th scope="col" className="sort" data-sort="email">Email</th>
                <th scope="col" className="sort" data-sort="name">Name</th>
                <th scope="col" className="sort" data-sort="status">Role</th>
                <th scope="col" className="sort" data-sort="completion">Remove</th>
              </tr>
            </thead>
            <tbody className="list">
            {this.displayUsers()}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
      ) : (<div>
     
      <GetUser changeParentState = {()=> {this.handleDataUpdate()}}/>
      {/* Insert Loading Screen */}
      </div>)
    );
  }
    
}

export default ViewUser;
      