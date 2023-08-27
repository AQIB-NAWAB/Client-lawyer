import React from 'react'
import "./LawyerLogin.css"
import { Link } from 'react-router-dom'

const LaywerLogin = () => {
  return (
    <div className="login-container">
        <div className="login-page">
           <h1>Log In</h1>
           <div className="login-btn">
        <Link to="/client-login"><button className='btn-C'>I am a Client</button></Link>
        <Link to="/lawyers-login"><button className='btn-L'>I am a Laywer</button></Link>
           </div>
           <div className="login-inputs">
            <span>
                <p>Email:</p>
                <input type="text" />
            </span>
            <span>
                <p>Password:</p>
                <input type="password" />
            </span>
            
           </div>
           <button className='login-L'>Log In</button>
             
            <div className="login-footer">
                <p>Don't have an account? </p>
                <Link to="/lawyer-signUp" className='link'><p > Sign Up</p></Link>
             </div> 


        </div>
    </div>
  )
}

export default LaywerLogin