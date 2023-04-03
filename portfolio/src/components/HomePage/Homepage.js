import { Link } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"
import "./Homepage.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm
} from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <div className="container vh-100 d-flex flex-column align-items-center justify-content-around text-white">

      <h1>Welcome to YourMovie!</h1> 
      <FontAwesomeIcon icon={faFilm} size="10x" />
      <Link to="/movies"><Button variant="dark" size="lg">Take me to trending Films</Button></Link>
    </div>
    
  )
}