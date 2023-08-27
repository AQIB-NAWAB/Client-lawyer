import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>  
    <div className="navContainer">

<div className="logo">
    <img src="/images/lawyer white.png" alt="" />
</div>
<div className="nav_links">
    <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/lawyers-login">For Lawyers</Link></li>
        <li><Link to="/client-login">Login</Link></li>


    </ul>
</div>
    </div> 
    </nav>
  )
}

export default Navbar