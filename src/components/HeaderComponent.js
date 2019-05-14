import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../scss/styles.scss";

class HeaderComponent extends Component {
  render() {
    // const arrHeaders = this.props;

    // const arrHeaders = ["Home", "My Posts", "My Profile", "About", "Login"];
    // console.log("arrHeaders: ", arrHeaders);
    return (
      <Navbar id="header" bg="dark" variant="dark">
        <Nav>
          {/*(arrHeaders || []).map(item => (
            <NavLink to="/"{item} className="link">{item}</NavLink>
          ))*/}
          <span className="mr-auto links">
            <div className="navTitle">
              <NavLink exact to="/" className="link">
                The Archive
              </NavLink>
            </div>
            <NavLink exact to="/" className="link" activeClassName="active">
              Home
            </NavLink>
            {/*<NavLink to="/posts/:userId" className="link">My Posts</NavLink>*/}
            <NavLink to="/users/:id" className="link">
              My Profile
            </NavLink>
            <NavLink to="/genres" className="link">
              Genres
            </NavLink>
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </span>
          <span bg="blue" id="nav-login" className="ml-auto links">
            <NavLink to="/login" className="link">
              Login
            </NavLink>
          </span>
        </Nav>
        {/*}
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
      </Navbar>
    );
  }
}
export default HeaderComponent;
