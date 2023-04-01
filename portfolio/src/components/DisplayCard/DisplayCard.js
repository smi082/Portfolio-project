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
      className="bg-dark text-white justify-content-end"
      as="a" 
       
      onClick={handleClick} 
    >
    <Card.Img  src={`http://image.tmdb.org/t/p/w500/${image}`} alt="Card image" />
    </Card>
    <Overlay className="overlay"
        // style={{
        //   position: 'absolute',
        //   top: 0,
        //   bottom: 0,
        //   left: 0,
        //   right: 0,
        //   background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)',
        //   zIndex: 2,
        //   opacity: 0.8
        // }}
      />
  </div>

  )
}

