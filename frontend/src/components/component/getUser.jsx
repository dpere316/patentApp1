import React, { Component } from 'react';

class getUser extends Component {
     
  constructor() {
    super();
    
    this.state = {
      gotu: {

      },

      email: {

      }
    };
  }
  getData = async () => {

    const response = await fetch('/api/view-usr')

    const body = await response.text();

    return JSON.parse(body);
    
  }

  async componentDidMount()
  {
      this.getData().then((res) => {console.log(res);this.props.changeParentState(res)})

  }

  getUsers = () => {
      return this.state.gotu.express.array.map((user) => {
          return user
      })
  }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default getUser;