import React from "react";
import logo from "../logo.svg";
import "../App.css";

import "../vendor/bootstrap/css/bootstrap.css";
import "../vendor/bootstrap/css/bootstrap.css.map";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap/css/bootstrap.min.css";

function MyPosts() {
  return (
    <div className="MyPosts">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            THE ARCHIVE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  My Posts
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* <!-- Page Heading --> */}
        <h1 className="my-4">My Posts</h1>

        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img
                  className="card-img-top"
                  src="http://placehold.it/700x400"
                  alt=""
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project One</a>
                </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus
                  sit, repellat sequi itaque deserunt, dolores in, nesciunt,
                  illum tempora ex quae? Nihil, dolorem!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img
                  className="card-img-top"
                  src="http://placehold.it/700x400"
                  alt=""
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Two</a>
                </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img
                  className="card-img-top"
                  src="http://placehold.it/700x400"
                  alt=""
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Three</a>
                </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  quisquam, error quod sed cumque, odio distinctio velit nostrum
                  temporibus necessitatibus et facere atque iure perspiciatis
                  mollitia recusandae vero vel quam!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img
                  className="card-img-top"
                  src="http://placehold.it/700x400"
                  alt=""
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Four</a>
                </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img
                  className="card-img-top"
                  src="http://placehold.it/700x400"
                  alt=""
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Five</a>
                </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="card h-100">
              <a href="#">
                <img
                  className="card-img-top"
                  src="http://placehold.it/700x400"
                  alt=""
                />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Six</a>
                </h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque earum nostrum suscipit ducimus nihil provident,
                  perferendis rem illo, voluptate atque, sit eius in voluptates,
                  nemo repellat fugiat excepturi! Nemo, esse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
