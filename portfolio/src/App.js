import 'bootstrap/dist/css/bootstrap.css';
import NavB from './components/Navbar/Navbar';
import './App.css';
import "./components/Display/display.css"
import Display from './components/Display/Display';
import Contact from './components/Contact/Contact';
import HomePage from './components/HomePage/Homepage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


        
    //   * <NavB />
    //   <Display />
    // </> */


function App() {
  return (
  //  <>
  
  //  <Display />
  //  </>
    <BrowserRouter>
     <NavB />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Display />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
      
  )
}


export default App;
