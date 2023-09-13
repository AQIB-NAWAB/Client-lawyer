import React from 'react'
import {BsPerson} from "react-icons/bs"


const LawyerProfileModel = () => {
  return (
    <div className="lawyer-profile-model">
    <div className="head">
      <h1><span className='person'><BsPerson /></span>*Lawyer Name</h1>
    </div>
    <hr />
    <section className='dash-container'>
    <div className="detail-btn">
    <ul>
      <li>Hourly Rate: </li>
      <li>City: </li>
      <li>Phone: </li>
      <li>Office: </li>
    </ul>
  </div>
  <section className='lawyer-detail'>
  <div className="description">
    <span className='header'><h1>DESCRIPTION:</h1></span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet quasi eius accusamus aliquam obcaecati perspiciatis! Fugit nobis facere illo, recusandae eum rem quam quo hic dolorum, ex minus maxime.</p>
  </div>
  <div className="past-work">
      <span className='header'><h1>Past Work</h1></span>
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
      <span className='header'><h1>Education</h1></span>
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
      <span className='header'><h1>Certificates</h1></span>
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
      <span className='header'><h1>Services</h1></span>
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
  )
}

export default LawyerProfileModel