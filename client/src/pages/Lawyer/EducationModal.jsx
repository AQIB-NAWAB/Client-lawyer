import React, { useState } from 'react';

const ServicesModal = ({ onSave, onClose }) => {
  const [service, setService] = useState('');

  const handleSave = () => {
    onSave(service);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add Services</h2>
      <label>Service:</label>
      <input type="text" value={service} onChange={(e) => setService(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ServicesModal;
