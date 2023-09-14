import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ViewProfileModel = ({ setViewProfileModel }) => {
  const showMsg = () => {
    setViewProfileModel(false);
  };

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
            <p>Name: Qamar</p>
            <p>Province: Sindh</p>
            <p>City: Karachi</p>
            <p>Email: google@gmail.com</p>
            <p>Contact: 0320424324</p>
            <p>
              Description : <br /> Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium repellendus et quis dolorem expedita
              corporis dolor vel doloribus veniam quia quidem, nam
              necessitatibus rerum eius aliquam laudantium pariatur ex
              similique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfileModel;
