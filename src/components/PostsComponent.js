import React, { Component } from "react";

import CardComponent from "./CardComponent";
import "../scss/styles.scss";

class PostsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  getPosts() {
    fetch("/posts")
      .then(res => {
        // let data = res.json();
        return res.json(res);
      })
      .then(body => {
        console.log("body", body);

        this.setState({ posts: body.data });
      });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    let arrPosts = this.props.arrPosts;
    arrPosts = this.state.posts;

    console.log("PostComponent: ", this.props);
    return (
      <div id="postsPanel">
        <div id="posts" bg="dark" variant="dark">
          {(arrPosts || []).map(item => (
            <CardComponent key={item.id} post={item} />
          ))}
        </div>
      </div>
    );
  }
}
export default PostsComponent;
