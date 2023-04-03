import { Link } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"
import "./Homepage.css"

export default function HomePage() {
  return (
    <div className="container vh-100 d-flex flex-column align-items-center justify-content-around text-white">

      <h1>Welcome to YourMovie!</h1> 

      <Link to="/movies"><Button variant="dark" size="lg">Take me to trending Films</Button></Link>
    </div>
    
  )
}