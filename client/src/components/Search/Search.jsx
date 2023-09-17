import React, { useState, useEffect } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import { BsFilterRight } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import ClientNavbar from '../ClientNavbar/ClientNavbar';
import LawyerProfileModel from './LawyerProfileModel';
import { useDispatch, useSelector } from 'react-redux';
import { searchLawyers, clearErrors } from '../../store/reducers/searchReducer';
import { BsPerson,BsSearch  } from 'react-icons/bs';
import {BiSearchAlt} from "react-icons/bi"
import {MdOutlinePersonSearch} from "react-icons/md"
const Search = () => {
  const dispatch = useDispatch();
  const { lawyers, loading, error } = useSelector((state) => state.Search);

  const [showFilters, setShowFilters] = useState(false);
  const [showProfileModel, setShowProfileModel] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [practiceArea, setPracticeArea] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [budget, setBudget] = useState(0);

  const [selectedLawyer, setSelectedLawyer] = useState(null);


  useEffect(() => {
    // Clear errors when component mounts
    dispatch(clearErrors());
  }, [dispatch]);

  useEffect(() => {
    // Call handleSearch whenever filter values change
    handleSearch();
  }, [searchText, practiceArea, province, city, budget]);

  const handleSearch = () => {
    // Dispatch the action here
    dispatch(
      searchLawyers({
        name: searchText,
        practice_area: practiceArea,
        province: province,
        city: city,
        budget: budget*100,
      })
    );
  }
  return (
    <>
      <ClientNavbar />
      <div className="client-dash">
        <div className="left-dashboard">
          <h3 onClick={()=>handleSearch()}>Dashboard</h3>
          <div className="client-link">
            <ul>
              <li>
                <Link to="/client/profile">
                  <BsPerson />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/client/search" className="bold">
                  <BiSearchAlt />
                  Search
                </Link>
              </li>
              <li>
                <Link to="/client/myjobs">
                  <MdOutlinePersonSearch />
                  My Jobs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-dashboard">
          <div className="search-head">
            <h3>Search Lawyer Directory</h3>
            <div className="filter-btn">
              <span onClick={() => setShowFilters(true)}>
                <BsFilterRight fontSize="25px" />
                Filters
              </span>
            </div>
          </div>

          <section className="search-section">
            <div
              className={`left-search ${
                showFilters ? 'showFiltersSection' : 'hideFiltersSection'
              }`}
            >
              <h3>Filter By</h3>
              <span className="search-input">
                <p>Search</p>
                <div className="search">
                  <BsSearch />
                  <input
                    type="search"
                    placeholder="Search by name"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              </span>

              <span>
                <p className="p-tag">Practice Area</p>
                <select
                  value={practiceArea}
                  onChange={(e) => setPracticeArea(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="family">Family Law</option>
                  <option value="crime">Criminal Law</option>
                  <option value="housing">Housing Law</option>
                </select>
              </span>

              <span>
                <p className="p-tag">Province</p>
                <select
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="punjab">Punjab</option>
                  <option value="kkp">KPK</option>
                  <option value="balochistan">Balochistan</option>
                  <option value="sindh">Sindh</option>
                  <option value="gilgitBaltistan">GilgitBaltistan</option>
                </select>
              </span>

              <span>
                <p className="p-tag">City</p>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="">Select</option>
                  <option value="lahore">Lahore</option>
                  <option value="karachi">Karachi</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="peshawar">Peshawar</option>
                  <option value="multan">Multan</option>
                  <option value="chunian">Chunian</option>

                </select>
              </span>

              <span className="range">
                <p>Range</p>
                <input
                  type="range"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
                <span>{budget*100}</span>
              </span>

              <div className="close-btn">
                <FaTimes fontSize="22px" onClick={() => setShowFilters(false)} />
              </div>
            </div>

            {!showProfileModel && (
              <div className="right-search">
                <div className="right-search-container">
                  <div className="search-details">
                    <p>Name</p>
                    <p>Practice Area</p>
                    <p>City</p>
                  </div>

                  <div className="search-scroll">
                  {loading ? (
  <p>Loading...</p>
) : error ? (
  <p>Error: {error}</p>
) : (
  <div>
  {loading ? (
                      <p>Loading...</p>
                    ) : error ? (
                      <p>Error: {error}</p>
                    ) : (
                      lawyers?.lawyers?.map((lawyer, index) => (
                        <div className="search-lawyer-bar" key={index}>
                          <span>
                            <p>{lawyer.name}</p>
                            <p>{lawyer.practice_area}</p>
                            <p>{lawyer.city}</p>
                          </span>
                          <button
  className="btn-profile"
  onClick={() => {
    setSelectedLawyer(lawyer);
    setShowProfileModel(true);
  }}
>
  Profile
</button>
                        </div>
                      ))
                    )}
  </div>
)}
                  </div>
                </div>
              </div>
            )}
            {showProfileModel && (
  <LawyerProfileModel
    setShowProfileModel={setShowProfileModel}
    selectedLawyer={selectedLawyer} // Pass the selected lawyer as a prop
  />
)}
          </section>
        </div>
      </div>
    </>
  );
};

export default Search;
