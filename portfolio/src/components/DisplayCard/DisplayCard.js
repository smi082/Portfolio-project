import React from "react";
import Card from "react-bootstrap/Card"


export default function DisplayCard(props) {
  const { title, image, tagline } = props
  return (
  
    <Card className="bg-dark text-white justify-content-right">
    <Card.Img  src={`http://image.tmdb.org/t/p/w500/${image}`} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {tagline}
      </Card.Text>
      {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
    </Card.ImgOverlay>
  </Card>
  )
 
}