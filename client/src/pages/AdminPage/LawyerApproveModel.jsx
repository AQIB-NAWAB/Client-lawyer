import React, { useState } from 'react'

const LawyerApproveModel = ({setShowApproveModel}) => {
    const cancel=()=>{
        setShowApproveModel(false)
    }
    const [status,setStatus]=useState("")
   const handelUpdate=()=>{
    alert(status)
   }
  return (
    <div className="request-wrap">
    <div className='request-detail-container'>
        <div className="request-left-detail">
            <p>Lawyer Profile</p>
            <p>Name : Qamar</p>
            <p>Hourly Rate : 20$</p>
            <p>Practice Area : Family law</p>
            <p>Description :</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit excepturi error autem perferendis, hic, voluptatem quam quidem magni velit possimus, doloremque nihil similique provident. Tenetur quis soluta sequi alias?</p>
        </div>
        <div className="request-right-detail-p">
            <p>License image :</p>
            <p>Profile image :</p>
            <p>Cnic :</p>

        <div className="update-dropdown">
            
        <span>
              <p>Update Status:</p>
              <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="city1">Select</option>
                <option value="Approve">Approve</option>
                <option value="Pending">Pending</option>
                <option value="Reject">Reject</option>
              </select>
        </span>
            
        </div>    

            <span className='btn-send-offer'>
                <button className='send-btn' onClick={()=>handelUpdate()}>Update</button>
                <button className='cancel-btn-lawyer-model' onClick={()=>cancel()}>Cancel</button>
            </span>

        </div>
    </div>
    </div>
  )
}

export default LawyerApproveModel