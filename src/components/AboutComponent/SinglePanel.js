import React, { Component, Link } from "react";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, NavLink, Route, Switch, Redirect, Prompt } from 'react-router-dom';

// import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../../scss/styles.scss';

class SinglePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props;
    console.log('data: ',data);
    return (
      <div id='singlePanel'>
        <h1>{data.h1}</h1>
        <div id='body'>
        <p>{data.description}</p>
        </div>
      </div>
    );
  }
}
export default SinglePanel;