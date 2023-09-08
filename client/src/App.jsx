import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Client from './pages/Client/Client'
import Lawyer from './pages/Lawyer/Lawyer'
import ClientRequest from './components/ClientRequest/ClientRequest'
import LaywerLogin from './pages/LawyerLogin/LaywerLogin'
import ClientLogin from './pages/ClientLogin/ClientLogin'
import LawyerSignUp from './pages/LawyerSignUp/LawyerSignUp'
import ClientSignUp from './pages/ClientSignUp/ClientSignUp'
import Search from './components/Search/Search'
import MyJobs from './components/MyJobs/MyJobs'
import Clients from './components/Clients/Clients'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/client' element={<Client/>} />
      <Route path='/client/profile' element={<Client/>} />
      <Route path='/client/search' element={<Search/>} />
      <Route path='/client/myjobs' element={<MyJobs/>} />
      <Route path='/lawyer' element={<Lawyer/>} />
      <Route path='/lawyer/profile' element={<Lawyer/>} />
      <Route path='/lawyer/request' element={<ClientRequest/>} />
      <Route path='/lawyer/clients' element={<Clients/>} />
      <Route path='/lawyers-login' element={<LaywerLogin/>} />
      <Route path='/client-login' element={<ClientLogin/>} />
      <Route path='/lawyer-signUp' element={<LawyerSignUp/>} />
      <Route path='/client-signUp' element={<ClientSignUp/>} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App