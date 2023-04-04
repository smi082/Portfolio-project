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
  const [ movieYear, setMovieYear ] = useState(2023) // set inital state as integer representing current year
  const [ genreID, setGenreID ] = useState({
    id: "",
    name: "Genre"
  }) // set inital state as an object, with both keys as string datatype

  
  const year = (new Date()).getFullYear() // creates a new date object and extracts only the current year using the getFullYear method, and saves the 4 digit year as an integer inside the year variable.
  const years = Array.from(new Array(75), (val, index) => year - index) // creates a new array with a length of 75 integers, and counts backwards from the current year, and saves the values if the array into the years variable.


  //function that takes the value of an event and  saves the value as an integer in the selectedYear variable, and then sets the state of moveYear with the returned result 
  const changeYear = (e) => {
    let target = e.target
    let selectedYear = parseInt(target.getAttribute("value"));
    setMovieYear(selectedYear)
    console.log(movieYear)
  }
// sets the state of the current screen width, I am keeping track of this so I can conditionally render some props on the HeroImage Component inside the render
  const [ screenSize, setScreenSize ] = useState() 
// added an event listener to the window, listening for a resize event, and calling the  changeScreenSize function to set the state of the screenSize to an integer equal to the width fo the screen
  useEffect(() => {
    window.addEventListener("resize", changeScreenSize)

  },)
  const changeScreenSize = () => {
    setScreenSize(window.innerWidth)
  }
  
  
  // useEffect hook to get data from API and save the data to state as an array of objects
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


    // this hook sets the genreList used  to populate the drop down menu in the handleSelect function below
    useEffect(() => {
      fetch(genresURL) //fetch request from URL 
      .then((res) => res.json()) //converts results from the fetch request as json data
      .then((data) => setGenreList(data.genres)
      )}, [])

  //logs the display list to the console to see what type of data has been recieved from the fetch request
  // console.log(displayList)
  // console.log(heroImage)
  // console.log(genreList)
 

  // function that takes an event and saves the event target inside the target variable. The data returned from the api has a name and id of the genre, and I need the name of the genre to populate the dropdown list and the url needs the value of the ID to make the api call.
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
     {/* Ternary operator to conditionally render the overview of the movie, only appearing on screens greater than 768px, using the state of screenSize */}
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
      

    {/* Added inline styling here */}
    {/* added a ternary to check if the genreId.name is still the default state of "Genre", and display the word genre if it is, or the current state of genreID.name if it isn't */}
    <Container fluid className="dropdown--section" style={{height: '150px', display: 'flex', justifyContent: 'space-between', width: "92%", alignItems: "flex-end", color: "white"}}>
        <h3 style={{alignItems: "left"}}> {genreID.name === "Genre" ? `Trending movies > ` : `Top 20 ${genreID.name} movies >`}</h3>
        
        <Dropdown >
          <Dropdown.Toggle variant="dark" className="p-3 ms-3">
            {genreID.name}
          </Dropdown.Toggle>


        {/* Used the map() array method map over the genreList and return the result as a new array that populates the dropdown list with the name of each genre */}
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
            {/* Used the map() array method to map over the years array and return the result as items of the the dropdown list */}
          <Dropdown.Menu variant="dark" id="dropdown-basic" >
          { years.map((year, index) => {
              return <Dropdown.Item value={year} key={index} onClick={changeYear}>{year}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
    </Container>
      
      {/* uses the map() array method to map over the current state of the displayList and return the result, and passing the props of every iteration to the DisplayCard component */}
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