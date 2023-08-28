import React, { useState } from 'react'
import "./Search.css"
import { Link } from 'react-router-dom'
import {IoPersonCircle} from "react-icons/io5"
import {BsPerson} from "react-icons/bs"
import {BiSearchAlt} from "react-icons/bi"
import {MdOutlinePersonSearch} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import { FaTimes } from 'react-icons/fa'
import {BsFilterRight} from "react-icons/bs"


const Search = () => {
  const[showFilters,setShowFilters]=useState(false);
  return (
    <div className='client-dash'>
    <div className="left-dashboard">
        <h3>Dashboard</h3>
        <div className="client-link">
        <ul>
        <li><Link to="/client/profile" ><BsPerson/>Profile</Link></li>
        <li><Link to="/client/search" className='bold'><BiSearchAlt/>Search</Link></li>
        <li><Link to="/client/myjobs"><MdOutlinePersonSearch/>My Jobs</Link></li>
    </ul>
        </div>
    </div>
    <div className="right-dashboard">
       <div className="search-head">
       <h3>Search Lawyer Directory</h3>
       <div className="filter-btn">
        <span onClick={()=>setShowFilters(true)}><BsFilterRight fontSize="25px"/>Filters</span> 
       </div>
       </div>
      

      <section className='search-section'>



      <div className={`left-search ${showFilters?"showFiltersSection" : "hideFiltersSection"}` }>
        <h3>Filter By</h3>
        <span className='search-input'>
            <p>Search</p>
             <div className='search'><BsSearch/><input type="search" placeholder='search'/></div>
        </span>
        
        
        <span>
              <p className='p-tag'>Practice Area</p>
              <select>
                <option value="city1">Select</option>
                <option value="city1">Family Law</option>
                <option value="city2">Criminal Law</option>
                <option value="city3">Housing Law</option>
              </select>
            </span>

            <span >
              <p className='p-tag'>Province</p>
              <select >
                <option value="province1">Select </option>
                <option value="province1">Punjab</option>
                <option value="province2">KPK</option>
                <option value="province3">Balochistan</option>
                <option value="province3">Sindh</option>
                <option value="province3">GigitBaltitan</option>
              </select>
            </span>


            <span >
              <p className='p-tag'>City</p>
              <select >
                <option value="province1">Select</option>
                <option value="province1">Lahore</option>
                <option value="province2">Karachi</option>
                <option value="province3">Islambad</option>
                <option value="province3">Peshawar</option>
                <option value="province3">Multan</option>
              </select>
            </span>

            <span className='range'>
                <p>Budget</p>
                <input type="range" />
            </span>

            <div className="close-btn">
              <FaTimes fontSize="22px" onClick={()=>setShowFilters(false)}/>
            </div>
 


      </div>

      <div className="right-search">
        <div className="right-search-container">
            <div className="search-details">
                <p>Name</p>
                <p>Practice Area</p>
                <p>City</p>
            </div>

            <div className="search-scroll">
            <div className="search-lawyer-bar">
              <span>
              <IoPersonCircle/>
              <p>Qamar</p>
              <p>Family Law</p>
              <p>Lahore</p>
              </span>
              <button className='btn-profile'>Profile</button>
            </div>

            <div className="search-lawyer-bar">
              <span>
              <IoPersonCircle/>
              <p>Qamar</p>
              <p>Family Law</p>
              <p>Lahore</p>
              </span>
              <button className='btn-profile'>Profile</button>
            </div>

            <div className="search-lawyer-bar">
              <span>
              <IoPersonCircle/>
              <p>Qamar</p>
              <p>Family Law</p>
              <p>Lahore</p>
              </span>
              <button className='btn-profile'>Profile</button>
            </div>

            <div className="search-lawyer-bar">
              <span>
              <IoPersonCircle/>
              <p>Qamar</p>
              <p>Family Law</p>
              <p>Lahore</p>
              </span>
              <button className='btn-profile'>Profile</button>
            </div>


            <div className="search-lawyer-bar">
              <span>
              <IoPersonCircle/>
              <p>Qamar</p>
              <p>Family Law</p>
              <p>Lahore</p>
              </span>
              <button className='btn-profile'>Profile</button>
            </div>


            <div className="search-lawyer-bar">
              <span>
              <IoPersonCircle/>
              <p>Qamar</p>
              <p>Family Law</p>
              <p>Lahore</p>
              </span>
              <button className='btn-profile'>Profile</button>
            </div>


            <div className="search-lawyer-bar">
              <span>
              <IoPersonCircle/>
              <p>Qamar</p>
              <p>Family Law</p>
              <p>Lahore</p>
              </span>
              <button className='btn-profile'>Profile</button>
            </div>


            <div className="search-lawyer-bar">
              <span>
              <IoPersonCircle/>
              <p>Qamar</p>
              <p>Family Law</p>
              <p>Lahore</p>
              </span>
              <button className='btn-profile'>Profile</button>
            </div>

            </div>


          

            




        </div>

      </div>





      </section>

     


     

    </div>

  </div>
  )
}

export default Search