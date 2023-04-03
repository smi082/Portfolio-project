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
  const [ displayList, setDisplayList ] = useState([]) // set initial state as empty array
  const [ heroImage, setHeroImage ] = useState([]) // set initial state as empty array
  const [ genreList, setGenreList ] = useState([]) // set initial state as empty array
  const [ movieYear, setMovieYear ] = useState(2023) // set inital state as current year
  const [ genreID, setGenreID ] = useState({
    id: "",
    name: "Genre"
  }) // set inital state as an object, with both keys as string datatype

  
  const year = (new Date()).getFullYear()
  const years = Array.from(new Array(75), (val, index) => year - index)

  const changeYear = (e) => {
    let target = e.target
    let selectedYear = parseInt(target.getAttribute("value"));
    setMovieYear(selectedYear)
    console.log(movieYear)
  }
// sets the state of the current screen width, I am keeping track of this so I can conditionally render some props on the HeroImage Component inside the render
  const [ screenSize, setScreenSize ] = useState() 

  useEffect(() => {
    window.addEventListener("resize", changeScreenSize)

  },)
  const changeScreenSize = () => {
    setScreenSize(window.innerWidth)
    
  }
  
   //START POINT URL: /discover/movie?with_genres=18&primary_release_year=2014
  // useEffect hook to get data from API and save the data to state as an array
  useEffect(() => {
    const moviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=${genreID.id}&primary_release_year=${movieYear}`

    fetch(moviesURL) //fetch request from URL 
    .then((res) => res.json()) //converts results from the fetch request as json data
   
    .then((data) => {
      setHeroImage(data.results[0])
      return data.results; // pass the list of movies to the next then block
    })
    .then((movies) => {
      setDisplayList(movies); // update the display list with the new list of movies
    })
    
     //takes the converted json data and saves it in state as an array
    .catch((error) => console.log(error)) // console logs any error recieved from the fetch request
    }, [genreID, movieYear])  


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

  //takes a movie object as a paramater and passes the movie object to the setHeroImage function, setting the state of heroImage to the passed movie object
  const selectHeroImage = (movie) => {
    setHeroImage(movie)
  }

  return (
    <>
     {/* Ternary operator to conditionally render the overview of the movie, only appearing on screens greater than 768px */}
    {screenSize >= 768 ?
      <HeroImage
        image={heroImage.backdrop_path}
        title={heroImage.title}
        overview={heroImage.overview}
        tagline={heroImage.tagline}
      />
      :
      <HeroImage
        image={heroImage.backdrop_path}
        title={heroImage.title}
        tagline={heroImage.tagline}
      />
    }
      

    
    <Container fluid className="dropdown--section" style={{height: '150px', display: 'flex', justifyContent: 'space-between', width: "92%", alignItems: "flex-end", color: "white"}}>
        <h3 style={{alignItems: "left"}}> {genreID.name === "Genre" ? `Trending movies > ` : `Top 20 ${genreID.name} movies >`}</h3>
        
        <Dropdown >
          <Dropdown.Toggle variant="dark" className="p-3 ms-3">
            {genreID.name}
          </Dropdown.Toggle>

        <Dropdown.Menu  variant="dark" id="dropdown-basic" >
            {genreList.map((genre) => {
              return <Dropdown.Item onClick={handleSelect} value={genre.id} name={genre.name}>{genre.name}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown >
          <Dropdown.Toggle variant="dark" className="p-3 ms-3">
            {movieYear}
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark" id="dropdown-basic" >
          { years.map((year, index) => {
              return <Dropdown.Item value={year} key={index} onClick={changeYear}>{year}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
    </Container>
      
    <Row className="g-5  grid--section">
      {displayList.map((movie, idx) => (
      <Col xs={6} md={4} lg={3} xl={2} >  
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