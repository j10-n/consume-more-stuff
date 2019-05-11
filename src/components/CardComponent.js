import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import '../scss/styles.scss';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, userId, genre, header, title, description, image} = this.props.post;

    let cardImage;
    let cardHeader;
    if (image) {
      cardImage = <Card.Img variant="top" src={image} alt="" className="rounded-circle cardImage" />
    }
    if (header) {
      cardHeader = <Card.Header className='cardHeader'>{header}</Card.Header>
    };
    return (
      <div className='cardObj' bg="dark" variant="dark">
        <Card className='card' style={{ width: '18rem', border: '1px solid red' }}>
          {cardHeader}
          {cardImage}
          <Card.Body className='cardBody'>
            <Card.Title className='cardTitle'>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted cardS">{genre}</Card.Subtitle>
            <Card.Text className='cardText'>
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer className='cardFooter'>
            <span>
              <button>Edit</button>
            </span>
            <span>
              UserId:{userId}
            </span>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
export default CardComponent;