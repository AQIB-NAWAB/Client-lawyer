import React ,{useState} from 'react'
import LoginNavbar from '../../components/LoginSignUpNavbar/LoginNavbar'
import "./AdminPage.css"
import LawyerApproveModel from './LawyerApproveModel';

const AdminPage = () => {
    const [selectedButton, setSelectedButton] = useState('All');
    const[showApproveModel , setShowApproveModel] = useState(false)

    const handleButtonClick = (buttonType) => {
      setSelectedButton(buttonType);
    };
  return (
    <>
        <LoginNavbar/>
        <div className='admin-container'>
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
                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button
                     onClick={()=>setShowApproveModel(true)} 
                     >Profile</button>
                    {showApproveModel && <LawyerApproveModel setShowApproveModel={setShowApproveModel} />}

                </div>

                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>

                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>

                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>

                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>

                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>

                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>

                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>

                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>

                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>


                <div className="admin-details">
                    <p>Ahmad Ali</p>
                    <p>ahmad@gmail.com</p>
                    <p>Pending</p>
                    <button>Profile</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminPage