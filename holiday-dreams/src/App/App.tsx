import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import HomePage from '../HomePage/HomePage';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path = "*" element={<HomePage/>} />  
      </Routes>
      <Footer/>

   </BrowserRouter>
    </>
  )
}
export default App;

// Could be nice to have a "Oops page"