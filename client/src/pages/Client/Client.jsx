import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { PiPencilLight } from 'react-icons/pi';
import './Client.css';
import { Link } from 'react-router-dom';
import ClientNavbar from '../../components/ClientNavbar/ClientNavbar';

const Client = () => {
  const [headEditMode, setHeadEditMode] = useState(false);
  const [descriptionEditMode, setDescriptionEditMode] = useState(false);
  const [detailsEditMode, setDetailsEditMode] = useState(false);

  const [clientName, setClientName] = useState('*Client Name*');
  const [city, setCity] = useState('LAHORE');
  const [email, setEmail] = useState('@hmail.com');
  const [phone, setPhone] = useState('0322000000');
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid amet quasi eius accusamus aliquam obcaecati perspiciatis! Fugit nobis facere illo, recusandae eum rem quam quo hic dolorum, ex minus maxime.'
  );

  const handleSaveChanges = () => {
    // You can perform any necessary validation here before saving changes
    // For simplicity, let's assume validation is successful
    setHeadEditMode(false);
    setDetailsEditMode(false);
    setDescriptionEditMode(false);
  };

  return (
    <>
      <ClientNavbar />
      <div className="client-dash">
        <div className="left-dashboard">
          <h3>Dashboard</h3>
          <div className="client-link">
            <ul>
              <li>
                <Link to="/client/profile" className="bold">
                  <BsPerson />
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/client/search">
                  <BiSearchAlt />
                  Search
                </Link>
              </li>
              <li>
                <Link to="/client/myjobs">
                  <MdOutlinePersonSearch />
                  My Jobs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-dashboard">
          <div className="head">
            <h1>
              <span className="person">
                <BsPerson />
              </span>
              {headEditMode ? (
                <>
                  <input
                    className='save-changes-c-input'
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />{' '}
                  <button onClick={handleSaveChanges} className='save-changes-c-name'>Update</button>
                </>
              ) : (
                <>
                  {clientName}
                  <PiPencilLight
                    className="pencil"
                    onClick={() => setHeadEditMode(true)}
                  />
                </>
              )}
            </h1>
          </div>
          <hr />
          <section className="dash-container">
            <div className="detail-btn">
              <PiPencilLight
                className="pencil "
                onClick={() => setDetailsEditMode(true)}
              />
              <ul>
                <li>
                  City:{' '}
                  {detailsEditMode ? (
                    <>
                      <input
                       className='save-changes-c-input'
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />{' '}
                    </>
                  ) : (
                    <>{city}</>
                  )}
                </li>
                <li>
                  Email:{' '}
                  {detailsEditMode ? (
                    <>
                      <input
                       className='save-changes-c-input'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />{' '}
                    </>
                  ) : (
                    <>{email}</>
                  )}
                </li>
                <li>
                  Phone:{' '}
                  {detailsEditMode ? (
                    <>
                      <input
                       className='save-changes-c-input'
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />{' '}
                      <button onClick={handleSaveChanges} className='save-changes-c-details' >Save Changes</button>
                    </>
                  ) : (
                    <>{phone}</>
                  )}
                </li>
              </ul>
            </div>
            <div className="description">
              <span className="header">
                <h1>DESCRIPTION:</h1>
                <PiPencilLight
                  className="pencil"
                  onClick={() => setDescriptionEditMode(true)}
                />
              </span>
              {descriptionEditMode ? (
                <>
                  <textarea
                    className='save-changes-c-des'
                    cols="80"
                    rows={10}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>{' '}
                  <button onClick={handleSaveChanges} className='save-changes-c-details'>Save Changes</button>
                </>
              ) : (
                <>
                  <p>{description}</p>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Client;
