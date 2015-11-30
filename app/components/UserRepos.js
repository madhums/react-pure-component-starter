
import React, { Component } from 'react';
import { github as endpoint } from '../constants';

import UserRepo from './UserRepo';

class UserRepos extends Component {

  constructor (props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentDidMount () {
    this.getRepos(this.props);
  }

  componentWillReceiveProps (props) {
    this.getRepos(props);
  }

  getRepos ({ username }) {
    // set repos
    fetch(`${endpoint}/${username}/repos`)
      .then(repos => repos.json())
      .then(repos => this.setState({ repos: repos }));
  }

  getRepo (repo) {
    return (
      <li key={repo.id}>
        <UserRepo repo={repo}/>
      </li>
    );
  }

  render () {
    const repos = this.state.repos;
    return (
      <ul className="list-unstyled user-repos">
        {repos.map(this.getRepo)}
      </ul>
    );
  }
}

export default UserRepos;
