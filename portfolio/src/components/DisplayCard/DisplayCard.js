import React from "react";
import Card from "react-bootstrap/Card"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function DisplayCard(props) {
  const { title, image, overview } = props
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500/${image}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {overview}
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
 
}