import 'bootstrap/dist/css/bootstrap.css';
import NavB from './components/Navbar/Navbar';
import './App.css';
import "./components/Display/display.css"

import Display from './components/Display/Display';
import Contacts from './components/Contact/Contact';
import HomePage from './components/HomePage/Homepage';
import PageNotFound from './components/PageNotFound/PageNotFound';


import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";



// created routes for all pages, and a path route if the page url does not match the three main pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="movies" element={<Display />} />
      <Route index path="/" element={<HomePage />} />
      <Route path="contact" element={<Contacts />}  />
      <Route path="*" element={<PageNotFound />} />
    </>
    
  )
)

export const App = () => {
  return (
    <>
      <NavB />
      <RouterProvider router={router} />
    </>
  );
};