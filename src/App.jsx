import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Templates/Home';
import About from './Templates/About';
import OurServices from './Templates/OurServices';
import Enquiry from './Includes/Enquiry';
import Login from './Includes/Login';
import Header from './Templates/Header'
import Error from './Templates/Error'
import Syllabus from './Templates/Syllabus'

function App() {
const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

       <Header/> 
       
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='services' element={<OurServices/>}></Route>
        <Route path='enquiry' element={<Enquiry/>}></Route>
        <Route path='signin' element={<Login/>}></Route>
        <Route path='*'  element={<Error/>}></Route>
        <Route path='syllabus/*' element={<Syllabus/>}></Route>
      </Routes>
\\

      </BrowserRouter>
    </>
  )
}

export default App;
