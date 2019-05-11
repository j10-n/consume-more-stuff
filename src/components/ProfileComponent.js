import React, { Component } from "react";
import { Card, Button, Form } from 'react-bootstrap';
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
    cardHeader = <Card.Header className='cardHeader'>{name}</Card.Header>
    // };
    return (
      <div className='profilePage cardPanel' bg="dark" variant="dark">
        <h1>My Profile</h1>
        <Card className='card' style={{ width: '18rem' }}>
          {cardHeader}
          {cardImage}
          <Card.Body className='cardBody'>
            <Card.Title className='cardTitle'>UserName: {username}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">Email: {email}</Card.Subtitle>
            <Card.Text className='cardText'>
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardFooter'>
            <span>
              <Form>
                <Button type='submit' formaction="/users/{{userId}}/edit" formmethod="GET">Edit</Button>
              </Form>
            </span>
            <span>
              Account#:HI96734{userId}
            </span>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default ProfileComponent;