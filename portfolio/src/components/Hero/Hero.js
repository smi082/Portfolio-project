import Card from 'react-bootstrap/Card';


function HeroImage(props) {
  const { image, title, overview } = props
  return (
    <Card className="bg-dark text-white hero">
      <Card.Img src={`http://image.tmdb.org/t/p/w500/${image}`}  alt="Card image" />
      <Card.ImgOverlay className="image--text">
        <Card.Title >{title}</Card.Title>
        <Card.Text >
        {overview}
        </Card.Text >

        {/* change below to a button */}
        <Card.Text >Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card> 
  )
  
}

export default HeroImage
    