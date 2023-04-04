import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container style={{textAlign: "center", height: "100vh", color: "white", paddingTop: "40%"}}>
      <h1>Oops, that page doesn't exist!</h1>
      <Link to="/"><Button variant="dark" size="lg" style={{marginTop: "40px"}}>Take me Home</Button></Link>
    </Container>
    
  )
}