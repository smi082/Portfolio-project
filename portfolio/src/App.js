import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import NavB from './components/Navbar/Navbar';
import './App.css';
import "./components/Display/display.css"
import Carousel from "./components/Hero/Hero"
import Display from './components/Display/Display';





function App() {
  return (
    <>
      <NavB />
      {/* <Carousel /> */}
      <Display />
    </>
  )
}


export default App;
