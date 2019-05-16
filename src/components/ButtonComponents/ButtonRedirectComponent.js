import React, { Component } from "react";
// import { Card,Form, formAction } from 'react-bootstrap';

// import { NavLink, Link, Redirect, BrowserRouter, withRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../../scss/styles.scss';

class ButtonRedirectComponent extends Component {
  constructor(props) {
    super(props);
  }
/*
  handleClick(){
    alert('---');
    history.push({destination});
  }*/
  render(){
  const Button = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => { history.push({destination}) }}
    >
      Click Me!
    </button>
  ));

    const {buttonName, destination} = this.props;

    //return <button onClick={this.handleClick}>{buttonName}</button>
    return <Button>{buttonName}</Button>
  }
  /*
  render() {
    const {buttonName, destination} = this.props;
    return (
      <div>
        <Link to={destination} className="btn btn-primary button">{buttonName}</Link>
     </div>
    );
  }
  */
}
export default ButtonRedirectComponent;