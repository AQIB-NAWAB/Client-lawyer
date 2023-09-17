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
import { updateProfile } from '../../store/reducers/userReducer'
import { AiOutlineCheck } from 'react-icons/ai'

const Lawyer = () => {
const {user} =useSelector(state=>state.User)

const [headEditMode,setHeadEditMode]=useState(false)
  const [descriptionEditMode,setDescriptionEditMode]=useState(false)
  const [detailsEditMode,setDetailsEditMode]=useState(false)
  const [serviceEditMode,setServiceEditMode]=useState(false)
  const [pastWorkEditMode,setPastWorkEditMode]=useState(false)
const [educationEditMode,setEducationEditMode]=useState(false)
const [certificatesEditMode,setCertificatesMode]=useState(false)
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
  
  const dispatch =useDispatch()

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
    setPastWork(user?.user?.past_work)


  },[dispatch])

  const updateHandler=async(mode)=>{
    if(mode=="headEditMode"){
      setHeadEditMode(false)
    }else if (mode == "descriptionEditMode"){
      setDescriptionEditMode(false)
    }else if(mode=="detailsEditMode"){
      setDetailsEditMode(false)
    }
    dispatch(updateProfile({name:clientName,city:city.toLowerCase(),description,email,phone,office,services,hourly_rate:hourlyRate}))
  }
  

// Services edit Mode
const Service=()=>{
  const [service,setService]=useState("")
  const handleServiceSave=()=>{
    const updatedServices=[...services,{service}]
    dispatch(updateProfile({services:updatedServices}))
  }
  return(

    <div className="request-wrap" >
    <div className='request_modal_inner' >
    <div style={{display:"flex",gap:"30px",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0px auto"}}>
<h1>Add The Services</h1>
    <input type="text" placeholder='Service' value={service} onChange={(e)=>setService(e.target.value)}/>
    <div className="btns">

    <button onClick={()=>handleServiceSave()}>Save</button>
    <button onClick={()=>setServiceEditMode(false)}>Cancel</button>
    </div>
    </div>
    </div>
    </div>
  )
}
//
// Past WWork edit Mode
const PastWork=()=>{
  const [case_date,set_case_date]=useState("")
  const [case_type,set_case_type]=useState("")
  const [court,setCourt]=useState("")

  const handlePastWorkSave=()=>{
    const updatedPastWork=[...pastWork,{case_date,case_type,court}]
    dispatch(updateProfile({past_work:updatedPastWork}))
  }
  return(

    <div className="request-wrap" >
    <div className='request_modal_inner' >
    <div style={{display:"flex",gap:"30px",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0px auto"}}>
<h1>Add The Past Work</h1>
    <input type="date"  value={case_date} onChange={(e)=>set_case_date(e.target.value)}/>
    <input type="text"  value={case_type} placeholder='Enter Case Type' onChange={(e)=>set_case_type(e.target.value)}/>
    <input type="text"  value={court} placeholder='Court' onChange={(e)=>setCourt(e.target.value)}/>


    <div className="btns">

    <button onClick={()=>handlePastWorkSave()}>Save</button>
    <button onClick={()=>setPastWorkEditMode(false)}>Cancel</button>
    </div>
    </div>
    </div>
    </div>
  )
}






// Education edit Mode
const Education=()=>{
  const [qualification,setQualification]=useState("")
  const [institute,setInstitute]=useState("")
  const [graduation_year,set_graduation_year]=useState("")

  const handleEducationSave=()=>{
    const updatedEducation=[...education,{qualification,institute,graduation_year}]
    dispatch(updateProfile({education:updatedEducation}))
  }
  return(

    <div className="request-wrap" >
    <div className='request_modal_inner' >
    <div style={{display:"flex",gap:"30px",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0px auto"}}>
<h1>Add The Past Work</h1>
    <input type="text"  value={qualification} placeholder='Enter Qualification' onChange={(e)=>setQualification(e.target.value)}/>
    <input type="text"  value={institute} placeholder='Institute' onChange={(e)=>setInstitute(e.target.value)}/>
    <input type="date"  placeholder='Graducation Year' value={graduation_year} onChange={(e)=>set_graduation_year(e.target.value)}/>


    <div className="btns">

    <button onClick={()=>handleEducationSave()}>Save</button>
    <button onClick={()=>setEducationEditMode(false)}>Cancel</button>
    </div>
    </div>
    </div>
    </div>
  )
}



// Certificates edit Mode
const Certificates=()=>{
  const [institute,setInstitute]=useState("")
  const [graduation_year,set_graduation_year]=useState("")

  const handleCertificatesSave=()=>{
    const updatedCertificates=[...certificates,{institute,graduation_year}]
    dispatch(updateProfile({certificates:updatedCertificates}))
  }
  return(

    <div className="request-wrap" >
    <div className='request_modal_inner' >
    <div style={{display:"flex",gap:"30px",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0px auto"}}>
<h1>Add The Certificates</h1>
    <input type="text"  value={institute} placeholder='Enter Institute' onChange={(e)=>setInstitute(e.target.value)}/>
    <input type="date"  placeholder='Graducation Year' value={graduation_year} onChange={(e)=>set_graduation_year(e.target.value)}/>


    <div className="btns">

    <button onClick={()=>handleCertificatesSave()}>Save</button>
    <button onClick={()=>setCertificatesMode(false)}>Cancel</button>
    </div>
    </div>
    </div>
    </div>
  )
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
      <li>Rate :{detailsEditMode?<>
        <input type="number" value={hourlyRate} onChange={(e)=>setHourlyRate(e.target.value)} />
      </>:<>
        {hourlyRate}
      </>}</li>
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
        {office}
        </>}</li>
        </ul>
        </div>
    <section className='lawyer-detail' style={{height:"30rem"}}>
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
        <span className='header'><h1>Past Work</h1><FaPlus className='pencil' onClick={()=>setPastWorkEditMode(true)}/></span>
    <div className="works-container">
       {
        user?.user?.past_work.map(single=>(
          <span className="work  " key={single._id}>
        <p>Case Date: {single.case_date}</p>
        <p>Case Type: {single.case_type}</p>
        <p>Court: {single.court}</p>
        </span>
        ))
       }


       
    </div>
    </div>
    <div className="past-work">
        <span className='header'><h1>Education</h1><FaPlus className='pencil' onClick={()=>setEducationEditMode(true)}/></span>
    <div className="works-container">
    {
  user?.user?.education.map(single=>(
    <span className="work" key={single._id}>
    <p>Qualification : {single.qualification}</p>
        <p>Institute : {single.institute}</p>
        <p>Graduation Year: {single.graduation_year}</p>
        </span>
  ))
}
    </div>
    </div>

    <div className="past-work">
        <span className='header'><h1>Certificates</h1><FaPlus className='pencil' onClick={()=>setCertificatesMode(true)}/></span>
    <div className="works-container">
       


    {
      user?.user?.certificates.map(single=>(
        <span className="work" key={single._id}>
        <p>Institute: {single.institute}</p>
        <p>Graduation Year: {single.graduation_year}</p>
        </span>
      ))
    }
    </div>
    </div>

    <div className="past-work">
        <span className='header'><h1>Services</h1><FaPlus className='pencil' onClick={()=>setServiceEditMode(true)}/></span>
    <div className="works-container">
    <span className='services-container'>

        {user?.user?.services.map(single=>(
          <span className="services" key={single._id}>
        {single.service}
        </span>
        
        ))}
    </span>


    </div>
    </div>

    </section>
    </section>

    </div>

  </div>
  {serviceEditMode && <Service/>}
  {pastWorkEditMode && <PastWork/>}
  {educationEditMode && <Education/>}
  {certificatesEditMode && <Certificates/> }


  </>
  )
}

export default Lawyer


