import React, { useEffect, useState } from 'react'
import {BsPerson} from "react-icons/bs"
import {LiaEnvelopeOpenTextSolid} from "react-icons/lia"
import {PiUsersThreeFill} from "react-icons/pi"
import { Link, useNavigate } from 'react-router-dom'
import "./ClientRequest.css"
import LawyerNavbar from '../LawyerNavbar/LawyerNavbar'
import ClientDetailModel from './ClientDetailModel'
import { useDispatch, useSelector } from 'react-redux'
import { getClientRequests } from '../../store/reducers/lawyerReducer'

const ClientRequest = () => {

  const { clientRequests,sentOffers,acceptedoffers,error,loading } = useSelector((state) => state.Lawyer);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [requests,setRequest]=useState([])

  const handleModalSelect = (request) => {
    setSelectedRequest(request);
    setShowModel(true);
  };
  

    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(getClientRequests());
      }, []);
      useEffect(()=>{
        setRequest(clientRequests?.requests)
        
            },[dispatch,navigate])  
            console.log({requests}) 
            


  return (
    <>
    <LawyerNavbar/>
  <div className='client-dash'>
    <div className="left-dashboard">
        <h3>Dashboard</h3>
        <div className="client-link">
        <ul>
        <li><Link to="/lawyer/profile"><BsPerson/>Profile</Link></li>
        <li><Link to="/lawyer/request" className='bold'><LiaEnvelopeOpenTextSolid/>Request</Link></li>
        <li><Link to="/lawyer/clients"><PiUsersThreeFill/>Clients</Link></li>
    </ul>
        </div>
    </div>
    <div className="right-request">
        <h1>Client Requests</h1>
        <section className='request-section'> 
        <div className="request-data">
            <div className="data-heads">
                <h3>Date</h3>
                <h3>Name</h3>
                <h3>Case Type</h3>
                <h3>Budget</h3>
            </div>
            <section className='scroll'>


{loading?<h4 style={{textAlign:"center",padding:"20px 0px"}}>Loading.....</h4>:clientRequests?.requests?.map((single_request)=>(
    <>

    
    <section className='request-content-section' key={single_request._id} onClick={() => handleModalSelect(single_request)}>
            <div className="request-content">
                <p>{single_request?.createdAt}</p>
                <p>{single_request?.client?.name}</p>
                <p>{single_request.case_type}</p>
                <p>{single_request.budget} PKR</p>
            </div>
            </section>
      </>
))}

           
 
            </section>
            
        </div>
        </section>
    </div>
    </div>
    {showModel && (
  <ClientDetailModel
    request={selectedRequest}
    setShowModel={() => setShowModel(false)}
  />
)}
    </>
  )}

    export default ClientRequest