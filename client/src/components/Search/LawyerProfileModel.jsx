import React, { useState } from 'react'
import {BsPerson, BsZoomIn} from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai";
import SendLawyerRequestModel from './SendLawyerRequestModel';



const LawyerProfileModel = ({setShowProfileModel}) => {
  const[sendLawyerRequestModel , setSendLawyerRequestModel]= useState(false)
  const closeModel=()=>{
   return setShowProfileModel(false)
  }
  return (
    <div className="lawyer-profile-model">
    <div className="head">
      <h1><span className='person'><BsPerson /></span>*Lawyer Name</h1>
   
         <AiFillCloseCircle className='model-close' onClick={()=>closeModel()}/>
    </div>
    <hr />
    <section className='dash-container'>
    <div className="model-details">
    <ul>
      <li>Hourly Rate: <span>sa</span></li>
      <li>City: lahore</li>
      <li>Phone: 0202020202</li>
      <li>Office: <span>kkksasad dsa d asdas</span></li>
      <span>
         <button className='send-request-btn' onClick={()=>setSendLawyerRequestModel(true)}>Send Request</button>
         {sendLawyerRequestModel && <SendLawyerRequestModel setSendLawyerRequestModel={setSendLawyerRequestModel}/>}
         </span>
    </ul>
  </div>
  <section className='lawyer-detail'>
  <div className="description">
    <span className='header'><h1>DESCRIPTION:</h1></span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet quasi eius accusamus aliquam obcaecati perspiciatis! Fugit nobis facere illo, recusandae eum rem quam quo hic dolorum, ex minus maxime.</p>
  </div>
  <div className="model-past-work">
      <span className='header'><h1>Past Work</h1></span>
  <div className="model-works-container">
      <span className="work">
      <p>Case Date: aadasd</p>
      <p>Case Type: Family sase</p>
      <p>Court: Lahore high court</p>
      </span>
 
  </div>
  </div>
  <div className="model-past-work">
      <span className='header'><h1>Education</h1></span>
  <div className="model-works-container">
      <span className="work">
      <p>Qualification: Bchelors in information technolody</p>
      <p>Institute: university of education township lahore</p>
      <p>Graduation Year: 2022-2026</p>
      </span>

  </div>
  </div>

  <div className="model-past-work">
      <span className='header'><h1>Certificates</h1></span>
  <div className="model-works-container">
      <span className="work">
      <p>Institute:</p>
      <p>Graduation Year:</p>
      </span>


  </div>
  </div>

  <div className="model-past-work">
      <span className='header'><h1>Services</h1></span>
  <div className="model-works-container">
      <span className="work">
      <p>Lawyer</p>
      </span>


  </div>
  </div>

  </section>
  </section>

  </div>
  )
}

export default LawyerProfileModel