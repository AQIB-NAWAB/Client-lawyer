import React from 'react'

const JobPostModel = ({setPostJob}) => {
    const cancelbtn=()=>{
        setPostJob(false)
    }

  return (
    <div className="job-wrap">
    <div className='job-post-container'>
        <div className="left-job-post">
            <h1>Enter job details</h1>
            <div className='job-inputs'>
            <span>
              <p>City:</p>
              <select>
                <option value="city1">Select city</option>
                <option value="city1">Lahore</option>
                <option value="city2">Karachi</option>
                <option value="city3">Islambad</option>
              </select>
            </span>

            <span>
              <p>Province:</p>
              <select>
                <option value="province1">Select Province</option>
                <option value="province1">Punjab</option>
                <option value="province2">KPK</option>
                <option value="province3">Balochistan</option>
                <option value="province3">Sindh</option>
                <option value="province3">GigitBaltitan</option>
              </select>
            </span>

            <span>
              <p>Case Type:</p>
              <select>
                <option value="province1">Select </option>
                <option value="province1">Family</option>
                <option value="province2">Property</option>
                <option value="province3">Aministrative</option>
                <option value="province3">Real Estate</option>
                <option value="province3">Criminal</option>
                <option value="province3">Civil</option>
              </select>
            </span>
            </div>
        </div>
        <div className="right-job-post">
            <span className='job-des'>
                <p>Case Description</p>
                <textarea name="" id="" cols="58" rows="10"></textarea>
            </span>
            <div className='job-budget'>
                <span className='Budget'>
                <p>Enter Budget:</p>
                <span>
                <input type="number" />
                </span>
                
                </span>
                
                <span><button className='post-btn'>Post</button>
</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default JobPostModel