import React, { Component } from "react";
import '../scss/styles.scss';

class ContactInfoComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Welcome to {this.props.match.params.location} office.</h1>
    );
  }
}
export default ContactInfoComponent;
