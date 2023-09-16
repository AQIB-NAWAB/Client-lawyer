import React from 'react'
import {HiOutlineBell} from "react-icons/hi2"
import {BsPersonCircle} from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/reducers/userReducer'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const LawyerNavbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>{
    dispatch(logoutUser())
toast.success("logout Successfully")
    navigate("/")

  }
  return (
    <nav>  
    <ToastContainer/>
    <div className="navContainer">

<div className="logo">
    <img src="/images/lawyer white.png" alt="" />
    
</div>
<div className="nav_links">
    <ul>
        <li><HiOutlineBell fontSize="40px"/></li>
        <li><BsPersonCircle className='navbar-person ' onClick={()=>handleLogout()}/></li>
    </ul>
</div>
    </div> 
    </nav>
  )
}

export default LawyerNavbar