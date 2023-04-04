import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";


//Component that is shown if the url path doesn;t match the three main pages of the application. Includes a button that routes the user back to the home page.
export default function PageNotFound() {
  return (
    <Container style={{textAlign: "center", height: "100vh", color: "white", paddingTop: "40%"}}>
      <h1>Oops, that page doesn't exist!</h1>
      <Link to="/"><Button variant="dark" size="lg" style={{marginTop: "40px"}}>Take me Home</Button></Link>
    </Container>
    
  )
}