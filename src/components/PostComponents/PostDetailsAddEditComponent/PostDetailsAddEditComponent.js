import React, { Component } from "react";
import Moment from 'react-moment';
import { Card, Button, Form, Table, ButtonGroup  } from 'react-bootstrap';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect, Prompt } from 'react-router-dom';
import TableComponent from '../../TableComponents/TableComponent/TableComponent';
import InputOnChangeComponent from '../../InputOnChangeComponent';
import '../../CardComponent/styleCard.scss';
import '../../TableComponents/styleTables.scss';
import '../stylePosts.scss';


class PostDetailsAddEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objCardData: {
        id: '',
        userId: '',
        header: '',
        title: '',
        genreId:'',
        image:'',
        updated_at:'',
        is_voided: false,
        description:''
      },
      mode:'',
      returnToDetails: false
    };
    // this.state.title = this.props.title;
    this.handleUpdateData = this.handleUpdateData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }



/*
  handleOnSubmitUpdate=(event) =>{
    // this.setState({title: event.target.value});

    // lastly navigate

    // handleSubmit = (user) => {
      saveUser(user)
        .then(() => this.setState(() => ({
          returnToDetails: true
        })))
    }
    render() {
      if (this.state.toDashboard === true) {
        return <Redirect to={`/posts/${this.props.id}`} />
      }
    }*/

  handleChange=(e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
      updated_on: Date.now()
    });
    console.log(`${e.target.name} changed: ...${this.state.objCardData.updated_on}`);
    console.log('timestamp: ', Date.now());
  }


  handleCancel=(e)=>{
    this.setState({'returnToDetails': true});
    console.log('handleCancel clicked');
    e.preventDefault();
  }

  handleUpdateData(e) {
    e.preventDefault();
    console.log('handleUpdateData clicked');
    fetch("/posts")
      .where('id', this.props.id)
      .then(res => {
        // let data = res.json();
        return res.json(res);
      })
      .then(objPost => {
        console.log("post", objPost);

        this.setState({ objPost: objPost });
      });
  }

  getData(e){
    // e.preventDefault();
    console.log('-->this.props: ',this.props);
    const postId = this.props.postId;
    const detailsRoute = "/postDetails/" + postId;
    console.log('detailsRoute: ',detailsRoute);
    fetch(detailsRoute)
      .then(res => res.json())
      .then(arr=>{
        const objCardData = arr.data.pop();
        // this.setState({postId: postId});
        this.setState({mode: this.props.mode});
        this.setState({objCardData: objCardData});
        console.log('arr.data.pop(): ', objCardData);
      })
      .catch(e => console.log(e));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log('inside PostDetailsAddEditComponent: ');
    // if(this.state.returnToDetails){
    //   return <Redirect to={`/postDetails/${this.state.objCardData.id}`} />
    // }
    // if(this.state.returnToDetails){
    //   return <PostDetailsComponent to={`/postDetails/${this.state.objCardData.id}`} />
    // }
    if(this.state.returnToDetails){
      return <Redirect to={{
        pathname: `/postDetails/${this.state.objCardData.id}`,
        state: {postId: this.state.objCardData.id} }} />
    }
    let cardImage;
    let cardHeader_title;
    let cardTitle_genreId;

    if(this.state.objCardData.image){
      cardImage = <Card.Img variant="top"  src={this.state.objCardData.image} alt="* Insert Image here *" className="rounded-circle cardImage" />
    };

    if(this.state.objCardData.title){
      cardHeader_title = <Card.Header className='cardHeader'>{ this.state.objCardData.title ||'- Insert title here -'}</Card.Header>
    };

    if(this.state.objCardData.genreId){
      cardTitle_genreId = <Card.Title className='cardTitle'>{this.state.objCardData.genreId || '- insert genreId here -'}</Card.Title>
    };

    /*
    if(this.state.objCardData.subtitle || this.state.objCardData.genre){
      cardSubtitle = <Card.Subtitle className='cardSubtitle mb-2 text-muted'>{this.state.objCardData.subtitle || this.state.objCardData.genre ||'- empty -'}</Card.Subtitle>
    }; */

    let h1 = 'Add New Post';
    if(this.state.mode==='edit'){
      h1='Edit Post';
    }

    return(
      <div id='postDetailsAddEditPage' className='cardDetailsPanel' bg="dark" variant="dark">
        <h1>{h1}</h1>
        <Card className='card' style={{ width: '18rem' }}>
          {cardHeader_title}
          {cardImage}
          <Card.Body className='cardBody'>
            {cardTitle_genreId}<br />
            <Card.Text className='cardText'>
              {this.state.objCardData.description || 'Insert text here'}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardFooter'>
            <span>
              Last updated: <Moment format='MM/DD/YYYY HH:mm a'>{this.state.objCardData.updated_at}</Moment>
            </span>
            <span>
              Account#:HI96734{this.state.objCardData.userId}
            </span>
          </Card.Footer>
        </Card>
        <br />
        <Form className='flexColumn'>
        <Table id='tablePostDetailsAddEdit' className='tableVertical' striped bordered hover size='lg'>
          <thead className='tableHeading'>
          <tr>
            <th>Card<br />Component</th>
            <th>Field<br />Name</th>
            <th>Value<br />Displayed</th>
            <th>Edit<br />Value</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>Heading</th>
            <th>Title</th>
            <td>{ this.state.objCardData.title ||'- empty -'}</td>
            <td>
            <input
              name="title"
              defaultValue={this.state.objCardData.title }
              onChange={this.handleChange} />
            </td>
          </tr>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <td>{this.state.objCardData.genreId || '- empty -'}</td>
            <td>
            <input
              name="genreId"
              defaultValue={this.state.objCardData.genreId}
              onChange={this.handleChange} />
            </td>
          </tr>
          <tr>
            <th>Text</th>
            <th>Description</th>
            <td>{this.state.objCardData.description || '- empty -'}</td>
            <td>
            <input
              name="description"
              defaultValue={this.state.objCardData.description}
              onChange={this.handleChange} />
            </td>
          </tr>
        </tbody>
        </Table>
        </Form>
        <Form className='flexColumn'>
          <div className='buttonGroup'>
            <Button onClick={this.handleUpdateData}>Update</Button>
            <Button onClick={this.handleCancel}>Cancel</Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default PostDetailsAddEditComponent;