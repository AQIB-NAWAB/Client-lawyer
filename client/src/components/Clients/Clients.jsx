import React, { useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { LiaEnvelopeOpenTextSolid } from 'react-icons/lia';
import { PiUsersThreeFill } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import LawyerNavbar from '../../components/LawyerNavbar/LawyerNavbar';
import './Clients.css';
import { getAllAcceptedOffer, getAllSentOffer } from '../../store/reducers/lawyerReducer';
import { useDispatch, useSelector } from 'react-redux';
import ViewProfileModel from './ViewProfileModel';

const Clients = () => {
  const { acceptedoffers,sentOffers,loading } = useSelector((state) => state.Lawyer);
  const [viewProfileModels, setViewProfileModels] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllAcceptedOffer());
    dispatch(getAllSentOffer())
  }, [dispatch]);

  // Function to toggle the modal for a specific offer
  const toggleViewProfileModel = (offerId) => {
    setViewProfileModels((prevModels) => ({
      ...prevModels,
      [offerId]: !prevModels[offerId], // Toggle the value
    }));
  };

  return (
    <>
      <LawyerNavbar />
      <div className="client-dash">
        <div className="left-dashboard">
          <h3>Dashboard</h3>
          <div className="client-link">
            <ul>
              <li>
                <Link to="/lawyer/profile">
                  <BsPerson /> Profile
                </Link>
              </li>
              <li>
                <Link to="/lawyer/request">
                  <LiaEnvelopeOpenTextSolid /> Request
                </Link>
              </li>
              <li>
                <Link to="/lawyer/clients" className="bold">
                  <PiUsersThreeFill /> Clients
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-dashboard">
          <div className="head">
            <h1 className="my-jobs-h1">Manage Clients</h1>
          </div>
          <hr />
          <section className="my-jobs-container">
            <div className="my-jobs">
              <div className="left-myjobs">
                <h1>Sent Offers</h1>
                <section className="offer-box-container-ab">
                {loading?<p  style={{textAlign:"center"}}>Loading...</p>:
                    sentOffers?.lawyerOffers?.map((single_offer)=>(
                        <div className="offer-box" key={single_offer._id}>
                    <span className='offer-box-headings'>
                        <p>{single_offer.client_info.name}</p>
                        <p>{single_offer?.case_type}</p>
                        <p>{single_offer?.client_info.province}</p>
                        <p>{single_offer?.client_info.city}</p>
                    </span>
                    <span className='offer-description-span'>
                        <p className='offer-box-p'>Offer Description:</p>
                        <p>{single_offer.description}</p>
                    </span>
                    <span className='offer-box-footer'>
                        <span><p className='offer-box-f'>Rate:</p><p>{single_offer.rate}Rs.</p></span>
                    </span>
                </div>
                    ))
                }

                </section>
              </div>
              <div className="right-myjobs">
                <h1>Accepted Offers</h1>
                <section className="offer-box-container">
                  {
                    loading?<p  style={{textAlign:"center"}}>Loading...</p>:
                    acceptedoffers?.lawyerOffers?.map((single_offer) => (
                    <div className="offer-box" key={single_offer._id}>
                      <span className="offer-box-headings">
                        <p>{single_offer.client_info.name}</p>
                        <p>{single_offer.case_type}</p>
                        <p>{single_offer.client_info.city}</p>
                        <p>{single_offer.client_info.province}</p>
                      </span>
                      <span className="offer-description-span">
                        <p className="offer-box-p">Offer Description:</p>
                        <p>{single_offer.description}</p>
                      </span>
                      <span className="offer-box-footer">
                        <span>
                          <p className="offer-box-f">Rate:</p>
                          <p>{single_offer.rate}Rs.</p>
                        </span>
                        <button onClick={() => toggleViewProfileModel(single_offer._id)}>
                          View Profile
                        </button>
                        {viewProfileModels[single_offer._id] && (
                          <ViewProfileModel
                            details={single_offer}
                            setViewProfileModel={() => toggleViewProfileModel(single_offer._id)}
                          />
                        )}
                      </span>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Clients;
