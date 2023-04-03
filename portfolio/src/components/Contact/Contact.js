import 'bootstrap/dist/css/bootstrap.css';

import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Form, Link } from "react-router-dom";

//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


export default function Contacts() {
  return (
    <>

    <h1 className="pt-5 p-5 text-white text-center" style={{height: "200px"}}>We'd love to hear from you!</h1>
     <div className="container d-flex flex-column vh-100 d-flex align-items-center text-white">

      <div className="d-flex">
        <div className="d-flex flex-column m-3 justify-content-center">
          <div class="mb-3">
            <label for="fName--input" class="form-label">First Name</label>
            <input type="name" class="form-control" id="lName--input" placeholder="John Smith" />
          </div>
          <div class="mb-3">
            <label for="lName--input" class="form-label">last Name</label>
            <input type="name" class="form-control" id="lName--input" placeholder="John Smith" />
          </div>
          <div class="mb-5">
            <label for="email--input" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email--input" placeholder="name@example.com" />
          </div>
        </div>

        <div className="d-flex flex-column m-3">
          <div class="mb-3">
            <label for="text--input" class="form-label">Thoughts...?</label>
            <textarea class="form-control" id="form--input" rows="6"></textarea>
          </div>
          <Button as="input" type="submit" value="Submit" variant="dark" />{' '}
        </div>
      </div>
      

  <div className="m-5 p-3">

    <h3>Connect with us on Social media</h3>

    <div class="social-container text-center p-2">
      <a href="https://www.youtube.com/"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} style={{color: "#f60404",}} fade size="4x" />
      </a>
      <a href="https://www.facebook.com/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} style={{color: "#4267B2",}}  bounce size="4x" />
      </a>
      <a href="https://www.instagram.com/"
        className="instagram social gradient">
        <FontAwesomeIcon className="" icon={faInstagram} flip size="4x" />
      </a>
      <a href="https://www.twitter.com/"
        className="instagram social">
        <FontAwesomeIcon icon={faTwitter} shake size="4x" />
      </a>

    </div>
      <Container className="text-center p-5">
        <Link to="/movies"><Button variant="dark" size="lg">Back to films</Button></Link>
      </Container>
  </div>
     
       </div>

   
     
</>

  )
}

