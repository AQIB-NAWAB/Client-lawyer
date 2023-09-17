import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ViewProfileModel = ({details, setViewProfileModel }) => {
  const showMsg = () => {
    setViewProfileModel(false);
  };
console.log(details)
  return (
    <div className="view-profile-wrap">
      <div className="view-profile-detail-container">
        <div className="view-profile-model">
          <div className="model-h2">
            <h2>
              Profile <AiOutlineClose className="cross" onClick={()=>showMsg()}/>
            </h2>
          </div>

          <div className="model-details-p">
            <p>Name: {details.client_info.name}</p>
            <p>Province: {details.client_info.province}</p>
            <p>City: {details.client_info.city}</p>
            <p>Email: {details.client_info.email}</p>
            <p>Contact: {details.client_info.contact}</p>
            <p>
              Description : <br /> {details.client_info.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfileModel;
