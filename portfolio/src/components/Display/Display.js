import React,  { useEffect, useState }  from "react";
import DisplayCard from "../DisplayCard/DisplayCard";
import HeroImage from "../Hero/Hero"
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./display.css"


const APIKey = process.env.REACT_APP_TMDB_API_KEY

// const URL = `https://api.themoviedb.org/3/movie?sort_by=popularity.desc?api_key=${APIKey}`

//URL endpoint which has API Key hidden. saved as a String datatype
// const moviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&sort_by=popularity.desc&page=1`
// const moviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genre=${genreID}`



const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}&language=en-US`

function Display() { 

  //set the initial state of the display list as an empty array, which is the data type expected from the API call in useState hook below
  const [ displayList, setDisplayList ] = useState([])
  const [ heroImage, setHeroImage ] = useState([])
  const [ genreList, setGenreList ] = useState([])
  const [ genreID, setGenreID ] = useState(0)
  
  
  const moviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genre=${genreID}`

  // useEffect hook to get data from API and save the data to state as an array
  useEffect(() => {
    fetch(moviesURL) //fetch request from URL 
    .then((res) => res.json()) //converts results from the fetch request as json data
    .then((data) => {
      setDisplayList(data.results)
      setHeroImage(data.results[1])
    })
    
     //takes the converted json data and saves it in state as an array
    .catch((error) => console.log(error)) // console logs any error recieved from the fetch request
    }, [])  


    useEffect(() => {
      fetch(genresURL) //fetch request from URL 
      .then((res) => res.json()) //converts results from the fetch request as json data
      .then((data) => setGenreList(data.genres)
        
      
      )}, [])

  //logs the display list to the console to see what type of data has been recieved from the fetch request
  console.log(displayList)
  console.log(genreList)

  const handleChange = (e) => {
    setGenreID(e.target.value)
    console.log(genreID)
  }


  return (
    <>
      <HeroImage
        image={heroImage.backdrop_path}
        title={heroImage.title}
        overview={heroImage.overview}
      />
      
      

      
      <Container fluid style={{height: '250px', display: 'flex', justifyContent: 'space-between', width: "80%", alignItems: "baseline"}}>
        
          <h6 className="">{`POPULAR MOVIES >`}</h6>


      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Genre
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {genreList.map((genre) => {
          // handle change needs fixing
          return <Dropdown.Item href="#/action-1" onChange={(e) => handleChange(e)} value={genre.id}>{genre.name}</Dropdown.Item>
        })}
      </Dropdown.Menu>
      </Dropdown>

        
      </Container>


      <Row xxs={2} xs={5} className="g-5  grid--section">
        {displayList.map((movie, idx) => (
        <Col>
            <DisplayCard 
              title={movie.title}
              image={movie.poster_path}
              // overview={movie.overview}
              // tagline={movie.tagline}
            />  
        </Col>
      ))}
    </Row>
  
  </>
  )
}

export default Display