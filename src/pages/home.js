import React from "react";
import logo from "../logo.svg";
import "../App.css";

import "../vendor/bootstrap/css/bootstrap.css";
import "../vendor/bootstrap/css/bootstrap.css.map";
import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/bootstrap/css/bootstrap.min.css";

function Home() {
  return (
    <div className="Home">
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Posts
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
      {/* Page Content */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">Browse</h1>
            <div className="list-group">
              <a href="#" className="list-group-item">
                Pop
              </a>
              <a href="#" className="list-group-item">
                R&B
              </a>
              <a href="#" className="list-group-item">
                Hip Hop
              </a>
              <a href="#" className="list-group-item">
                Rock
              </a>
              <a href="#" className="list-group-item">
                Electric
              </a>
              <a href="#" className="list-group-item">
                Reggae
              </a>
              <a href="#" className="list-group-item">
                Chill
              </a>
              <a href="#" className="list-group-item">
                Country
              </a>
            </div>
          </div>
          {/* /.col-lg-3 */}

          <div className="col-lg-9">
            <div
              id="carouselExampleIndicators"
              className="carousel slide my-4"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="https://static.vibe.com/files/2018/04/sixmau-j-cole-1524081746-650x366.png"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block img-fluid"
                    src="http://placehold.it/900x350"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="trending">
              <h1 className="trendingHeader">TRENDING</h1>

              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
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
                        <a href="#">Item One</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur!
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
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
                        <a href="#">Item Two</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur! Lorem ipsum dolor sit
                        amet.
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mb-4">
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
                        <a href="#">Item Three</a>
                      </h4>
                      <h5>$24.99</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet numquam aspernatur!
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        &#9733; &#9733; &#9733; &#9733; &#9734;
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="new">
                <h1 className="newHeader">NEW</h1>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
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
                          <a href="#">Item Four</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet numquam aspernatur!
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          &#9733; &#9733; &#9733; &#9733; &#9734;
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4">
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
                          <a href="#">Item Five</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet numquam aspernatur! Lorem ipsum dolor sit
                          amet.
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          &#9733; &#9733; &#9733; &#9733; &#9734;
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 mb-4">
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
                          <a href="#">Item Six</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Amet numquam aspernatur!
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          &#9733; &#9733; &#9733; &#9733; &#9734;
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
