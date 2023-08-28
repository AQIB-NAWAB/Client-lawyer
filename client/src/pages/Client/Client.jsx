import React from 'react'
import {BsPerson} from "react-icons/bs"
import {BiSearchAlt} from "react-icons/bi"
import {MdOutlinePersonSearch} from "react-icons/md"
import {PiPencilLight} from "react-icons/pi"
import "./Client.css"
import { Link } from 'react-router-dom'

const Client = () => {
  return (
  <div className='client-dash'>
    <div className="left-dashboard">
        <h3>Dashboard</h3>
        <div className="client-link">
        <ul>
        <li><Link to="/client/profile" className='bold'><BsPerson/>Profile</Link></li>
        <li><Link to="/client/search"><BiSearchAlt/>Search</Link></li>
        <li><Link to="/client/myjobs"><MdOutlinePersonSearch/>My Jobs</Link></li>
    </ul>
        </div>
    </div>
    <div className="right-dashboard">
      <div className="head">
        <h1><span className='person'><BsPerson /></span>*Client Name*<PiPencilLight className='pencil'/></h1>
      </div>
      <hr />
      <section className='dash-container'>
      <div className="detail-btn">
      <PiPencilLight className='pencil'/>
      <ul>
        <li>City: LAHROE</li>
        <li>Email: @hmail.com</li>
        <li>Phone: 0322000000</li>
        <li>Office: AL REHMAN GARDEN LAHORE</li>
      </ul>
    </div>
    <div className="description">
      <span className='header'><h1>DESCRIPTION:</h1><PiPencilLight className='pencil'/></span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet quasi eius accusamus aliquam obcaecati perspiciatis! Fugit nobis facere illo, recusandae eum rem quam quo hic dolorum, ex minus maxime.</p>
    </div>
    </section>

    </div>

  </div>
  )
}

export default Client