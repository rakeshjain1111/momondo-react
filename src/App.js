import React from 'react'
import Home from './Components/Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Header from './Components/Component/Header';
import 'font-awesome/css/font-awesome.min.css'
import { FaPlaneDeparture } from "react-icons/fa";

function App() {
  return (
<BrowserRouter>
<Header/>
<div>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/a' element={<h1>Home</h1>}></Route>
    <Route path='/b' element={<h1>Home</h1>}></Route>
    <Route path='/c' element={<h1>Home</h1>}></Route>
    <Route path='/d' element={<h1>Home</h1>}></Route>
    <Route path='/e' element={<h1>Home</h1>}></Route>
  </Routes>
  </div>
</BrowserRouter>
 
  )
}

export default App