import React, { Component } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import ProfileEditComponent from '../ProfileEditComponent/ProfileEditComponent';
import Moment from 'react-moment';

import '../styleProfiles.scss';

class ProfileDisplayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId:this.props.userId|| 1,
      objUser: {},
      goToEdit: false
    };

    this.handleRedirectEdit = this.handleRedirectEdit.bind(this);

  }

  handleRedirectEdit=(e)=>{
    this.setState({ 'goToEdit': true });
    console.log('handleRedirectEdit clicked');
    e.preventDefault();
  }

  getData() {
    console.log('this.props: ',this.props);
    console.log('data: ',this.data);
    // fetch('/posts/'+this.props.userId)
    // fetch('/users/'+this.state.userId)
    fetch('/users')
      .then(res => {
        // let data = res.json();
        return res.json(res);
      })
      .then(arrUsers => {
        console.log('this', this);
        const objUser = arrUsers.filter(x=>x.id===this.state.userId).pop();
        console.log("fetching objUser: ", objUser);
        this.setState({ objUser: objUser });
      });
  }

  componentDidMount() {
    this.getData();
  }


  render() {
    console.log('ProfileDisplayComponent.this.props: ', this.props);

    if(this.state.goToEdit){
      return <ProfileEditComponent
        userId={`${this.state.userId}`}
        objUser ={JSON.stringify(this.state.objUser)} />
    }

    const {id:userId, username, nameLast, nameFirst, email} = this.state.objUser;
    console.log('Card.objUser: ', this.state.objUser);

    // const description = objUser.description;
    // const image = objUser.image;

    let cardImage;
    let cardHeader;

    const name = this.state.objUser.nameFirst + ' ' + this.state.objUser.nameLast;
    cardHeader = <Card.Header className='cardHeader'>{name}</Card.Header>

    return (
      <div className='profilePage cardPanel' bg="dark" variant="dark">
        <h1>My Profile</h1>
        <Card className='card' style={{ width: '18rem' }}>
          {cardHeader}
          {cardImage}
          <Card.Body className='cardBody'>
            <Card.Title className='cardTitle'>{}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted cardSubtitle">
            <ul>
            <li>UserName: {this.state.objUser.username}</li>
            <li>Email: {this.state.objUser.username}</li>
            <li>{'Member Since: '}
              <Moment format='MM/DD/YYYY'>
                {this.state.objUser.created_at}
            </Moment>
            </li>
            </ul></Card.Subtitle>
            <Card.Text className='cardText'>
              * some random text should go here *
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardFooter'>
            <span>
              <Form>
              <Button onClick={this.handleRedirectEdit}>Edit</Button>
              </Form>
            </span>
            <span>
              {`Last Updated: `}
              <Moment format='MM/DD/YYYY HH:mm a'>
                {this.state.objUser.updated_at}
              </Moment>
            </span>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default ProfileDisplayComponent;