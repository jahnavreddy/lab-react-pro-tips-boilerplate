import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import {Routes,Route} from "react-router-dom";
import Forms from './components/Forms';
import About from "./components/About"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        {/* <Route path={"/"} element={<Navbar/>}/> */}
        <Route path={"/forms"} element={<Forms />}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
