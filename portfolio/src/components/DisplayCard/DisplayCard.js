import React from "react";
import Card from "react-bootstrap/Card"



export default function DisplayCard(props) {
  // destrucutured properties to improve code readability
  const {image, functionProp, title } = props;


  //handleClick function listens for a click event and passes the movie object as a parameter to the parent element.
  const handleClick = () => {
    console.log(props.movie);
    functionProp(props.movie)
  }

  // conditionally renders the poster image if it has been passed as a prop or not. returns an error message if the image property doesn't exist on the movie object.
  return (
    <div className="overlay" style={{ cursor: 'pointer', position: 'relative', }}>
      {image ?
    <Card 
      className="bg-dark text-white justify-content-end overlay"
      as="a" 
      onClick={handleClick} 
    >
    <Card.Img  src={`http://image.tmdb.org/t/p/w500/${image}`} alt="Card image" />
    </Card>
    :
    // makes the returned error message unclickable by changing the pointerEvents to none
    <p className="text-white d-flex text-center mt-5" style={{pointerEvents: "none"}}>{`Sorry, the photo for ${title} isn't available.`}</p>
    }
  </div>

  )
}

