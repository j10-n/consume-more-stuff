import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";
import MyPosts from "./pages/my-posts";

import "./vendor/bootstrap/css/bootstrap.css";
import "./vendor/bootstrap/css/bootstrap.css.map";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/bootstrap/css/bootstrap.min.css";

function App() {
  return (
    <div name="App">
      {MyPosts()}
      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2019
          </p>
        </div>
        {/* /.container */}
      </footer>
    </div>
  );
}

export default App;
