
import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Search from '../components/Search';

class Github extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: this.props.params.username,
      info: {},
      repos: []
    };
  }

  addRepo (repo) {
    this.repos.push(repo);
    this.setState({ repos: this.repos });
  }

  render () {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Search username={this.state.username}/>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Github;
