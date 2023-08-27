import React from 'react'
import { Link } from 'react-router-dom'
import "./ClientSignUp.css"

const ClientSignUp = () => {
  return (
    <div className="login-container">
        <div className="signup-page">
           <h1>Sign Up</h1>
           <div className="login-btn">
        <Link to="/client-signUp"><button className='btn-Cl'>I am a Client</button></Link>
        <Link to="/lawyer-signUp"><button className='btn-La'>I am a Laywer</button></Link>
           </div>
           <div className="signup-inputs">
            <div className="left-inputs">
            <span>
                <p>Full Name:</p>
                <input type="text" />
            </span>
            
            <span>
                <p>Email:</p>
                <input type="text" />
            </span>
            
            <span>
                <p>Password:</p>
                <input type="password" />
            </span>


            </div>


            <div className="right-inputs">



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

            <p>Upload Picture:</p>
            <span class="custom-file-input">
            <button class="choose-file-button">Choose File</button>
            <input type="file"/>
            </span>

 

            </div>
           
            
           </div>
           <button className='login-L'>Sign Up</button>
             
            <div className="login-footer">
                <p>Already have an account?  </p>
                <Link to="/client-login" className='link'><p > Log In</p></Link>
             </div> 


        </div>
    </div>
  )
}

export default ClientSignUp;