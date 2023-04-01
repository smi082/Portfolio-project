import Card from 'react-bootstrap/Card';


function HeroImage(props) {
  const { image, title, overview, tagline } = props
  return (
    <Card className="bg-dark text-white hero">
      <Card.Img src={`http://image.tmdb.org/t/p/w1280/${image}`}  alt="Card image" />
      <Card.ImgOverlay className="image--text">
        <Card.Title >{title}</Card.Title>
        <Card.Text>{tagline}</Card.Text> 
        <Card.Text >
        {overview}
        </Card.Text >

        {/* change below to a button */}
        
      </Card.ImgOverlay>
    </Card> 
  )
  
}

export default HeroImage
    