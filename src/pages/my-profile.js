import React from "react";
import logo from "../logo.svg";
import "../App.css";

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

function MyProfile() {
  return (
    <div className="MyProfile">
      <div className="container">
        {/* Navigation */}
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
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My Posts
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    My Profile
                  </a>
                  <span className="sr-only">(current)</span>
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

        <div className="row my-2">
          <div className="col-lg-8 order-lg-2">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  href=""
                  data-target="#profile"
                  data-toggle="tab"
                  className="nav-link active"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  data-target="#edit"
                  data-toggle="tab"
                  className="nav-link"
                >
                  Edit
                </a>
              </li>
            </ul>
            <div className="tab-content py-4">
              <div className="tab-pane active" id="profile">
                <h5 className="mb-3">User Profile</h5>
                <div className="row">
                  <div className="col-md-6">
                    <h6>About</h6>
                    <p>Web Designer, UI/UX Engineer</p>
                    <h6>Hobbies</h6>
                    <p>
                      Indie music, skiing and hiking. I love the great outdoors.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <h5 className="mt-2">
                      <span className="fa fa-clock-o ion-clock float-right" />{" "}
                      Recent Activity
                    </h5>
                    <table className="table table-sm table-hover table-striped">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Abby</strong> joined ACME Project Team in{" "}
                            <strong>`Collaboration`</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Gary</strong> deleted My Board1 in{" "}
                            <strong>`Discussions`</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Kensington</strong> deleted MyBoard3 in{" "}
                            <strong>`Discussions`</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>John</strong> deleted My Board1 in{" "}
                            <strong>`Discussions`</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Skell</strong> deleted his post Look at Why
                            this is.. in <strong>`Discussions`</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!--/row--> */}
              </div>
              <div className="tab-pane" id="edit">
                <form role="form" />
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    First name
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Jane"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Last name
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="Bishop"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Email
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="email"
                      defaultValue="email@gmail.com"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Company
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Website
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="url"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Address
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                      placeholder="Street"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label" />
                  <div className="col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                      placeholder="City"
                    />
                  </div>
                  <div className="col-lg-3">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue=""
                      placeholder="State"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Time Zone
                  </label>
                  <div className="col-lg-9">
                    <select
                      id="user_time_zone"
                      className="form-control"
                      size="0"
                    >
                      <option defaultValue="Hawaii">(GMT-10:00) Hawaii</option>
                      <option defaultValue="Alaska">(GMT-09:00) Alaska</option>
                      <option defaultValue="Pacific Time (US &amp; Canada)">
                        (GMT-08:00) Pacific Time (US &amp; Canada)
                      </option>
                      <option defaultValue="Arizona">
                        (GMT-07:00) Arizona
                      </option>
                      <option defaultValue="Mountain Time (US &amp; Canada)">
                        (GMT-07:00) Mountain Time (US &amp; Canada)
                      </option>
                      <option
                        defaultValue="Central Time (US &amp; Canada)"
                        defaultValue="selected"
                      >
                        (GMT-06:00) Central Time (US &amp; Canada)
                      </option>
                      <option defaultValue="Eastern Time (US &amp; Canada)">
                        (GMT-05:00) Eastern Time (US &amp; Canada)
                      </option>
                      <option defaultValue="Indiana (East)">
                        (GMT-05:00) Indiana (East)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Username
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="janeuser"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Password
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="password"
                      defaultValue="11111122333"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label">
                    Confirm password
                  </label>
                  <div className="col-lg-9">
                    <input
                      className="form-control"
                      type="password"
                      defaultValue="11111122333"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-lg-3 col-form-label form-control-label" />
                  <div className="col-lg-9">
                    <input
                      type="reset"
                      className="btn btn-secondary"
                      defaultValue="Cancel"
                    />
                    <input
                      type="button"
                      className="btn btn-primary"
                      defaultValue="Save Changes"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-1 text-center">
            <img
              src="//placehold.it/150"
              className="mx-auto img-fluid img-circle d-block"
              alt="avatar"
            />
            <h6 className="mt-2">Upload a different photo</h6>
            <label className="custom-file">
              <input type="file" id="file" className="custom-file-input" />
              <span className="custom-file-control">Choose file </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
