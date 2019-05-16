import React, { Component } from "react";

import CardComponent from '../../CardComponent/CardComponent';
import '../stylePosts.scss';
import '../../CardComponent/styleCard.scss';

class PostsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId:this.props.userId || 1,
      arrPosts: []
    };
  }

  getData() {
    console.log('this.props: ',this.props);
    console.log('data: ',this.data);
    // fetch('/posts/'+this.props.userId)
    fetch(`/posts/${this.state.userId}`)
      .then(res => {
        // let data = res.json();
        console.log('posts.res: ', res);
        // return res.json(res);
        return res.json();
      })
      .then(arr => {
        const arrPosts = arr.data;
        console.log("fetching res.json(): ", arr);
        console.log("fetching arrPosts: ", arrPosts);
        this.setState({ arrPosts: arrPosts });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    // let arrPosts = this.props.arrPosts;
    const arrPosts = this.state.arrPosts;

    console.log('inside PostsComponent');
    return (
      <div id='postsPanel'>
        <h1>My Posts</h1>
        <div className='posts' bg="dark" variant="dark">
          {(arrPosts || []).map((item,idx) => (
            <CardComponent key={`${idx}_${item.id}`} objCardData={item} userId={this.state.userId} />
          ))}
        </div>
      </div>
    );
  }
}
export default PostsComponent;