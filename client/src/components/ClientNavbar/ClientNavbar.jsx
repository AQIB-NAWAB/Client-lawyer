import React, { useState } from 'react'
import {HiOutlineBell} from "react-icons/hi2"
import {BsPersonCircle} from "react-icons/bs"
import "./ClientNavbar.css"
import JobPostModel from './JobPostModel'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../store/reducers/userReducer'
import { ToastContainer, toast } from 'react-toastify'

const ClientNavbar = () => {
  const[postJob,setPostJob]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { user, error, isAuthenticated } = useSelector((state) => state.User);

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
    <span className='job-btn'>
      <button onClick={()=>setPostJob(true)}><pre>Post a Job</pre></button>
      {postJob && <JobPostModel setPostJob={setPostJob}/>}
      </span>
    
</div>
<div className="nav_links">
    <ul>
        <li><HiOutlineBell fontSize="40px"/></li>
        <li><img src={user?.user?.profile_picture_image.url} style={{width:"60px",height:"60px",borderRadius:"50px",objectFit:"cover",border:"1px solid black"}}  onClick={()=>handleLogout()}/></li>
    </ul>
</div>
    </div> 
    </nav>
  )
}

export default ClientNavbar