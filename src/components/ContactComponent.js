import React, { Component } from "react";

import { BrowserRouter as Route, Switch, NavLink } from 'react-router-dom';

// import { NavLink } from 'react-bootstrap';
import ContactInfoComponent from './ContactInfoComponent';
import '../scss/styles.scss';

class ContactComponent extends Component {
  render() {
    return (
      <div>
        <h1>Contact Component</h1>

        <div className="links">
          <NavLink to={`${ this.props.match.url }/india`}
            className="link">India Office</NavLink>

          <NavLink to={`${ this.props.match.url }/us`}
            className="link">Us Office</NavLink>
        </div>

        <Switch>
          <Route exact path={this.props.match.url}
            render={() => <h4>Please select an office.</h4>} />

          <Route path={`${ this.props.match.url }/:location(india|us)`}
            component={<ContactInfoComponent />} />

          <Route render={() => <h2>No office found.</h2>} />
        </Switch>
      </div>
    );
  }
}
export default ContactComponent;
