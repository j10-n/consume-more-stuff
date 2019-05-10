import React, { Component } from "react";

import CardComponent from './CardComponent';
import '../scss/styles.scss';

class PostsComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const arrPosts = this.props.arrPosts;
    return (
      <div id='posts' bg="dark" variant="dark">
        {(arrPosts || []).map(item => (
          <CardComponent key={item.id} post={item} />
        ))}
      </div>
    );
  }
}
export default PostsComponent;