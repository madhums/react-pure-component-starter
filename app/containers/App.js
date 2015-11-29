
import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class App extends Component {

  render () {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          {this.props.children}
          {this.props.goo}
          {this.props.gar}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
