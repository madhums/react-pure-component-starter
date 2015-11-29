
import React, { Component } from 'react';
import { apis } from '../../constants';

const endpoint = apis.github;

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
        <p>
          <strong>{repo.name} </strong>
          <small>
             - {repo.stargazers_count} stars
             - {repo.open_issues} open issues
             - <a href={repo.url} target="_blank">repo</a>
          </small>
        </p>
      </li>
    );
  }

  render () {
    const repos = this.state.repos;
    return (
      <ul className="list-unstyled user-repos row">
        {repos.map(this.getRepo)}
      </ul>
    );
  }
}

export default UserRepos;
