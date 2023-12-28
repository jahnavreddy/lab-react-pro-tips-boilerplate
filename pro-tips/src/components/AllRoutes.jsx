import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from './PageNotFound';
import Navbar from './Navbar';

export default function AllRoutes() {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </div>
  )
}
