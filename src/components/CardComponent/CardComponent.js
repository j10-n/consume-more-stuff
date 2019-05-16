import React, { Component } from "react";
import { Card,Form, formAction, Button } from 'react-bootstrap';
import { BrowserRouter, NavLink, Link,Route, Switch, Redirect, Prompt } from 'react-router-dom';
import ButtonRedirectComponent from '../ButtonComponents/ButtonRedirectComponent';
import PostDetailsPage from '../ButtonComponents/ButtonRedirectComponent';
import color from '../../scss/colors';
import './styleCard.scss';
class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // objCardData: this.props.objCardData,
      objCardData: {},
      goToDetails: false
    };
    this.handleGoToDetails = this.handleGoToDetails.bind(this);
  }


  // routeChange(){
  //   let path = `newPath`;
  //   this.props.history.push(path);
  // }

/*
  getData() {
    fetch("/posts")
      .then(res => {
        // let data = res.json();
        return res.json(res);
      })
      .then(arr => {
        console.log("body", arr);

        this.setState({ arrCardData: arr.data });
      });
  }

  componentDidMount() {
    this.getData();
  }*/
  componentDidMount(){
    this.state.objCardData = this.props.objCardData;
    this.setState({'goToDetails': false});
  }

  handleGoToDetails=(e)=>{
    console.log('handleGoToDetails clicked');
    e.preventDefault();
    this.setState({'goToDetails': true});
  }

  render() {

    if(this.state.goToDetails){
      return <Redirect to={{
        pathname: `/postDetails/${this.state.objCardData.id}`,
        state: {postId: this.state.objCardData.id} }} />
    }

    /*
    if(this.state.goToDetails){
      return <Redirect to={ `/postDetails/${this.state.objCardData.id}` } />
    } */

    // console.log('card: props: ', this.props);
    console.log('card: state: ', this.state);
    // const objCardData = this.props.objCardData;
    // console.log('objCardData: ',objCardData);
/*
    if(this.state.goToDetails){
      return <Redirect to={{
        path:`/postDetails/${this.state.objCardData.id}`,
        objCardData: this.state.objCardData
      }} />
    }
    *//*
    if(this.state.goToDetails){
      return <Redirect to={{
        path:`/postDetails/${this.state.objCardData.id}`
      }} />
    }*/


    // let { id, userId, genre, header, title, description, image} = this.state.objCardData;
    // let { id, userId, genre, header, title, description, image} = this.state.arrCardData;
    /*
    { idx:id, userIdx:userId, genre:genre, header:header, title:title, description:description, image:image} = this.state.arrCardData;*/

    let cardImage;
    let cardHeader;
    if (this.state.objCardData.image) {
      // console.log('Image: ',image);
      // image = image+"/171x180";
      cardImage = <Card.Img className='cardImage' variant="top" src={this.state.objCardData.image} alt="" className="rounded-circle cardImage" />
    }
    if (this.state.objCardData.header) {
      cardHeader = <Card.Header className='cardHeader'>{this.state.objCardData.header}</Card.Header>
    };


    return (
      <div className='cardObj' bg="dark" variant="dark">
        <Card className='card' style={{ width: '18rem', border: '1px solid red' }}>
          {cardHeader}
          {cardImage}
          <Card.Body className='cardBody'>
            <Card.Title className='cardTitle'>{this.state.objCardData.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted cardS">{this.state.objCardData.genre}</Card.Subtitle>
            <Card.Text className='cardText'>
              {this.state.objCardData.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardFooter'>
            <span>
              <Button onClick={this.handleGoToDetails}>Details</Button>
            </span>
            <span>
              UserId:{this.state.objCardData.userId}
            </span>
            <span className='recordId'>
              #{this.state.objCardData.id}
            </span>

          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default CardComponent;