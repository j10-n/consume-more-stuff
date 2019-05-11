import React from "react";
import logo, { ReactComponent } from "../logo.svg";
import "../App.css";
import "../login.css";

import "../vendor/bootstrap/css/bootstrap.css";
import "../vendor/bootstrap/css/bootstrap.css.map";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap/css/bootstrap.min.css";

import "../vendor/bootstrap/jquery/jquery.js";
import "../vendor/bootstrap/jquery/jquery.min.js";
import "../vendor/bootstrap/jquery/jquery.min.map";
import "../vendor/bootstrap/jquery/jquery.slim.js";
import "../vendor/bootstrap/jquery/jquery.min.js";
import "../vendor/bootstrap/jquery/jquery.min.map";

function Login({props}) {
  console.log(props)
  return (
    <div className="Login">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" action="/api/auth/login" method="POST">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      className="form-control"
                      placeholder="Email address"
                      required
                      autoFocus
                    />
                    <label htmlFor="inputEmail">Email address </label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      name="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={()=>props.handleSubmit}
                    
                  >
                    Sign in
                  </button>
                  <hr />
                  <button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="btn btn-lg btn-sign-up btn-block text-uppercase" />
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
