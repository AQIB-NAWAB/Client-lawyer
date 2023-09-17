import React, { useState } from 'react';
import { sendRequest } from '../../store/reducers/clientReducer';
import { useDispatch } from 'react-redux';

const SendLawyerRequestModel = ({setSendLawyerRequestModel,selectedLawyer}) => {
  const [caseType, setCaseType] = useState(''); // State for case type selection
  const [caseDescription, setCaseDescription] = useState(''); // State for case description input
  const [budget, setBudget] = useState(''); // State for budget input

  const cancelbtn = () => {
    setSendLawyerRequestModel(false);
  };
const dispatch=useDispatch()
  const handlePostJob = () => {
    // You can access the state values here and perform any necessary actions, such as posting the job.
    console.log('Case Type:', caseType);
    console.log('Case Description:', caseDescription);
    console.log('Budget:', budget);

    // Perform any actions here...
    dispatch(sendRequest({case_description:caseDescription,case_type:caseType,budget,id:selectedLawyer._id}))

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
              <select
                value={caseType}
                onChange={(e) => setCaseType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="family">Family</option>
                <option value="property">Property</option>
                <option value="administrative">Administrative</option>
                <option value="realEstate">Real Estate</option>
                <option value="criminal">Criminal</option>
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
              <p>Budget:</p>
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
