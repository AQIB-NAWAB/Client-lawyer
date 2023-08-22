import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App