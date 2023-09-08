import React from 'react'
import {HiOutlineBell} from "react-icons/hi2"
import {BsPersonCircle} from "react-icons/bs"
import "./ClientNavbar.css"

const ClientNavbar = () => {
  return (
    <nav>  
    <div className="navContainer">

<div className="logo">
    <img src="/images/lawyer white.png" alt="" />
    <span className='job-btn'><button><pre>Post a Job</pre></button></span>
    
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