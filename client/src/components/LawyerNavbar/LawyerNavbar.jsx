import React from 'react'
import {HiOutlineBell} from "react-icons/hi2"
import {BsPersonCircle} from "react-icons/bs"

const LawyerNavbar = () => {
  return (
    <nav>  
    <div className="navContainer">

<div className="logo">
    <img src="/images/lawyer white.png" alt="" />
    
</div>
<div className="nav_links">
    <ul>
        <li><HiOutlineBell fontSize="30px"/></li>
        <li><BsPersonCircle className='navbar-person'/></li>
    </ul>
</div>
    </div> 
    </nav>
  )
}

export default LawyerNavbar