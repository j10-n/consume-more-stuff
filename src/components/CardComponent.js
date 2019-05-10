import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import '../scss/styles.scss';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    console.log('Card.post: ', post);
    const id = post.id;
    const userId = post.userId;
    const genre = post.genre;
    const header = post.header;
    const title = post.title;
    const description = post.description;
    const image = post.image;

    let cardImage;
    let cardHeader;
    if (image) {
      cardImage = <Card.Img variant="top" src={image} alt="" className="rounded-circle" />
    }
    if (header) {
      cardHeader = <Card.Header>{header}</Card.Header>
    };
    return (
      <div className='card' bg="dark" variant="dark">
        <Card style={{ width: '18rem' }}>
          {cardHeader}
          {cardImage}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>
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
export default CardComponent;