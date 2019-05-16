import React, { Component } from "react";
import { Card, Button, Form, Table, ButtonGroup  } from 'react-bootstrap';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect, Prompt } from 'react-router-dom';

import '../styleTables.scss';
import TableHeaderComponent from "../TableHeaderComponent";

class TableEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objCardData: {
      header: '',
      genre:'',
      title: 'initial',
      subtitle:'',
      image:'',
      description:''
      }
    };
    // this.state.title = this.props.title;
    this.updateData = this.updateData.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  /*
  handleClick(event){
    console.log('handleClick');
  }

  getData(postId) {
    this.state.arrDataPosts
      .filter(x=> x.id===postId)
      .then(arr => {
        console.log("body", arr);

        this.setState({ arrCardData: arr.data });
      });
  }
  */
  updateData=(e)=>{
    e.preventDefault();
    console.log('test');
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    // let {  userId, genre:cardHeaderField, header:cardSubtitleField, title:cardTitleField, description, image} = this.state.arrCardData;
    //let {  title:cardTitleField} = this.state.arrCardData;
    console.log('this.props.title', this.props.title);
    let cardTitleField = this.state.title;
    let mode = this.props.mode || 'edit';
    // let { id, userId, genre:cardHeaderField, header:cardSubtitleField, title:cardTitleField, description, image} = this.state.arrCardData;
    console.log('inside PostDetailsComponent: ', cardTitleField);

    let cardImage;
    let cardHeader;
    let cardTitle = 'Insert Title here';
    let cardSubtitle = 'Insert subtitle here';
    let genre;
    let image = 'x';
    let cardHeaderField = 'Insert header here';
    let cardSubtitleField;

    if(image){
      cardImage = <Card.Img variant="top"  src={image} alt="* Insert Image here *" className="rounded-circle cardImage" />
    };

    if(cardHeaderField){
        cardHeader = <Card.Header className='cardHeader'>{cardHeaderField || '- empty -'}</Card.Header>
    };

    if(cardTitleField){
      cardTitle = <Card.Title className='cardTitle'>{this.state.title || '- empty -'}</Card.Title>
    };

    if(cardSubtitleField){
      cardSubtitle = <Card.Subtitle className='cardSubtitle mb-2 text-muted'>{cardSubtitleField || '- empty -'}</Card.Subtitle>
    };

   console.log('test: ');
    let h1 = 'Add New Post';
    if({mode}==='edit'){
      h1='Edit Post';
    }
    return(
      <div id='postDetailsPage' className='cardDetailsPanel' bg="dark" variant="dark">
        <h1>{h1}</h1>
        <Card className='card' style={{ width: '18rem' }}>
          {cardHeader}
          {cardImage}
          <Card.Body className='cardBody'>
            {cardTitle}
            {cardSubtitle}
            <Card.Text className='cardText'>
              {this.state.title || 'Insert text here'}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardFooter'>
            <span>

            </span>
            <span>
              Account#:HI96734{this.state.title}
            </span>
          </Card.Footer>
        </Card>
        <br />
        <Form>
        <Table>
          <TableHeaderComponent {arrList:['aaa','bbb']}/>
        </Table>

        <Table id='tablePostDetailsAddEdit' striped bordered hover size='lg'>
          <thead>
          <tr>
            <th>Card<br />Component</th>
            <th>Field<br />Name</th>
            <th>Value<br />Displayed</th>
            <th>Edit<br />Value</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Title</th>
              <td>{this.state.title || '- empty -'}</td>
              <td>
                <input
                  name="title"
                  defaultValue={this.state.title}
                  onChange={this.updateField} />
              </td>
            </tr>
            </tbody>
          </Table>
        </Form>
      </div>
    );
    /*
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
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardFooter'>
            <span>

            </span>
            <span>
              Account#:HI96734{userId}
            </span>
          </Card.Footer>
        </Card>
        <br />
        <Form>
        <Table id='tablePostDetailsAddEdit' striped bordered hover size='lg'>
          <tr>
            <th>Card<br />Component</th>
            <th>Field<br />Name</th>
            <th>Value</th>
          </tr>
            <tr>
              <th>Header</th>
              <td>
                <input
                  name='header'
                  defaultValue={cardHeaderField}
                  onChange={this.updateField} />
              </td>
            </tr><tr>
              <th>Title</th>
              <td><input value={cardTitleField}/></td>
              <td>
                <input
                  name='header'
                  defaultValue={cardHeaderField}
                  onChange={this.updateField} />
              </td>
            </tr><tr>
              <th>Subtitle</th>
              <td><input value={cardSubtitleField}/></td>
              <td>
                <input
                  name='header'
                  defaultValue={this.state.cardHeaderField}
                  onChange={this.updateField} />
              </td>
            </tr><tr>
              <th>Image</th>
              <td><input value={image}/></td>
              <td>
                <input
                  name='header'
                  defaultValue={cardHeaderField}
                  onChange={this.updateField} />
              </td>
            </tr><tr>

              <th>Genre</th>
              <td>
                <input
                  name='genre'
                  defaultValue={genre}
                  onChange={this.updateField} />
              </td>
            </tr><tr>
              <th>Description</th>
              <td>
                <textarea
                  name='description'
                  defaultValue = {description}
                  rows='5'
                  cols='40'
                  onChange={this.updateField} >
                </textarea>
              </td>
            </tr><tr>
              <td colSpan='2' className='buttonRow'>
                  <Button type='submit' formAction="/posts/{userId}" formMethod="GET">Save</Button>
                  <Button type='submit' formAction="/posts/{userId}/save" formMethod="GET">Delete</Button>
                  <Button type='submit' formAction="/posts/{userId}/delete" formMethod="GET">Cancel</Button>
              </td>
            </tr>
          </Table>
        </Form>
      </div>
    );
    */
  }
}
export default TableEditComponent;