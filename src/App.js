import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";
import MyPosts from "./pages/my-posts";
import MyProfile from "./pages/my-profile";
import Login from "./pages/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  getPosts() {
    fetch("/posts")
      .then(res => {
        // let data = res.json();
        return res.json(res);
      })
      .then(body => {
        // console.log("body", body);

        this.setState({ posts: body.data });
      });
  }

  componentDidMount() {
    this.getPosts();
  }

  handleSubmit(){
    // console.log("suck a long dohnut")
    fetch("/api/auth/login", {
      method: 'POST', 
      body: JSON.stringify(this),
      headers:{
        'Content-Type': 'apllication/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error ('Error:', error));
  }

  render() {
    // console.log("state", this.state);
    let arr = this.state.posts;
    // console.log(arr);

    // const { posts } = this.props;
    // let propData = props;
    // if (!propData) {
    //   propData = [];
    // }

    return (
      <div name="App">
        <div>
          <Login props={this.handleSubmit}></Login>
        </div>
        <div>
          {arr.map(post => (
            <Post
              title={post.title}
              description={post.description}
              image={post.image}
            />
          ))}

          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">
                Copyright &copy; Your Website 2019
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
function Post(props) {
  return (
    <div className="Posts">
      <div className="row">
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card h-100">
            <a href="#">
              <img className="card-img-top" src="" alt="" />
            </a>
            <div className="">
              <h4 className="">
                <a href="#">{props.title}</a>
              </h4>
              <p className="card-text">{props.description}</p>

              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <a href="#">
                    <img className="card-img-top" src={props.image} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
