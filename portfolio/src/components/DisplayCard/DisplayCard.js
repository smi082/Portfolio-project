import React from "react";
import Card from "react-bootstrap/Card"
import Overlay from "react-bootstrap/Overlay"


export default function DisplayCard(props) {
  const { title, image, tagline, functionProp } = props;

  const handleClick = () => {
    console.log(props.movie);
    functionProp(props.movie)
  }

  return (
    <div style={{ cursor: 'pointer', position: 'relative', }}>
    <Card 
      className="bg-dark text-white justify-content-end overlay"
      as="a" 
       
      onClick={handleClick} 
    >
    <Card.Img  src={`http://image.tmdb.org/t/p/w500/${image}`} alt="Card image" />
    
    </Card>
    
  </div>

  )
}

