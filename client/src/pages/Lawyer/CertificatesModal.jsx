import React, { useState } from 'react';

const CertificatesModal = ({ onSave, onClose }) => {
  const [institute, setInstitute] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  const handleSave = () => {
    onSave({ institute, graduationYear });
    onClose();
  };

  return (
    <div className="modal">
      <h2>Add Certificates</h2>
      <label>Institute:</label>
      <input type="text" value={institute} onChange={(e) => setInstitute(e.target.value)} />
      <label>Graduation Year:</label>
      <input type="text" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default CertificatesModal;
