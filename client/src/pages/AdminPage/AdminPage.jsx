import React, { useState } from 'react';
import LoginNavbar from '../../components/LoginSignUpNavbar/LoginNavbar';
import './AdminPage.css';
import LawyerApproveModel from './LawyerApproveModel';

const AdminPage = () => {
  const [selectedButton, setSelectedButton] = useState('All');
  const [showApproveModel, setShowApproveModel] = useState(false);

  // Separate arrays for different lawyer statuses
  const allLawyers = [
    {
      name: 'Ahmad Ali',
      email: 'ahmad@gmail.com',
      status: 'Pending',
    },
    {
      name: 'John Doe',
      email: 'john@gmail.com',
      status: 'Rejected',
    },
    // Add more lawyers as needed
  ];

  const [pendingLawyers,aetPendinLawyers]=useState([
    {
      name: 'Ahmad Ali',
      email: 'ahmad@gmail.com',
      status: 'Pending',
    },
    {
      name: 'John Doe',
      email: 'john@gmail.com',
      status: 'Pending',
    },
  ])
  const [rejectedLawyers,setRejectedLawyers]=useState([
    {
      name: 'Ahmad Ali',
      email: 'ahmad@gmail.com',
      status: 'Rejected',
    },
    {
      name: 'John Doe',
      email: 'john@gmail.com',
      status: 'Rejected',
    },
  ])

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  const selectedLawyers = (buttonType) => {
    switch (buttonType) {
      case 'All':
        return allLawyers;
      case 'Pending':
        return pendingLawyers;
      case 'Rejected':
        return rejectedLawyers;
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
            Pending
          </button>
          <button
            className={selectedButton === 'Rejected' ? 'selected-button' : ''}
            onClick={() => handleButtonClick('Rejected')}
          >
            Rejected
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
            {selectedLawyers(selectedButton).map((lawyer, index) => (
              <div className="admin-details" key={index}>
                <p>{lawyer.name}</p>
                <p>{lawyer.email}</p>
                <p>{lawyer.status}</p>
                <button onClick={() => setShowApproveModel(true)}>Profile</button>
                {showApproveModel && (
                  <LawyerApproveModel setShowApproveModel={setShowApproveModel} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
