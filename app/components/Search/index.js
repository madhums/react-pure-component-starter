
import React, { Component } from 'react';
import history from '../../lib/history';

class Search extends Component {

  search (event) {
    event.preventDefault();
    history.pushState(null, '/github/' + this.refs.username.value);
  }

  render () {
    return (
      <form className="search" className="form-inline" onSubmit={this.search.bind(this)}>
        <h4>Github username:</h4>
        <input ref="username" defaultValue={this.props.username} type="text" className="form-control" placeholder="Search..." />
        &nbsp;
        <button className="btn btn-default" type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
