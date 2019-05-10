import React from "react";
import logo from "../logo.svg";
import "../App.css";

import "../vendor/bootstrap/css/bootstrap.css";
import "../vendor/bootstrap/css/bootstrap.css.map";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap/css/bootstrap.min.css";

const Post = props => (
  <div className="Posts">
    <div className="card-body">
      <h4 className="card-title">
        <a href="#">{props.title}</a>
      </h4>
      <p className="card-text">{props.description}</p>

      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card h-100">
          <a href="#">
            <img className="card-img-top" src={prop.img} alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Posts;
