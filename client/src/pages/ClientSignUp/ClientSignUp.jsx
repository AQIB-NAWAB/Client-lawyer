// ClientSignUp.js

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ClientSignUp.css';
import LoginNavbar from '../../components/LoginSignUpNavbar/LoginNavbar';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import { clearErrors, registerClient } from '../../store/reducers/userReducer'; // Import your Redux action
import { ToastContainer, toast } from 'react-toastify';

const ClientSignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [picture, setPicture] = useState(null);

  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      if (file.size > 1024 * 1024) {
        toast.error('Image size must be less than 1MB.');
      } else {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setPicture(reader.result);
          }
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleSignUp = () => {
    const registrationData = {
      email,
      name: fullName,
      password,
      profile_picture_image: picture,
      city,
      province,
      role: 'client',
    };

    dispatch(registerClient(registrationData));
  };
  const { user, error, isAuthenticated } = useSelector((state) => state.User);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors())
    }
    if(isAuthenticated){
      navigate("/client")
    }
  }, [error,dispatch ]);
  return (
    <>
    <ToastContainer/>
      <LoginNavbar />
      <div className="login-container">
        <div className="signup-page">
          <h1>Sign Up</h1>
          <div className="login-btn">
            <Link to="/client-signUp">
              <button className="btn-Cl">I am a Client</button>
            </Link>
            <Link to="/lawyer-signUp">
              <button className="btn-La">I am a Lawyer</button>
            </Link>
          </div>
          <div className="signup-inputs">
            <div className="left-inputs">
              <span>
                <p>Full Name:</p>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </span>

              <span>
                <p>Email:</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>

              <span>
                <p>Password:</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
            </div>

            <div className="right-inputs">
              <span>
                <p>City:</p>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Select city</option>
                  <option value="lahore">Lahore</option>
                  <option value="karachi">Karachi</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="chunian">Chunian</option>

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

              <p>Upload Picture:</p>
              <span className="custom-file-input">
                <button className="choose-file-button" >Choose File</button>
                <input
                  type="file"
                  accept="image/*" // Specify the accepted file type(s)
                  onChange={handleFileChange}
                />
              </span>
              {picture && (
              <img src={picture} alt="Preview" className="image-preview" />
            )}
            </div>
          </div>
          <button className="login-L" onClick={handleSignUp}>
            Sign Up
          </button>

          <div className="login-footer">
            <p>Already have an account? </p>
            <Link to="/client-login" className="link">
              <p>Log In</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientSignUp;
