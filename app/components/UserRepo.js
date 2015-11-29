
import React, { Component } from 'react';

class UserRepo extends Component {

  render () {
    const repo = this.props.repo;
    return (
      <div key={repo.id}>
        <p>
          <strong>{repo.name} </strong>
          <small>
             - {repo.stargazers_count} stars
             - {repo.open_issues} open issues
             - <a href={repo.url} target="_blank">repo</a>
          </small>
        </p>
      </div>
    );
  }
}

export default UserRepo;
