
import React, { useEffect, useState } from 'react';
import LoginNavbar from '../../components/LoginSignUpNavbar/LoginNavbar';
import './AdminPage.css';
import LawyerApproveModel from './LawyerApproveModel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllApprovedLawyers, getAllLawyers, getAllPendingLawyers } from '../../store/reducers/adminReducer';

const AdminPage = () => {
  const [selectedButton, setSelectedButton] = useState('All');
  const [showApproveModel, setShowApproveModel] = useState(false);

  const [lawyers, setLawyers] = useState([]);
  const [allPendingLawyers, setAllPendingLawyers] = useState([]);
  const [allApprovedLawyers, setAllApprovedLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  const dispatch = useDispatch();
  const { allLawyers, pendingLawyers, approveLawyers,isUpdated } = useSelector((state) => state.Admin);
  useEffect(() => {
    dispatch(getAllLawyers());
    dispatch(getAllPendingLawyers());
    dispatch(getAllApprovedLawyers());
  }, [dispatch,isUpdated]);

  useEffect(() => {
    setLawyers(allLawyers.lawyers || []);
    setAllPendingLawyers(pendingLawyers.lawyers || []);
    setAllApprovedLawyers(approveLawyers.lawyers || []);
  }, [allLawyers, pendingLawyers, approveLawyers,]);

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  const selectedLawyers = (buttonType) => {
    switch (buttonType) {
      case 'All':
        return lawyers;
      case 'Pending':
        return allPendingLawyers;
      case 'Approved':
        return allApprovedLawyers;
      default:
        return [];
    }
  };


  return (
    <>
      <LoginNavbar />
      <div className="admin-container">
        <div className="admin-btns">
        <button
  className={selectedButton === 'All' ? 'selected-button' : ''}
  onClick={() => handleButtonClick('All')}
>
  All
</button>
<button
  className={selectedButton === 'Pending' ? 'selected-button' : ''}
  onClick={() => handleButtonClick('Pending')}
>
  Approved
</button>
<button
  className={selectedButton === 'Approved' ? 'selected-button' : ''}
  onClick={() => handleButtonClick('Approved')}
>
  Pending
</button>
        </div>
        <div className="admin-box">
          <div className="admin-headings">
            <p>Name</p>
            <p>Email</p>
            <p>Status</p>
            <p>Profile</p>
          </div>
          <div className="admin-details-container">
  {selectedLawyers(selectedButton)?.map((lawyer, index) => (
    <div className="admin-details" key={index}>
      <p>{lawyer.name}</p>
      <p>{lawyer.email}</p>
      <p>{lawyer.status}</p>
      <button onClick={() => {
        setSelectedLawyer(lawyer); // Set the selected lawyer when the "Profile" button is clicked
        setShowApproveModel(true);
      }}>Profile</button>
    </div>
  ))}
</div>

{showApproveModel && (
  <LawyerApproveModel lawyer={selectedLawyer} setShowApproveModel={setShowApproveModel} />
)}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
