import React from 'react'
import {BsPerson} from "react-icons/bs"
import {LiaEnvelopeOpenTextSolid} from "react-icons/lia"
import {PiUsersThreeFill} from "react-icons/pi"
import { Link } from 'react-router-dom'
import LawyerNavbar from '../../components/LawyerNavbar/LawyerNavbar'
import "./Clients.css"

const Clients = () => {
  
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
                <section className='offer-box-container'>
                <div className="offer-box ab">
                    <span className='offer-box-headings'>
                        <p>"Client name"</p>
                        <p>Faimly Law</p>
                        <p>Karachi</p>
                        <p>Sindh</p>
                    </span>
                    <span className='offer-description-span'>
                        <p className='offer-box-p'>Offer Description:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, officia! Eaque vel delectus tenetur maiores voluptates numquam illo doloremque fugit expedita, iure modi quibusdam magnam explicabo quidem. Vero, sit odio?</p>
                    </span>
                    <span className='offer-box-footer'>
                        <span><p className='offer-box-f'>Rate:</p><p>30,000Rs.</p></span>
                    </span>
                </div>


                <div className="offer-box ab">
                    <span className='offer-box-headings'>
                        <p>"Client name"</p>
                        <p>Faimly Law</p>
                        <p>Karachi</p>
                        <p>Sindh</p>
                    </span>
                    <span className='offer-description-span'>
                        <p className='offer-box-p'>Offer Description:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, officia! Eaque vel delectus tenetur maiores voluptates numquam illo doloremque fugit expedita, iure modi quibusdam magnam explicabo quidem. Vero, sit odio?</p>
                    </span>
                    <span className='offer-box-footer'>
                        <span><p className='offer-box-f'>Rate:</p><p>30,000Rs.</p></span>
                    </span>
                </div>




                </section>
            </div>
            <div className="right-myjobs">
                <h1>Accepted Offers</h1>
                <section className='offer-box-container'>
                <div className="offer-box">
                    <span className='offer-box-headings'>
                        <p>"Client name"</p>
                        <p>Faimly Law</p>
                        <p>Karachi</p>
                        <p>Sindh</p>
                    </span>
                    <span className='offer-description-span'>
                        <p className='offer-box-p'>Offer Description:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, officia! Eaque vel delectus tenetur maiores voluptates numquam illo doloremque fugit expedita, iure modi quibusdam magnam explicabo quidem. Vero, sit odio?</p>
                    </span>
                    <span className='offer-box-footer'>
                        <span><p className='offer-box-f'>Rate:</p><p>30,000Rs.</p></span>
                        <button>View Profile</button>
                    </span>
                </div>


                <div className="offer-box">
                    <span className='offer-box-headings'>
                        <p>"Client name"</p>
                        <p>Faimly Law</p>
                        <p>Karachi</p>
                        <p>Sindh</p>
                    </span>
                    <span className='offer-description-span'>
                        <p className='offer-box-p'>Offer Description:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, officia! Eaque vel delectus tenetur maiores voluptates numquam illo doloremque fugit expedita, iure modi quibusdam magnam explicabo quidem. Vero, sit odio?</p>
                    </span>
                    <span className='offer-box-footer'>
                        <span><p className='offer-box-f'>Rate:</p><p>30,000Rs.</p></span>
                        <button>View Profile</button>
                    </span>
                </div>




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