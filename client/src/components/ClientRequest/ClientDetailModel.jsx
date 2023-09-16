import React, { useState } from 'react'
import ClientRequest from './ClientRequest'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { sendOffer } from '../../store/reducers/lawyerReducer'
import {AiOutlineClose} from "react-icons/ai"
const ClientDetailModel = ({request,setShowModel}) => {
  const showMsg =()=>{
     setShowModel(false)

  }
  const [description,setDescription]=useState("")
  const [price,setPrice]=useState(0)
const dispatch=useDispatch()
  const sendOfferToClient=()=>{
    dispatch(sendOffer({client_request_id:request?._id,client_id:request.client.clientId,description,rate:price}))
    toast.success("Offer Send Successfuly ")
  }
  return (
    <div className="request-wrap" >
    <div className='request-detail-container' style={{position:"relative"}} >
    <AiOutlineClose fontSize={22} style={{cursor:"pointer",position:"absolute",top:"10px",right:"20px"}} onClick={()=>setShowModel(false)}/>
        <div className="request-left-detail">
            <p>Client Request</p>
            <p>Job Status : {request.status}</p>
            <p>Name : {request.client.name}</p>
            <p>Budget : {request.budget}pkr</p>
            <p>Case Type : {request.case_type}</p>
            <p>Case Description :</p>
            <p>{request.case_description}</p>

        </div>
        <div className="request-right-detail">
            <p>Send Offer</p>
            <p>Describe Offer:</p>
            <span className='describe-offer'><textarea name="" id="" cols="30" rows="5" value={description} onChangeCapture={(e)=>setDescription(e.target.value)}></textarea></span>
            <p>Hourly Rate : <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} className='rate-h'/></p>
            <span className='btn-send-offer'>
            {request.status=="closed"?<p style={{fontSize:"18px",border:"none",color:"red",borderRadius:"3px" }}>Sorry this Job is  Closed</p>:<>
            <button className='send-btn' onClick={()=>sendOfferToClient()}>Send</button>
                <button className='cancel-btn' onClick={()=>showMsg()}>Cancel</button>
            </>}
                
            </span>

        </div>
    </div>
    </div>
  )
}

export default ClientDetailModel