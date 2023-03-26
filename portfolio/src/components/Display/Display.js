import React,  { useEffect, useState }  from "react";
import DisplayCard from "../DisplayCard/DisplayCard";


const APIKey = process.env.REACT_APP_MARVEL_API_KEY

console.log(APIKey)
const URL = `http://gateway.marvel.com/v1/public/characters?apikey=${APIKey}`

// const URL = `http://gateway.marvel.com/v1/public/characters/ts=tsgohere&apikey=${APIKey}&hash=1911ba2d8c9eac9eefde16e667a1d154`




function Display() { 

  const { displayList, setDisplayList } = useState([])

  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => setDisplayList([data.results]))
    .catch((error) => console.log(error))
}, [setDisplayList])  

  return (
    <>
     
    </>
   
  )
}

export default Display