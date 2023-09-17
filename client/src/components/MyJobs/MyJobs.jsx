import React, { useEffect, useState } from 'react'
import {BsPerson} from "react-icons/bs"
import {BiSearchAlt} from "react-icons/bi"
import {MdOutlinePersonSearch} from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom'
import ClientNavbar from '../../components/ClientNavbar/ClientNavbar'
import "./MyJobs.css"
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getAllReturnOffers, getAllSentRequest } from '../../store/reducers/clientReducer'
import { acceptOffer } from '../../store/reducers/clientReducer'
import { toast } from 'react-toastify'





const MyJobs = () => {
  const { sentRequests,returnOffers,isAccepted,error,loading } = useSelector((state) => state.Client);


    const [request,setRequest]=useState([])
    const [offers,setoffers]=useState([])
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(getAllSentRequest());
        dispatch(getAllReturnOffers());
      }, [dispatch,navigate,isAccepted]);
    useEffect(()=>{
setRequest(sentRequests?.sentRequests)
setoffers(returnOffers?.returnOffers)

    },[dispatch,navigate,isAccepted])

    const handleConsult=(id)=>{
        dispatch(acceptOffer({id}))
    }
    useEffect(() => {
        if (isAccepted) {
            toast.success("Congratulations For Further... ")
        }
        if(error){
            toast.error(error)
        }
        dispatch(clearErrors())
      }, [error,dispatch ,isAccepted]);
  return (
    <>
    <ClientNavbar/>
  <div className='client-dash'>
    <div className="left-dashboard">
        <h3>Dashboard</h3>
        <div className="client-link">
        <ul>
        <li><Link to="/client/profile" ><BsPerson/>Profile</Link></li>
        <li><Link to="/client/search"><BiSearchAlt/>Search</Link></li>
        <li><Link to="/client/myjobs" className='bold'><MdOutlinePersonSearch/>My Jobs</Link></li>
    </ul>
        </div>
    </div>
    <div className="right-dashboard">
      <div className="head">
        <h1 className='my-jobs-h1'>My Jobs</h1>
      </div>
      <hr />
    <section className='my-jobs-container'>
        <div className="my-jobs">
            <div className="left-myjobs">
                <h1>Send Requests</h1>
                <section className='case-box-container'>
                { loading?<p>Loading...</p>:
                sentRequests.sentRequests?.map((single_request)=>(
                    <div className="case-box" key={single_request._id}>
                    <span>
                        <p className='case-heading'>{single_request.case_description}</p>
                    </span>
                    <span className='more-details'>
                        <span><p className='bold-head'>City: </p><p>{single_request?.lawyer_info?.city}</p></span>
                        <span><p className='bold-head'>Province: </p><p>{single_request?.lawyer_info?.province}</p></span>
                        <span><p className='bold-head'>Budget: </p><p>{single_request.budget}Rs.</p></span>
                    </span>
                </div>
                ))
                }




               


                </section>
            </div>
            <div className="right-myjobs">
                <h1>Return Offers</h1>
                <section className='offer-box-container'>
                {
                    loading?<p>Loading...</p>:returnOffers?.clientReturnOffers?.map((single_offer)=>(
                        <div className="offer-box" key={single_offer._id}>
                    <span className='offer-box-headings'>
                        <p>{single_offer?.lawyer_id?.name}</p>
                        <p>{single_offer?.lawyer_id?.practice_area}</p>
                        <p>{single_offer?.lawyer_id?.city}</p>
                        <p>{single_offer?.lawyer_id?.province}</p>
                    </span>
                    <span className='offer-description-span'>
                        <p className='offer-box-p'>Offer Description:</p>
                        <p>{single_offer.description}</p>
                    </span>
                    <span className='offer-box-footer'>
                        <span><p className='offer-box-f'>Rate:</p><p>{single_offer.rate}Rs.</p></span>
                        {
                            single_offer?.accepted==true?
                            <button style={{cursor:"not-allowed",backgroundColor:"gray",color:"white"}} >Accepted</button>:

                        <button onClick={()=>handleConsult(single_offer._id)}>Consult</button>
                        }
                        
                    </span>
                </div>
                    ))
                }




               







                </section>
            </div>
        </div>
    </section>

    </div>

  </div>
  </>
  )
}


export default MyJobs;