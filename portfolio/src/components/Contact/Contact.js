import 'bootstrap/dist/css/bootstrap.css';

import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { Form, Link } from "react-router-dom";


export default function Contacts() {
  return (
    <>
    
     <div className="container vh-100 d-flex align-items-center text-white">
      <h1 className="m-5 p-5">This is a contact page</h1>
      
      

      <div className="d-flex flex-column">
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="form--textArea" rows="6"></textarea>
        </div>
      </div>
      

    
       </div>

    <Container className="d-flex justify-content-between">
      <Link to="/movies"><Button variant="dark" size="lg">Back to films</Button></Link>
    </Container>
     
</>

  )
}

