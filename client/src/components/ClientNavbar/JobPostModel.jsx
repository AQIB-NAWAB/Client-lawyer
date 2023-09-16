import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postjob } from '../../store/reducers/clientReducer';

const JobPostModel = ({ setPostJob }) => {
  const [city, setCity] = useState(''); // State for city selection
  const [province, setProvince] = useState(''); // State for province selection
  const [caseType, setCaseType] = useState(''); // State for case type selection
  const [caseDescription, setCaseDescription] = useState(''); // State for case description input
  const [budget, setBudget] = useState(''); // State for budget input

  const cancelbtn = () => {
    setPostJob(false);
  };
const dispatch=useDispatch()
  const handlePostJob = () => {
    // You can access the state values here and perform any necessary actions, such as posting the job.
    console.log('City:', city);
    console.log('Province:', province);
    console.log('Case Type:', caseType);
    console.log('Case Description:', caseDescription);
    console.log('Budget:', budget);

    dispatch(postjob({city,province,description:caseDescription,budget,case_type:caseType}))

    
    setPostJob(false);
  };

  return (
    <div className="job-wrap">
      <div className="job-post-container">
        <div className="left-job-post">
          <h1>Enter job details</h1>
          <div className="job-inputs">
            <span>
              <p>City:</p>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select city</option>
                <option value="lahore">Lahore</option>
                <option value="chunian">Chunian</option>

                <option value="karachi">Karachi</option>
                <option value="islamabad">Islamabad</option>
                {/* Add more city options */}
              </select>
            </span>

            <span>
              <p>Province:</p>
              <select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              >
                <option value="">Select Province</option>
                <option value="punjab">Punjab</option>
                <option value="kpk">KPK</option>
                <option value="balochistan">Balochistan</option>
                <option value="sindh">Sindh</option>
                <option value="gilgitBaltistan">GilgitBaltistan</option>
              </select>
            </span>

            <span>
              <p>Case Type:</p>
              <select
                value={caseType}
                onChange={(e) => setCaseType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="family">Family</option>
                <option value="property">Property</option>
                <option value="administrative">Administrative</option>
                <option value="real Estate">Real Estate</option>
                <option value="crime">Crime</option>
                <option value="civil">Civil</option>
                {/* Add more case type options */}
              </select>
            </span>
          </div>
        </div>
        <div className="right-job-post">
          <span className="job-des">
            <p>Case Description</p>
            <textarea
              name=""
              id=""
              cols="58"
              rows="10"
              value={caseDescription}
              onChange={(e) => setCaseDescription(e.target.value)}
            ></textarea>
          </span>
          <div className="job-budget">
            <span className="Budget">
              <p>Enter Budget:</p>
              <span>
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </span>
            </span>
            <span>
              <button className="post-btn" onClick={handlePostJob}>
                Post
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostModel;
