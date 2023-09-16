
import React, { useEffect, useState } from 'react'
import {BsPerson} from "react-icons/bs"
import {LiaEnvelopeOpenTextSolid} from "react-icons/lia"
import {PiUsersThreeFill} from "react-icons/pi"
import { Link, useNavigate } from 'react-router-dom'
import LawyerNavbar from '../../components/LawyerNavbar/LawyerNavbar'
import "./Clients.css"

import ViewProfileModel from './ViewProfileModel'

const Clients = () => {
    const[viewProfileModel,setViewProfileModel]=useState(false)

import { getAllAcceptedOffer, getAllSentOffer } from '../../store/reducers/lawyerReducer'
import { useDispatch, useSelector } from 'react-redux'

const Clients = () => {
    const { sentOffers,acceptedoffers,error,loading } = useSelector((state) => state.Lawyer);
  const [offers,setOffers]=useState([])
    const dispatch=useDispatch()
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(getAllSentOffer());
        dispatch(getAllAcceptedOffer())
      }, [dispatch]);


  return (
    <>
    <LawyerNavbar/>
  <div className='client-dash'>
    <div className="left-dashboard">
        <h3>Dashboard</h3>
        <div className="client-link">
        <ul>
        <li><Link to="/lawyer/profile" ><BsPerson/>Profile</Link></li>
        <li><Link to="/lawyer/request"><LiaEnvelopeOpenTextSolid/>Request</Link></li>
        <li><Link to="/lawyer/clients" className='bold'><PiUsersThreeFill/>Clients</Link></li>
    </ul>
        </div>
    </div>
    <divaaa className="right-dashboard">
      <div className="head">
        <h1 className='my-jobs-h1'>Manage Clients</h1>
      </div>
      <hr />
    <section className='my-jobs-container'>
        <div className="my-jobs">
            <div className="left-myjobs">
                <h1>Sent Offers</h1>
                <section className='offer-box-container-ab'>
                


                {
                    sentOffers?.lawyerOffers?.map((single_offer)=>(
                        <div className="offer-box" key={single_offer._id}>
                    <span className='offer-box-headings'>
                        <p>{single_offer.client_info.name}</p>
                        <p>{single_offer?.case_type}</p>
                        <p>{single_offer?.client_info.province}</p>
                        <p>{single_offer?.client_info.city}</p>
                    </span>
                    <span className='offer-description-span'>
                        <p className='offer-box-p'>Offer Description:</p>
                        <p>{single_offer.description}</p>
                    </span>
                    <span className='offer-box-footer'>
                        <span><p className='offer-box-f'>Rate:</p><p>{single_offer.rate}Rs.</p></span>
                    </span>
                </div>
                    ))
                }




                </section>
            </div>
            <div className="right-myjobs">
                <h1>Accepted Offers</h1>
                <section className='offer-box-container'>
            {
                acceptedoffers?.lawyerOffers?.map(single_offer=>(
                    <div className="offer-box" key={single_offer._id}>
                    <span className='offer-box-headings'>
                        <p>{single_offer.client_info.name}</p>
                        <p>{single_offer.case_type}</p>
                        <p>{single_offer.client_info.city}</p>
                        <p>{single_offer.client_info.province}</p>
                    </span>
                    <span className='offer-description-span'>
                        <p className='offer-box-p'>Offer Description:</p>
                        <p>{single_offer.description}</p>
                    </span>
                    <span className='offer-box-footer'>
                        <span><p className='offer-box-f'>Rate:</p><p>{single_offer.rate}Rs.</p></span>
                      
                        <button onClick={()=>setViewProfileModel(true)} >View Profile</button>
                        {viewProfileModel && <ViewProfileModel setViewProfileModel={setViewProfileModel}/> }


                    </span>
                </div>


                ))
            }


                


                </section>
            </div>
        </div>
    </section>

    </divaaa>

  </div>
  </>
  )
}

export default Clients;