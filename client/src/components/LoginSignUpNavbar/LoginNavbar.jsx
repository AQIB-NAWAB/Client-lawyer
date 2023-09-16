import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import {BiLogInCircle} from "react-icons/bi"
import { logoutUser } from '../../store/reducers/userReducer'
const LoginNavbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { user, error, isAuthenticated } = useSelector  ((state) => state.User);

  const handelLogout=()=>{
dispatch(logoutUser())
navigate("/")
  }

  return (
    <nav>  
    <div className="navContainer">

<div className="logo">
    <img src="/images/lawyer white.png" alt="" />
</div>
<div className="nav_links">
    <ul>

        <li><Link to="/">Home</Link></li>
        {isAuthenticated && <li onClick={()=>handelLogout()}><BiLogInCircle fontSize={35}/></li>}

    </ul>
</div>
    </div> 
    </nav>
  )
}

export default LoginNavbar