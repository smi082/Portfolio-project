import 'bootstrap/dist/css/bootstrap.css';
import NavB from './components/Navbar/Navbar';
import './App.css';
import "./components/Display/display.css"


// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Display from './components/Display/Display';
import Contacts from './components/Contact/Contact';
import HomePage from './components/HomePage/Homepage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
      <Route path="movies" element={<Display />} />
      <Route index path="/" element={<HomePage />} />
      <Route path="contact" element={<Contacts />}  />
    </>
    
  )
  )
// function App() {


// );



//   return (
//   //  <>
//   //  <NavB />
//   //  <Display />
//   //  </>
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/" element={<HomePage />} />
//     //     <Route path="/movies" element={<Display />} />
//     //     <Route path="/contact" element={<Contact />} />
//     //   </Routes>
//     // </BrowserRouter>
//     <>
//       <NavB />
//       <RouterProvider router={router} />
//     </>
    
//   )
// }


// export default App;

export const App = () => {
  return (
    <>
    <NavB />
    <RouterProvider router={router} />
    </>
  );
};