import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css';
import HomePage from '../HomePage/HomePage';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path = "*" element={<HomePage/>} />  
      </Routes>

   </BrowserRouter>
    </>
  )
}
export default App;

// Could be nice to have a "Oops page"