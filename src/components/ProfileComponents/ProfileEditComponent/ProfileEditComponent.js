import React, { Component } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import ProfileDisplayComponent from '../ProfileDisplayComponent/ProfileDisplayComponent';
import Moment from 'react-moment';

import '../styleProfiles.scss';

class ProfileEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId:this.props.userId,
      objUser: {},
      returnToProfile: false
    };
    this.handleRedirectToProfile = this.handleRedirectToProfile.bind(this);
  }

  handleRedirectToProfile=(e)=>{
    this.setState({ 'returnToProfile': true });
    console.log('handleRedirectToProfile clicked');
    e.preventDefault();
  }



  getData() {
    console.log('this.props: ',this.props);
    console.log('data: ',this.data);
    // fetch('/posts/'+this.props.userId)
    // fetch('/users/'+this.state.userId)
    const userId = this.props.userId;
    console.log('userId: ', userId);
    const objUser = JSON.parse(this.props.objUser);
    this.setState({objUser: objUser});
    // console.log('this.props.objUser: ', JSON.parse(objUser));
    const profileRoute = `/users/${userId}`;
    // const profileRoute = `/users`;
    console.log('profileRoute: ', profileRoute);
    /*
    fetch(profileRoute)
      .then(res => {
        console.log('res: ', res);
        return res.json();
      })
      .then(arrUsers => {
        console.log('arrUsers', arrUsers);
        const objUser = arrUsers.filter(x=>x.id===this.state.userId).pop();
        console.log("fetching objUser: ", objUser);
        this.setState({ objUser: objUser });
      });
      */
  }

  componentDidMount() {
    this.getData();
  }


  render() {
    console.log('ProfileEditComponent.this.props: ', this.props);
    console.log('ProfileEditComponent.this.props.objUser: ', this.props.objUser);

    if(this.state.returnToProfile){
      return <ProfileDisplayComponent userId={`${this.state.userId}`} />
    }



    let cardImage;
    let cardHeader;

    const name = this.state.objUser.nameFirst + ' ' + this.state.objUser.nameLast;
    cardHeader = <Card.Header className='cardHeader'>{name}</Card.Header>

    return (
      <div className='profilePage cardPanel' bg="dark" variant="dark">
        <h1>Edit My Profile</h1>
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
              <Button onClick={this.handleRedirectUpdate}>Save</Button>
              <Button onClick={this.handleRedirectToProfile}>Cancel</Button>
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
        <br />
      </div>

    );
  }
}
export default ProfileEditComponent;