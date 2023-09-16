import React, { useEffect, useState } from 'react'
import {HiOutlineBell} from "react-icons/hi2"
import {BsPersonCircle} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../store/reducers/userReducer'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import "./LawyerNavbar.css"
import { deleteAllNotifications, getAllNotifications } from '../../store/reducers/notificationReducer'
const LawyerNavbar = () => {
  const [showModal,setShowModal]=useState(false)
  const {notifications}=useSelector((state)=>state.Notification)

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>{
    dispatch(logoutUser())
toast.success("logout Successfully")
    navigate("/")

  }
  useEffect(()=>{
    dispatch(getAllNotifications())
  },[])
  return (
    <nav>  
    <ToastContainer/>
    <div className="navContainer">

<div className="logo">
    <img src="/images/lawyer white.png" alt="" />
    
</div>
<div className="nav_links">
    <ul>
    <span style={{position:"relative"}}>
{notifications?.notifications?.length>0 && <span className="number">
  {notifications?.notifications?.length}
</span>}
        <li onClick={()=>setShowModal(!showModal)}><HiOutlineBell fontSize="40px"/>
        
        </li>
        {
          notifications?.notifications?.length>0 && showModal ?<div className="notification_box">
          <div className="box">
            {
              notifications?.notifications.map(notice=>(
                <p className='notic' key={notice._id}>{notice.text}</p>
              ))
            }
          </div>
          <button onClick={()=>dispatch(deleteAllNotifications())} >Clear All</button>
          </div>:<></>
        }
    </span>
        
        <li><BsPersonCircle className='navbar-person ' onClick={()=>handleLogout()}/></li>
    </ul>
</div>
    </div> 
    </nav>
  )
}

export default LawyerNavbar