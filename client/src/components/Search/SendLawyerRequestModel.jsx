import React, { useState } from 'react';

const SendLawyerRequestModel = ({setSendLawyerRequestModel}) => {
  const [city, setCity] = useState(''); // State for city selection
  const [province, setProvince] = useState(''); // State for province selection
  const [caseType, setCaseType] = useState(''); // State for case type selection
  const [caseDescription, setCaseDescription] = useState(''); // State for case description input
  const [budget, setBudget] = useState(''); // State for budget input

  const cancelbtn = () => {
    setSendLawyerRequestModel(false);
  };

  const handlePostJob = () => {
    // You can access the state values here and perform any necessary actions, such as posting the job.
    console.log('City:', city);
    console.log('Province:', province);
    console.log('Case Type:', caseType);
    console.log('Case Description:', caseDescription);
    console.log('Budget:', budget);

    // Perform any actions here...

    // Close the job post modal
    setSendLawyerRequestModel(false);

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
                <option value="Lahore">Lahore</option>
                <option value="Karachi">Karachi</option>
                <option value="Islamabad">Islamabad</option>
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
                <option value="Punjab">Punjab</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Sindh">Sindh</option>
                <option value="GilgitBaltistan">GilgitBaltistan</option>
                {/* Add more province options */}
              </select>
            </span>

            <span>
              <p>Case Type:</p>
              <select
                value={caseType}
                onChange={(e) => setCaseType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="Family">Family</option>
                <option value="Property">Property</option>
                <option value="Administrative">Administrative</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Criminal">Criminal</option>
                <option value="Civil">Civil</option>
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
                Send
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendLawyerRequestModel;
