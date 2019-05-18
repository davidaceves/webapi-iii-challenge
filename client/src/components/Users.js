import React, { Component } from 'react';

import User from './User';

class Users extends Component {
  render() {
    return (
      <div className="Users">
        <h1>Users</h1>
        <ul>
          {this.props.users.map(user => {
            return (
              <User
                name={user.name}
                id={user.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}


export default Users;