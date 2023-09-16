import React, { useEffect, useState } from 'react';
import './LawyerLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import LoginNavbar from '../../components/LoginSignUpNavbar/LoginNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, loginUser } from '../../store/reducers/userReducer';
import { ToastContainer, toast } from 'react-toastify';

const LawyerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const { user, error, isAuthenticated } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
    useEffect(() => {
      if (isAuthenticated && user?.user.role=="client") {

        navigate("/client");
      }else if(isAuthenticated && user?.user.role=="lawyer"){
        navigate("/lawyer");

      }else if(isAuthenticated && user?.user.role=="admin"){
        navigate("/admin");
      
      }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
      if (error) {
        toast.error(error);
      }
      dispatch(clearErrors())
    }, [error,dispatch ]);



    const handleLogin = () => {
      // You can access the state values here and perform the login logic
      console.log('Email:', email);
      console.log('Password:', password);
  
  
      dispatch(loginUser({email,password}))
      console.log(error,isAuthenticated)
  
   
  
    }

  return (
    <>
     <ToastContainer />
      <LoginNavbar />
      <div className="login-container">
        <div className="login-page">
          <h1>Log In</h1>
          <div className="login-btn">
            <Link to="/client-login">
              <button className="btn-C">I am a Client</button>
            </Link>
            <Link to="/lawyers-login">
              <button className="btn-L">I am a Lawyer</button>
            </Link>
          </div>
          <div className="login-inputs">
            <span>
              <p>Email:</p>
              <input
                type="text"
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
          <button className="login-L" onClick={()=>handleLogin()}>
            Log In
          </button>

          <div className="login-footer">
            <p>Don't have an account? </p>
            <Link to="/lawyer-signUp" className="link">
              <p>Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LawyerLogin;
