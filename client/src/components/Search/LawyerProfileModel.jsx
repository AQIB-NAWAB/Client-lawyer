import React, { useState } from 'react'
import {BsPerson, BsZoomIn} from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai";
import SendLawyerRequestModel from './SendLawyerRequestModel';



const LawyerProfileModel = ({setShowProfileModel,selectedLawyer}) => {
  const[sendLawyerRequestModel , setSendLawyerRequestModel]= useState(false)
  const closeModel=()=>{
   return setShowProfileModel(false)
  }
  return (
    <div className="lawyer-profile-model">
    <div className="head">
      <h1>
        <img src={selectedLawyer?.profile_picture_image?.url} style={{width:"100px",height:"100px",borderRadius:"50px",objectFit:"cover"}} alt={selectedLawyer?.name} />
      {selectedLawyer?.name}</h1>
   
      {
        window.innerWidth>"500" &&
        <span>
         <button className='send-request-btn' onClick={()=>setSendLawyerRequestModel(true)}>Send Request</button>
         {sendLawyerRequestModel && <SendLawyerRequestModel setSendLawyerRequestModel={setSendLawyerRequestModel} selectedLawyer={selectedLawyer}/>}
         </span>
      }
         <AiFillCloseCircle className='model-close' onClick={()=>closeModel()}/>
    </div>
    <hr />
    <section className='dash-container'>
    <div className="model-details">
    <ul>
      <li>Hourly Rate: <span>{selectedLawyer?.hourly_rate}</span></li>
      <li>Province: {selectedLawyer?.province}</li>
      <li>City: {selectedLawyer?.city}</li>

      {
        window.innerWidth<="500" &&
        <span>
         <button className='send-request-btn' onClick={()=>setSendLawyerRequestModel(true)}>Send Request</button>
         {sendLawyerRequestModel && <SendLawyerRequestModel setSendLawyerRequestModel={setSendLawyerRequestModel} selectedLawyer={selectedLawyer}/>}
         </span>
      }
    </ul>
  </div>
  <section className='lawyer-detail'>
  <div className="description">
    <span className='header'><h1>DESCRIPTION:</h1></span>
    <p>{selectedLawyer.description}</p>
  </div>
  <div className="model-past-work">
      <span className='header'><h1>Past Work</h1></span>
  <div className="model-works-container">
      {
        selectedLawyer?.past_work?.map(single=>(
          <span className="work">
      <p>Case Date: {single.case_date}</p>
      <p>Case Type: {single.case_type}</p>
      <p>Court: {single.court}</p>
      </span>
        ))
      }
 
  </div>
  </div>
  <div className="model-past-work">
      <span className='header'><h1>Education</h1></span>
  <div className="model-works-container">
      {
        selectedLawyer?.education?.map(single=>(
          <span className="work" key={single._id}>
      <p>Qualification: {single.qualification}</p>
      <p>Institute: {single.institute}</p>
      <p>Graduation Year: {single.graduation_year}</p>
      </span>
        ))
      }

  </div>
  </div>

  <div className="model-past-work">
      <span className='header'><h1>Certificates</h1></span>
  <div className="model-works-container">
      
     {
      selectedLawyer?.certificates?.map(single=>(
        <span className="work " key={single._id}>
      <p>Institute : {single.institute}</p>
      <p>Graduation Year:{single.graduation_year} </p>
      </span>

      ))
     }


  </div>
  </div>

  <div className="model-past-work">
      <span className='header'><h1>Services</h1></span>
  <div className="model-works-container">
    {
      selectedLawyer?.services?.map(single=>(
        <span className="work " key={single._id}>
      <p>{single.service}</p>
      </span>
      ))
    }


  </div>
  </div>

  </section>
  </section>

  </div>
  )
}

export default LawyerProfileModel