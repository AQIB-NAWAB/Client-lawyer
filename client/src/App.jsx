import React, { useEffect } from 'react'
import {BrowserRouter  ,Routes,Route, useNavigate} from "react-router-dom"
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
import AdminPage from './pages/AdminPage/AdminPage'
import { toast } from "react-toastify";
import { useSelector,useDispatch } from 'react-redux'
import { clearErrors, loadUser } from './store/reducers/userReducer'
const App = () => {
  const {isAuthenticated,user,error}=useSelector(state=>state.User) 
  
  const dispatch=useDispatch()
  if(error){
   toast.error(error)
   dispatch(clearErrors())
  }
 useEffect(()=>{
   dispatch(loadUser())
 },[dispatch])


  return (
    <>
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Home />} />
        {isAuthenticated && user?.user?.role === 'client' && (
          <>
        <Route path="client" element={<Client />}  />

            <Route path="client/profile" element={<Client />} />
            <Route path="client/search" element={<Search />} />
            <Route path="client/myjobs" element={<MyJobs />} />
          </>
        )}
        {isAuthenticated && user?.user?.role === 'lawyer' && (
          <>
        <Route path="/lawyer" element={<Lawyer />}  />
            <Route path="lawyer/profile" element={<Lawyer />} />
            <Route path="lawyer/request" element={<ClientRequest />} />
            <Route path="lawyer/clients" element={<Clients />} />
          </>
        )}
        <Route path="lawyers-login" element={<LaywerLogin />} />
        <Route path="client-login" element={<ClientLogin />} />
        <Route path="lawyer-signUp" element={<LawyerSignUp />} />
        <Route path="client-signUp" element={<ClientSignUp />} />
        {isAuthenticated && user?.user?.role === 'admin' && (
          <Route path="admin" element={<AdminPage />} />
        )}
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App