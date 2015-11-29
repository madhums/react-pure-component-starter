
import React, { Component } from 'react';

import UserProfile from '../UserProfile';
import UserRepos from '../UserRepos';

class User extends Component {
  render () {
    const { username } = this.props.params;
    return (
      <div className="user row">
        <hr/>
        <div className="repo col-md-6">
          <UserRepos username={username}/>
        </div>
        <div className="profile col-md-6">
          <UserProfile username={username}/>
        </div>
      </div>
    );
  }
}

export default User;
