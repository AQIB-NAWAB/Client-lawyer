import React from 'react'
import ClientRequest from './ClientRequest'

const ClientDetailModel = ({setShowModel}) => {
  const showMsg =()=>{
     setShowModel(false)

  }

  return (
    <div className="request-wrap">
    <div className='request-detail-container'>
        <div className="request-left-detail">
            <p>Client Request</p>
            <p>Name : Qamar</p>
            <p>Budget : 20000pkr</p>
            <p>Case Type : Family</p>
            <p>Case Description :</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non suscipit excepturi error autem perferendis, hic, voluptatem quam quidem magni velit possimus, doloremque nihil similique provident. Tenetur quis soluta sequi alias?</p>
        </div>
        <div className="request-right-detail">
            <p>Send Offer</p>
            <p>Describe Offer:</p>
            <span className='describe-offer'><textarea name="" id="" cols="30" rows="5"></textarea></span>
            <p>Hourly Rate :</p>
            <span className='btn-send-offer'>
                <button className='send-btn'>Send</button>
                <button className='cancel-btn' onClick={()=>showMsg()}>Cancel</button>
            </span>

        </div>
    </div>
    </div>
  )
}

export default ClientDetailModel