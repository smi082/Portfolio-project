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
  const [ genreID, setGenreID ] = useState({
    id: "",
    name: "Genre"
  })
  

  // useEffect hook to get data from API and save the data to state as an array
  useEffect(() => {
    const moviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=${genreID.id}`

    fetch(moviesURL) //fetch request from URL 
    .then((res) => res.json()) //converts results from the fetch request as json data
   
    .then((data) => {
      setHeroImage(data.results[1])
      return data.results; // pass the list of movies to the next then block
    })
    .then((movies) => {
      setDisplayList(movies); // update the display list with the new list of movies
    })
    
     //takes the converted json data and saves it in state as an array
    .catch((error) => console.log(error)) // console logs any error recieved from the fetch request
    }, [genreID])  


    // this hook sets the genreList used in to populate the drop down menu in the handleSelect function below
    useEffect(() => {
      fetch(genresURL) //fetch request from URL 
      .then((res) => res.json()) //converts results from the fetch request as json data
      .then((data) => setGenreList(data.genres)
      )}, [])

  //logs the display list to the console to see what type of data has been recieved from the fetch request
  // console.log(displayList)
  // console.log(heroImage)
  // console.log(genreList)
 
  const handleSelect = (e) => {
    let target = e.target
    let selectedID = parseInt(target.getAttribute("value"));
    let selectedName = target.getAttribute("name")
    setGenreID({id: selectedID, name: selectedName})
    
  }

  const selectHeroImage = (movie) => {
    setHeroImage(movie)
  }

  return (
    <>
      <HeroImage
        image={heroImage.backdrop_path}
        title={heroImage.title}
        overview={heroImage.overview}
        tagline={heroImage.tagline}
      />
      
    
    <Container fluid className="dropdown--section" style={{height: '150px', display: 'flex', justifyContent: 'space-between', width: "80%", alignItems: "flex-end", color: "white"}}>
        <h3> {genreID.name === "Genre" ? `Trending movies > ` : `Top 20 ${genreID.name} movies >`}</h3>
        <Dropdown >
          <Dropdown.Toggle >
          {genreID.name}
        </Dropdown.Toggle>
          <Dropdown.Menu  variant="success" id="dropdown-basic" >
            {genreList.map((genre) => {
              // handle change needs fixing {/*href={`#/${genre.id}`} */ }
              return <Dropdown.Item onClick={handleSelect} value={genre.id} name={genre.name}>{genre.name}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
    </Container>
      
      <Row xxs={2} xs={5} className="g-5  grid--section">
        {displayList.map((movie, idx) => (
        <Col>
          <DisplayCard functionProp={() => selectHeroImage(movie)}
            title={movie.title}
            image={movie.poster_path}
            overview={movie.overview}
            tagline={movie.tagline}
          />  
        </Col>
      ))}
    </Row>

  </>
  )
}

export default Display