import React, { Component } from "react";
import AppState from './AppState';
import {Redirect} from "react-router";

class AdminComponent extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    AppState.logout();
    this.props.history.replace('/login');
  }

  render() {
    return (
      AppState.loggedIn ? (
        <div>
          <h1>Admin Component</h1>
          <button onClick={this.logout.bind(this)}>Logout</button>
        </div>
      ) : <Redirect to="/login" />
    );
  }
}

export default AdminComponent;
