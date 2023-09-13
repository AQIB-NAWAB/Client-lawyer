import React from 'react'
import { Link } from 'react-router-dom'

const LoginNavbar = () => {
  return (
    <nav>  
    <div className="navContainer">

<div className="logo">
    <img src="/images/lawyer white.png" alt="" />
</div>
<div className="nav_links">
    <ul>

        <li><Link to="/">Home</Link></li>

    </ul>
</div>
    </div> 
    </nav>
  )
}

export default LoginNavbar