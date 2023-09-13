import React from 'react'
import {BsPerson} from "react-icons/bs"
import {BiSearchAlt} from "react-icons/bi"
import {MdOutlinePersonSearch} from "react-icons/md"
import { Link } from 'react-router-dom'
import ClientNavbar from '../../components/ClientNavbar/ClientNavbar'
import "./MyJobs.css"

const MyJobs = () => {
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
                <div className="case-box">
                    <span>
                        <p className='case-heading'>Case description :</p>
                        <p className='case-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam quod labore natus autem saepe, ipsum adipisci libero expedita sapiente blanditiis ut magnam officia repellendus earum minus cumque ratione quidem.</p>
                    </span>
                    <span className='more-details'>
                        <span><p className='bold-head'>City: </p><p>Karachi</p></span>
                        <span><p className='bold-head'>Province: </p><p>Sindh</p></span>
                        <span><p className='bold-head'>Budget: </p><p>30,000Rs.</p></span>
                    </span>
                </div>


                <div className="case-box">
                    <span>
                        <p className='case-heading'>Case description :</p>
                        <p className='case-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam quod labore natus autem saepe, ipsum adipisci libero expedita sapiente blanditiis ut magnam officia repellendus earum minus cumque ratione quidem.</p>
                    </span>
                    <span className='more-details'>
                        <span><p className='bold-head'>City: </p><p>Karachi</p></span>
                        <span><p className='bold-head'>Province: </p><p>Sindh</p></span>
                        <span><p className='bold-head'>Budget: </p><p>30,000Rs.</p></span>
                    </span>
                </div>



                <div className="case-box">
                    <span>
                        <p className='case-heading'>Case description :</p>
                        <p className='case-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam quod labore natus autem saepe, ipsum adipisci libero expedita sapiente blanditiis ut magnam officia repellendus earum minus cumque ratione quidem.</p>
                    </span>
                    <span className='more-details'>
                        <span><p className='bold-head'>City: </p><p>Karachi</p></span>
                        <span><p className='bold-head'>Province: </p><p>Sindh</p></span>
                        <span><p className='bold-head'>Budget: </p><p>30,000Rs.</p></span>
                    </span>
                </div>



                </section>
            </div>
            <div className="right-myjobs">
                <h1>Return Offers</h1>
                <section className='offer-box-container'>
                <div className="offer-box">
                    <span className='offer-box-headings'>
                        <p>"Lawyer name"</p>
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
                        <button>Consult</button>
                    </span>
                </div>




                <div className="offer-box">
                    <span className='offer-box-headings'>
                        <p>"Lawyer name"</p>
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
                        <button>Consult</button>
                    </span>
                </div>







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