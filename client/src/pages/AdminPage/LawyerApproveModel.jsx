import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, upadteStatus } from '../../store/reducers/adminReducer'
import { toast } from 'react-toastify'

const LawyerApproveModel = ({lawyer,setShowApproveModel}) => {
    const cancel=()=>{
        setShowApproveModel(false)
    }
    const [status,setStatus]=useState("")
    const dispatch=useDispatch()
   const handelUpdate=()=>{
    dispatch(upadteStatus({id:lawyer._id,status}))
    window.location.reload()
   }


  return (
    <div className="request-wrap">
    <div className='request-detail-container'>
        <div className="request-left-detail">
            <p>Lawyer Profile</p>
            <p>Name : {lawyer?.name}</p>
            <p>Hourly Rate : {(lawyer?.hourly_rate)?lawyer?.hourly_rate:0} pkr</p>
            <p>Practice Area : {lawyer?.practice_area}</p>
            <p>Description :</p>
            <p>{lawyer?.description}</p>
        </div>
        <div className="request-right-detail-p">
            <p>License image : <a href={lawyer?.lawyer_license_image.url} target='_blank'>open</a></p>
            <p>Profile image : <a href={lawyer?.profile_picture_image.url} target='_blank'>open</a></p>
            <p>Cnic : <a href={lawyer?.lawyer_cnic_image.url} target='_blank'>open</a></p>

        <div className="update-dropdown">
            
        <span>
              <p>Update Status:</p>
              <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="">Select</option>
                <option value="approve">Approve</option>
                <option value="pending">Pending</option>
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