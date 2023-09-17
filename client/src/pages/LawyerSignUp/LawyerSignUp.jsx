// LawyerSignUp.js

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LawyerSignUp.css';
import LoginNavbar from '../../components/LoginSignUpNavbar/LoginNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, registerLawyer } from '../../store/reducers/userReducer';
import { ToastContainer, toast } from 'react-toastify';

const LawyerSignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [lawyerLicense, setLawyerLicense] = useState(null);
  const [picture, setPicture] = useState(null);
  const [cnic, setCnic] = useState(null);
  const [area,setArea]=useState("")

  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleFileChange = (e, setStateFunction) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 1024 * 1024) {
        toast.error('Image size must be less than 1MB.');
      } else {
        const reader = new FileReader();

        reader.onload = () => {
          if (reader.readyState === 2) {
            setStateFunction(reader.result);
          }
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleSignUp = () => {
    const registrationData = {
      role: 'lawyer',
      email,
      name: fullName,
      password,
      lawyer_license_image: lawyerLicense,
      profile_picture_image: picture,
      city,
      province,
      lawyer_cnic_image: cnic,
      practice_area:area
    };

    dispatch(registerLawyer(registrationData));
  };

  const { user, error, isAuthenticated } = useSelector  ((state) => state.User);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors())
    }
  
  }, [error,dispatch,isAuthenticated,navigate ]);

  useEffect(() => {
    if (isAuthenticated && user?.user.role=="client") {

      navigate("/client");
    }else if(isAuthenticated && user?.user.role=="lawyer"){
      navigate("/lawyer");

    }else if(isAuthenticated && user?.user.role=="admin"){
      navigate("/admin");
    
    }
  }, [isAuthenticated, navigate]);
  

  return (
    <>
      <ToastContainer />
      <LoginNavbar />
      <div className="login-container">
        <div className="signup-page">
          <h1>Sign Up</h1>
          <div className="login-btn">
            <Link to="/client-signUp">
              <button className="btn-C">I am a Client</button>
            </Link>
            <Link to="/lawyer-signUp">
              <button className="btn-L">I am a Lawyer</button>
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

              <p>Upload Lawyer License:</p>
              <span className="custom-file-input">
                <button className="choose-file-button">Choose File</button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setLawyerLicense)}
                />
              </span>
              {lawyerLicense && (
                <img src={lawyerLicense} alt="Preview" className="image-preview" />
              )}
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
                  <option value="chunian">chunian</option>

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
                  {/* Add more province options */}
                </select>
              </span>
              <span>
                <p>Practice Area:</p>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                >
                  <option value="">Select Area</option>
                  <option value="crime">Crime</option>
                  <option value="defenec">Defence</option>
                  <option value="law">Law</option>
                  <option value="marriage">Marriage</option>
                  {/* Add more province options */}
                </select>
              </span>

              <p>Upload Picture:</p>
              <span className="custom-file-input">
                <button className="choose-file-button">Choose File</button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setPicture)}
                />
              </span>
              {picture && (
                <img src={picture} alt="Preview" className="image-preview" />
              )}

              <p>Upload CNIC:</p>
              <span className="custom-file-input">
                <button className="choose-file-button">Choose File</button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setCnic)}
                />
              </span>
              {cnic && (
                <img src={cnic} alt="Preview" className="image-preview" />
              )}
            </div>
          </div>
          <button className="login-L" onClick={handleSignUp}>
            Sign Up
          </button>

          <div className="login-footer">
            <p>Already have an account? </p>
            <Link to="/lawyers-login" className="link">
              <p>Log In</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawyerSignUp;
