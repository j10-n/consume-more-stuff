import React, { Component } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect, Prompt } from 'react-router-dom';
import PostDetailsAddEditComponent from './../PostDetailsAddEditComponent/PostDetailsAddEditComponent';

// import '../../CardComponent/styleCard.scss';
import '../stylePosts.scss';

class PostDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objCardData: {},
      goToEdit: false,
      returnToList: false
    };
    // this.getData = this.getData.bind(this);
    this.handleRedirectEdit = this.handleRedirectEdit.bind(this);
    this.handleRedirectDelete = this.handleRedirectDelete.bind(this);
    this.handleRedirectReturnToList = this.handleRedirectReturnToList.bind(this);

  }


  handleRedirectEdit=(e)=>{
    this.setState({ 'goToEdit': true });
    console.log('handleRedirectEdit clicked');
    e.preventDefault();
  }

  handleRedirectDelete=(e)=>{
    // mark record for deletion
    this.setState({ 'objCardData.is_voided': true });

    this.setState({ 'returnToList': true });
    console.log('handleRedirectDelete clicked');
    e.preventDefault();
  }

  handleRedirectReturnToList=(e)=>{
    this.setState({ 'returnToList': true });
    console.log('handleRedirectReturnToList clicked');
    e.preventDefault();
  }


  getData(){
    console.log('-->this.props.location: ',this.props.location);
    // const postId = this.props.location.state.postId;
    const detailsRoute = this.props.location.pathname;
    fetch(detailsRoute)
      .then(res => res.json())
      .then(arr=>{
        const objCardData = arr.data.pop();
        // this.setState({postId: postId});
        this.setState({objCardData: objCardData});
        console.log('arr.data.pop(): ', objCardData);
      })
      .catch(e => console.log(e));
  }



  componentDidMount() {
    this.getData();
  }


render() {
  if(this.state.returnToList){
    return <Redirect to={{pathname:`/posts/${this.state.objCardData.userId}`}} />
  }
  // if(this.state.goToEdit){
  //   return <Redirect to={`/postDetails/Edit/${this.state.objCardData.id}`} />
  // }
  if(this.state.goToEdit){
    return <PostDetailsAddEditComponent mode='edit' postId={`${this.state.objCardData.id}`} />
  }

  let cardImage;
  let cardHeader;
  let cardTitle;
  let cardSubtitle;
  let cardHeaderField;
  let cardSubtitleField;
  let cardTitleField;
  // let description;

  if(this.state.objCardData.image){
    cardImage = <Card.Img variant="top"  src={this.state.objCardData.image} alt="" className="rounded-circle cardImage" />
  };

  if(this.state.objCardData.header){
    cardHeader = <Card.Header className='cardHeader'>{this.state.objCardData.header}</Card.Header>
  };

  if(this.state.objCardData.title){
    cardTitle = <Card.Title className='cardTitle'>{this.state.objCardData.title}</Card.Title>
  };

  if(this.state.objCardData.subtitle){
    cardSubtitle = <Card.Subtitle className='cardSubtitle mb-2 text-muted'>{this.state.objCardData.subtitle}</Card.Subtitle>
  };

  return (
    <div id='postDetailsPage' className='cardDetailsPanel' bg="dark" variant="dark">
        <h1>My Post</h1>
        <Card className='card' style={{ width: '18rem' }}>
          {cardHeader}
          {cardImage}
          <Card.Body className='cardBody'>
            {cardTitle}
            {cardSubtitle}
            <Card.Text className='cardText'>
              {this.state.objCardData.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardFooter'>
            <span>
              <Form className='flexRow'>
                <Button onClick={this.handleRedirectEdit}>Edit</Button>
                <Button onClick={this.handleRedirectDelete}>Delete</Button>
                <Button onClick={this.handleRedirectReturnToList}>Cancel</Button>
                </Form>
              </span>
            <span>
              #{this.state.objCardData.id}
            </span>
            <span>
              Account#:HI96734{this.state.objCardData.userId}
            </span>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default PostDetailsComponent;
