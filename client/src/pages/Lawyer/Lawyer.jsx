import React from 'react'
import {BsPerson} from "react-icons/bs"
import { FaPlus } from 'react-icons/fa'
import {LiaEnvelopeOpenTextSolid} from "react-icons/lia"
import {PiUsersThreeFill} from "react-icons/pi"
import {PiPencilLight} from "react-icons/pi"
import { Link } from 'react-router-dom'
import "./Lawyer.css"
import LawyerNavbar from '../../components/LawyerNavbar/LawyerNavbar'

const Lawyer = () => {
  
  return (
    <>
    <LawyerNavbar/>
  <div className='client-dash'>
    <div className="left-dashboard">
        <h3>Dashboard</h3>
        <div className="client-link">
        <ul>
        <li><Link to="/lawyer/profile" className='bold'><BsPerson/>Profile</Link></li>
        <li><Link to="/lawyer/request"><LiaEnvelopeOpenTextSolid/>Request</Link></li>
        <li><Link to="/lawyer/clients"><PiUsersThreeFill/>Clients</Link></li>
    </ul>
        </div>
    </div>
    <div className="right-dashboard">
      <div className="head">
        <h1><span className='person'><BsPerson /></span>*Lawyer Name*<PiPencilLight className='pencil'/></h1>
      </div>
      <hr />
      <section className='dash-container'>
      <div className="detail-btn">
      <PiPencilLight className='pencil'/>
      <ul>
        <li>Hourly Rate: </li>
        <li>City: </li>
        <li>Email: </li>
        <li>Phone: </li>
        <li>Office: </li>
      </ul>
    </div>
    <section className='lawyer-detail'>
    <div className="description">
      <span className='header'><h1>DESCRIPTION:</h1><PiPencilLight className='pencil'/></span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet quasi eius accusamus aliquam obcaecati perspiciatis! Fugit nobis facere illo, recusandae eum rem quam quo hic dolorum, ex minus maxime.</p>
    </div>
    <div className="past-work">
        <span className='header'><h1>Past Work</h1><FaPlus className='pencil'/></span>
    <div className="works-container">
        <span className="work">
        <p>Case Date:</p>
        <p>Case Type:</p>
        <p>Court:</p>
        </span>


        <span className="work">
        <p>Case Date:</p>
        <p>Case Type:</p>
        <p>Court:</p>
        </span>
    </div>
    </div>
    <div className="past-work">
        <span className='header'><h1>Education</h1><FaPlus className='pencil'/></span>
    <div className="works-container">
        <span className="work">
        <p>Qualification:</p>
        <p>Institute:</p>
        <p>Graduation Year:</p>
        </span>


        <span className="work">
        <p>Qualification:</p>
        <p>Institute:</p>
        <p>Graduation Year:</p>
        </span>
    </div>
    </div>

    <div className="past-work">
        <span className='header'><h1>Certificates</h1><FaPlus className='pencil'/></span>
    <div className="works-container">
        <span className="work">
        <p>Institute:</p>
        <p>Graduation Year:</p>
        </span>


        <span className="work">
        <p>Institute:</p>
        <p>Graduation Year:</p>
        </span>


    </div>
    </div>

    <div className="past-work">
        <span className='header'><h1>Services</h1><FaPlus className='pencil'/></span>
    <div className="works-container">
        <span className="work">
        <p></p>
        <p></p>
        </span>


    </div>
    </div>

    </section>
    </section>

    </div>

  </div>
  </>
  )
}

export default Lawyer