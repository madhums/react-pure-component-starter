
import React, { Component } from 'react';
import { github as endpoint } from '../constants';

class UserProfile extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: props.username,
      profile: {}
    };
  }

  componentDidMount () {
    this.getProfile(this.state);
  }

  componentWillReceiveProps (props) {
    this.getProfile(props);
  }

  getProfile ({ username }) {
    // set username
    this.setState({ username });

    // set profile
    fetch(`${endpoint}/${username}`)
      .then(profile => profile.json())
      .then(profile => this.setState({ profile: profile }));
  }

  render () {
    const profile = this.state.profile;
    return (
      <div className="user-profile row">
        <div className="col-sm-4 col-md-2">
          <img width="80" src={profile.avatar_url} alt=""/>
        </div>
        <div className="col-sm-8 col-md-10">
          Public repos: {profile.public_repos}
          <br/>
          Followers: {profile.followers}
          <br/>
          Following: {profile.following}
        </div>
      </div>
    );
  }
}

export default UserProfile;
