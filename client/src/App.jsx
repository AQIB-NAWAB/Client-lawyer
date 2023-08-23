import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Client from './pages/Client/Client'
import Lawyer from './pages/Lawyer/Lawyer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/client' element={<Client/>} />
      <Route path='/lawyer' element={<Lawyer/>} />


    </Routes>
    <Footer/>
    </>
  )
}

export default App