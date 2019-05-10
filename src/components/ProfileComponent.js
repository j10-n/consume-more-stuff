import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import '../scss/styles.scss';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('ProfileComponent.this.props: ', this.props);
    const objUser = this.props.objUser;
    console.log('Card.objUser: ', objUser);
    const userId = objUser.id;
    const username = objUser.username;
    const nameLast = objUser.nameLast;
    const nameFirst = objUser.nameFirst;
    const email = objUser.email;
    // const description = objUser.description;
    // const image = objUser.image;

    let cardImage;
    let cardHeader;
    let description;
    // if(image){
    //   cardImage = <Card.Img variant="top"  src={image} alt="" className="rounded-circle" />
    // }
    // if(header){
    const name = nameFirst + ' ' + nameLast;
    cardHeader = <Card.Header>{name}</Card.Header>
    // };
    return (
      <div className='profilePage card' bg="dark" variant="dark">
        <h1>Profile Page</h1>
        <Card style={{ width: '18rem' }}>
          {cardHeader}
          {cardImage}
          <Card.Body>
            <Card.Title>UserName: {username}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Email: {email}</Card.Subtitle>
            <Card.Text>
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>UserId:{userId}</Card.Footer>
        </Card>
      </div>
    );
  }
}
export default ProfileComponent;