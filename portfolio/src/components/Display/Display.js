import React,  { useEffect, useState }  from "react";
import DisplayCard from "../DisplayCard/DisplayCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./display.css"


const APIKey = process.env.REACT_APP_TMDB_API_KEY

// const URL = `https://api.themoviedb.org/3/movie?sort_by=popularity.desc?api_key=${APIKey}`

//URL endpoint which has API Key hidden. saved as a String datatype
const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&sort_by=popularity.desc&page=1`


function Display() { 

  //set the initial state of the display list as an empty array, which is the data type expected from the API call in useState hook below
  const [ displayList, setDisplayList ] = useState([])


  // useEffect hook to get data from API and save the data to state as an array
  useEffect(() => {
    fetch(URL) //fetch request from URL 
    .then((res) => res.json()) //converts results from the fetch request as json data
    .then((data) => setDisplayList(data.results)) //takes the converted json data and saves it in state as an array
    .catch((error) => console.log(error)) // console logs any error recieved from the fetch request
    }, [])  

  //logs the display list to the console to see what type of data has been recieved from the fetch request
  console.log(displayList)


  return (
    <>
      <Row xs={2} md={4} className="g-4">
        {displayList.map((movie, idx) => (
        <Col>
            <DisplayCard 
              title={movie.title}
              image={movie.backdrop_path}
              overview={movie.overview}
            />  
        </Col>
      ))}
    </Row>
  );
  </>
  )
}

export default Display