import React from 'react'
import {BsPerson} from "react-icons/bs"
import {LiaEnvelopeOpenTextSolid} from "react-icons/lia"
import {PiUsersThreeFill} from "react-icons/pi"
import { Link } from 'react-router-dom'
import "./ClientRequest.css"

const ClientRequest = () => {
  return (
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
                <h3>Caste Type</h3>
                <h3>Offers</h3>
                <h3>Budget</h3>
            </div>
            <section className='scroll'>
            <section className='request-content-section'>
            <div className="request-content">
                <p>8/20/2023 </p>
                <p>QAMAR </p>
                <p>Family Law </p>
                <p>10 </p>
                <p>30,000 PKR </p>
            </div>
            </section>

            <section className='request-content-section'>
            <div className="request-content">
                <p>8/20/2023</p>
                <p>QAMAR</p>
                <p>Family Law</p>
                <p>10</p>
                <p>30,000 PKR</p>
            </div>
            </section>


            <section className='request-content-section'>
            <div className="request-content">
                <p>8/20/2023</p>
                <p>QAMAR</p>
                <p>Family Law</p>
                <p>10</p>
                <p>30,000 PKR</p>
            </div>
            </section>

            <section className='request-content-section'>
            <div className="request-content">
                <p>8/20/2023</p>
                <p>QAMAR</p>
                <p>Family Law</p>
                <p>10</p>
                <p>30,000 PKR</p>
            </div>
            </section>


            <section className='request-content-section'>
            <div className="request-content">
                <p>8/20/2023</p>
                <p>QAMAR</p>
                <p>Family Law</p>
                <p>10</p>
                <p>30,000 PKR</p>
            </div>
            </section>

            <section className='request-content-section'>
            <div className="request-content">
                <p>8/20/2023</p>
                <p>QAMAR</p>
                <p>Family Law</p>
                <p>10</p>
                <p>30,000 PKR</p>
            </div>
            </section>






            <section className='request-content-section'>
            <div className="request-content">
                <p>8/20/2023</p>
                <p>QAMAR</p>
                <p>Family Law</p>
                <p>10</p>
                <p>30,000 PKR</p>
            </div>
            </section>
 
            </section>
            
        </div>
        </section>
    </div>
    </div>
  )}

    export default ClientRequest