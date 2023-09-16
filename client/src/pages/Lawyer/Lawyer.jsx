import React, { useEffect, useState } from 'react'
import {BsPerson} from "react-icons/bs"
import { FaPlus } from 'react-icons/fa'
import {LiaEnvelopeOpenTextSolid} from "react-icons/lia"
import {PiUsersThreeFill} from "react-icons/pi"
import {PiPencilLight} from "react-icons/pi"
import { Link } from 'react-router-dom'
import "./Lawyer.css"
import LawyerNavbar from '../../components/LawyerNavbar/LawyerNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineCheck } from 'react-icons/ai'
import { updateProfile } from '../../store/reducers/userReducer'
import PastWorkModal from './PastWorkModal'

const Lawyer = () => {
const {user} =useSelector(state=>state.User)

const [headEditMode,setHeadEditMode]=useState(false)
  const [descriptionEditMode,setDescriptionEditMode]=useState(false)
  const [detailsEditMode,setDetailsEditMode]=useState(false)
  const [clientName,setClientName]=useState("")
  const [hourlyRate, setHourlyRate] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [office, setOffice] = useState('');
  const [description, setDescription] = useState('');
  const [pastWork, setPastWork] = useState([]);
  const [education, setEducation] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [services, setServices] = useState([]);
  

  useEffect(()=>{
    setClientName(user?.user?.name)
    setEmail(user?.user?.email)
    setCity(user?.user?.city)
    setPhone(user?.user?.phone)
    setOffice(user?.user?.office)
    setDescription(user?.user?.description)
    setHourlyRate(user?.user?.hourly_rate)
    setEducation(user?.user?.education)
    setServices(user?.user?.services)
    setCertificates(user?.user?.certificates)
    setPastWork(user?.user?.pastWork)



  },[])

  const dispatch =useDispatch()
const updateHandler=async(mode)=>{
  if(mode=="headEditMode"){
    setHeadEditMode(false)
  }else if (mode == "descriptionEditMode"){
    setDescriptionEditMode(false)
  }else if(mode=="detailsEditMode"){
    setDetailsEditMode(false)
  }
  dispatch(updateProfile({name:clientName,city:city.toLowerCase(),description,email,phone,office,hourly_rate:hourlyRate}))
}




  return (
    <>
    <LawyerNavbar/>
  <div className='client-dash'>
    <div className="left-dashboard">
        <h3>Dashboard</h3>
        <div className="client-link">
        <ul>
        <li><Link to="/lawyer/profile" className='bold'><BsPerson/>Profile</Link></li>
        <li><Link to="/lawyer/request"><LiaEnvelopeOpenTextSolid/>Request</Link></li>
        <li><Link to="/lawyer/clients"><PiUsersThreeFill/>Clients</Link></li>
    </ul>
        </div>
    </div>
    <div className="right-dashboard">
      <div className="head">
       <h1>{user && user.user.profile_picture_image ?<img className='profile_image' src={user?.user?.profile_picture_image?.url} />:<span className='person'><BsPerson />
        </span>}
        {headEditMode?<>
        <input type="text" value={clientName} onChange={(e)=>setClientName(e.target.value)} /> 
        <AiOutlineCheck className='pencil' onClick={()=>updateHandler("headEditMode")} />
        </>:<>
        {clientName}<PiPencilLight className='pencil' onClick={()=>setHeadEditMode(true)}/>
        </>}</h1>
      </div>
      <hr />
      <section className='dash-container'>
      <div className="detail-btn">
      {detailsEditMode ?<AiOutlineCheck className='pencil' onClick={()=>updateHandler("detailsEditMode")}/> :<PiPencilLight className='pencil ' onClick={()=>setDetailsEditMode(true)}/>}
      <ul>
      <li> Rate:
      {detailsEditMode?<>
          <input type="number" value={hourlyRate} onChange={(e)=>setHourlyRate(e.target.value)} /> 
        </>:<>
        {hourlyRate}
        </>}
      
      </li>
        <li>City: {detailsEditMode?<>
          <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} /> 
        </>:<>
        {city}
        </>}</li>
        <li>Email:
        {email}
</li>
        <li>Phone: {detailsEditMode?<>
          <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} /> 
        </>:<>
        {phone}
        </>}</li>
        <li>Office: {detailsEditMode?<>
          <input type="text" value={office} onChange={(e)=>setOffice(e.target.value)} /> 
        </>:<>
        {phone}
        </>}</li>
      </ul>
    </div>
    <section className='lawyer-detail'>
    <div className="description">
    <span className='header'><h1>DESCRIPTION:</h1>{descriptionEditMode?<AiOutlineCheck className='pencil' onClick={()=>updateHandler("descriptionEditMode")}/> :<PiPencilLight className='pencil' onClick={()=>setDescriptionEditMode(true)}/>}</span>
      {descriptionEditMode ?<>
        <textarea cols="80" rows={10}  value={description} onChange={(e)=>setDescription(e.target.value)}>

        </textarea>
        </>:<>
       <p>{description}</p>
        </>}
    </div>
    <div className="past-work">
        <span className='header'><h1>Past Work</h1><FaPlus className='pencil'/></span>
    <div className="works-container">
        <span className="work">
        <p>Case Date:</p>
        <p>Case Type:</p>
        <p>Court:</p>
        </span>


        <span className="work">
        <p>Case Date:</p>
        <p>Case Type:</p>
        <p>Court:</p>
        </span>
    </div>
    </div>
    <div className="past-work">
        <span className='header'><h1>Education</h1><FaPlus className='pencil'/></span>
    <div className="works-container">
        <span className="work">
        <p>Qualification:</p>
        <p>Institute:</p>
        <p>Graduation Year:</p>
        </span>


        <span className="work">
        <p>Qualification:</p>
        <p>Institute:</p>
        <p>Graduation Year:</p>
        </span>
    </div>
    </div>
    <div className="past-work">
        <span className='header'><h1>Certificates</h1><FaPlus className='pencil'/></span>
    <div className="works-container">
        <span className="work">
        <p>Institute:</p>
        <p>Graduation Year:</p>
        </span>


        <span className="work">
        <p>Institute:</p>
        <p>Graduation Year:</p>
        </span>


    </div>
    </div>

    <div className="past-work">
        <span className='header'><h1>Services</h1><FaPlus className='pencil'/></span>
    <div className="works-container">
    <span className='services-container'>

        <span className="services">
        services
        </span>
        <span className="services">
        services
        </span>
        <span className="services">
        services
        </span>
    </span>


    </div>
    </div>

    </section>
    </section>

    </div>

  </div>
  {<PastWorkModal/>}
  </>
  )
}

export default Lawyer