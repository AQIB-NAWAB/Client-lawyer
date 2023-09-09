import React, { useState } from 'react'
import {HiOutlineBell} from "react-icons/hi2"
import {BsPersonCircle} from "react-icons/bs"
import "./ClientNavbar.css"
import JobPostModel from './JobPostModel'

const ClientNavbar = () => {
  const[postJob,setPostJob]=useState(false)
  return (
    <nav>  
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
        <li><BsPersonCircle className='navbar-person'/></li>
    </ul>
</div>
    </div> 
    </nav>
  )
}

export default ClientNavbar