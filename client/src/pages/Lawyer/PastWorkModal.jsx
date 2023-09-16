import React, { useState } from 'react';
import "./Lawyer.css"
const PastWorkModal = ({ onSave, onClose }) => {
  const [caseDate, setCaseDate] = useState('');
  const [caseType, setCaseType] = useState('');
  const [court, setCourt] = useState('');

  const handleSave = () => {
    onSave({ caseDate, caseType, court });
    onClose();
  };

  return (
    <div className="request-wrap">
      <div className="modal">
        <h2>Add Past Work</h2>
        <label>Date:</label>
        <input type="text" value={caseDate} onChange={(e) => setCaseDate(e.target.value)} />
        <label>Case Type:</label>
        <input type="text" value={caseType} onChange={(e) => setCaseType(e.target.value)} />
        <label>Court:</label>
        <input type="text" value={court} onChange={(e) => setCourt(e.target.value)} />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PastWorkModal;
